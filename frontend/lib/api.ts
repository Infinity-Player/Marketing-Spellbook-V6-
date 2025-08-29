// frontend/lib/api.ts

export async function apiGet<T>(endpoint: string): Promise<T> {
  const res = await fetch(`/api/${endpoint}`);
  if (!res.ok) {
    throw new Error(`GET /api/${endpoint} failed: ${res.status}`);
  }
  return res.json();
}

export async function apiPost<T>(endpoint: string, data: unknown): Promise<T> {
  const res = await fetch(`/api/${endpoint}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    throw new Error(`POST /api/${endpoint} failed: ${res.status}`);
  }
  return res.json();
}
