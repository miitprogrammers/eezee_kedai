// Minimal API client wrapper for frontend (plain JS with JSDoc for types)
const BASE = import.meta.env.VITE_API_BASE || 'http://localhost:3000';

/**
 * @returns {Promise<Record<string, unknown>>}
 */
export async function getOpenApiJson () {
  const res = await fetch(`${BASE}/api/docs/openapi.json`);
  if (!res.ok) throw new Error(`Failed to fetch openapi.json: ${res.status}`);
  return res.json();
}

/**
 * @param {string} email
 * @param {string} password
 * @returns {Promise<Record<string, unknown>>}
 */
export async function login (email, password) {
  const res = await fetch(`${BASE}/api/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });
  if (!res.ok) throw new Error(`Login failed: ${res.status}`);
  return res.json();
}

/**
 * @param {string} token
 * @param {Record<string, unknown>} payload
 * @returns {Promise<Record<string, unknown>>}
 */
export async function stockIn (token, payload) {
  const res = await fetch(`${BASE}/api/inventory/tx/stock-in`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error(`StockIn failed: ${res.status}`);
  return res.json();
}
