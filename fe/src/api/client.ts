// Minimal API client wrapper for frontend
const BASE = import.meta.env.VITE_API_BASE || "http://localhost:3000";

export async function getOpenApiJson() {
  const res = await fetch(`${BASE}/api/docs/openapi.json`);
  if (!res.ok) throw new Error(`Failed to fetch openapi.json: ${res.status}`);
  return res.json();
}

export async function login(email: string, password: string) {
  const res = await fetch(`${BASE}/api/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  if (!res.ok) throw new Error(`Login failed: ${res.status}`);
  return res.json();
}

export async function stockIn(token: string, payload: any) {
  const res = await fetch(`${BASE}/api/inventory/tx/stock-in`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error(`StockIn failed: ${res.status}`);
  return res.json();
}
