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
      return NextResponse.json(
        { error: "Please enter your name." },
        { status: 400 }
      );
    }

    if (!isValidEmail(payload.email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    if (!payload.message) {
      return NextResponse.json(
        { error: "Please enter your message." },
        { status: 400 }
      );
    }

    await saveContactSubmission(payload);

    return NextResponse.json(
      {
        message:
          "Thanks for reaching out. Your message has been sent successfully.",
      },
      { status: 201 }
    );
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Unable to save your message.";

    const isConfigurationError = errorMessage.includes("MONGODB_URI");

    return NextResponse.json(
      {
        error: isConfigurationError
          ? "Contact storage is not configured yet. Add MongoDB env vars to enable it."
          : "Something went wrong while saving your message.",
      },
      { status: isConfigurationError ? 500 : 500 }
    );
  }
}
