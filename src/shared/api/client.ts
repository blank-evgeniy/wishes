/* eslint-disable @typescript-eslint/no-explicit-any */
export class ApiError extends Error {
  status: number;
  body: any;

  constructor(status: number, message?: string) {
    super(message ?? `API Error: ${status}`);
    this.status = status;
  }
}

export function isApiError(err: unknown): err is ApiError {
  return (
    err instanceof ApiError ||
    (typeof err === "object" &&
      err !== null &&
      "status" in err &&
      "body" in err)
  );
}

export async function apiFetch<T>(
  input: RequestInfo,
  init?: RequestInit,
): Promise<T> {
  const res = await fetch(input, {
    ...init,
    headers: {
      "Content-Type": "application/json",
      ...init?.headers,
    },
  });

  if (!res.ok) {
    throw new ApiError(res.status, res.statusText);
  }

  return res.json();
}
