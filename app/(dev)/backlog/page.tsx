import { notFound } from "next/navigation";

import Backlog from "../../../private/backlog.md";

export default function Page() {
  if (process.env.NODE_ENV === "production") return notFound();

  return <Backlog />;
}
