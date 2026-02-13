import { notFound } from "next/navigation";

export default async function Page() {
  if (process.env.NODE_ENV === "production") return notFound();

  const Backlog = (await import("../../../private/backlog.md")).default;

  return <Backlog />;
}
