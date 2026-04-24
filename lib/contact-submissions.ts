import { ObjectId } from "mongodb";
import { getMongoClientPromise } from "@/lib/mongodb";

export type ContactSubmissionInput = {
  name: string;
  email: string;
  company?: string;
  message: string;
};

export type ContactSubmission = ContactSubmissionInput & {
  _id?: ObjectId;
  createdAt: Date;
};

const DATABASE_NAME = process.env.MONGODB_DB || "portfolio";
const COLLECTION_NAME = "contact_submissions";

export async function saveContactSubmission(
  input: ContactSubmissionInput
): Promise<ContactSubmission> {
  const client = await getMongoClientPromise();
  const db = client.db(DATABASE_NAME);

  const submission: ContactSubmission = {
    name: input.name,
    email: input.email,
    company: input.company || "",
    message: input.message,
    createdAt: new Date(),
  };

  await db.collection<ContactSubmission>(COLLECTION_NAME).insertOne(submission);

  return submission;
}
