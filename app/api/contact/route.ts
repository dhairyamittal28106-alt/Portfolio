import { NextResponse } from "next/server";
import {
  saveContactSubmission,
  type ContactSubmissionInput,
} from "@/lib/contact-submissions";

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function normalizeField(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function badRequest(error: string) {
  return NextResponse.json({ error }, { status: 400 });
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Partial<ContactSubmissionInput>;

    const payload: ContactSubmissionInput = {
      name: normalizeField(body.name),
      email: normalizeField(body.email).toLowerCase(),
      company: normalizeField(body.company),
      message: normalizeField(body.message),
    };

    if (!payload.name) {
      return badRequest("Please enter your name.");
    }

    if (!isValidEmail(payload.email)) {
      return badRequest("Please enter a valid email address.");
    }

    if (!payload.message) {
      return badRequest("Please enter your message.");
    }

    await saveContactSubmission(payload);

    return NextResponse.json(
      { message: "Thanks for reaching out. Your message has been sent successfully." },
      { status: 201 }
    );
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "";
    const isConfigurationError = errorMessage.includes("MONGODB_URI");
    const message = isConfigurationError
      ? "Contact storage is not configured yet. Add MongoDB env vars to enable it."
      : "Something went wrong while saving your message.";

    return NextResponse.json(
      { error: message },
      { status: 500 }
    );
  }
}
