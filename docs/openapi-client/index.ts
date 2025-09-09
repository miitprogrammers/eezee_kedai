// Minimal TypeScript fetch client generated from docs/openapi.yaml
// Usage: import { apiClient } from './openapi-client';

export type LoginResponse = { token: string };

const base = (process.env.OPENAPI_BASE || 'http://localhost:3000').replace(/\/$/, '');

function authHeaders(token?: string): Record<string, string> {
  return token ? { Authorization: `Bearer ${token}` } : {};
}

export async function registerUser(payload: { nama?: string; email: string; password: string; role?: string }) {
  const res = await fetch(`${base}/api/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' } as HeadersInit,
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error(`register failed: ${res.status}`);
  return res.json();
}

export async function login(payload: { email: string; password: string }): Promise<LoginResponse> {
  const res = await fetch(`${base}/api/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' } as HeadersInit,
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error(`login failed: ${res.status}`);
  return res.json();
}

export async function createKedai(token: string, payload: { nama: string }) {
  const headers: Record<string, string> = { 'Content-Type': 'application/json', ...authHeaders(token) };
  const res = await fetch(`${base}/api/mgmt/kedai`, {
    method: 'POST',
    headers: headers as HeadersInit,
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error(`createKedai failed: ${res.status}`);
  return res.json();
}

export async function createCabang(token: string, payload: { nama: string; kedai_id: string }) {
  const headers: Record<string, string> = { 'Content-Type': 'application/json', ...authHeaders(token) };
  const res = await fetch(`${base}/api/mgmt/cabang`, {
    method: 'POST',
    headers: headers as HeadersInit,
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error(`createCabang failed: ${res.status}`);
  return res.json();
}

export async function createInventaris(token: string, payload: { nama: string; kode: string }) {
  const headers: Record<string, string> = { 'Content-Type': 'application/json', ...authHeaders(token) };
  const res = await fetch(`${base}/api/inventory/inventaris`, {
    method: 'POST',
    headers: headers as HeadersInit,
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error(`createInventaris failed: ${res.status}`);
  return res.json();
}

export async function stockIn(token: string, payload: { item_id: string; cabang_id: string; jumlah: number; harga_beli: number }) {
  const headers: Record<string, string> = { 'Content-Type': 'application/json', ...authHeaders(token) };
  const res = await fetch(`${base}/api/inventory/tx/stock-in`, {
    method: 'POST',
    headers: headers as HeadersInit,
    body: JSON.stringify(payload),
  });
  if (!res.ok) {
    const txt = await res.text();
    throw new Error(`stockIn failed: ${res.status} ${txt}`);
  }
  return res.json();
}

export const apiClient = {
  registerUser,
  login,
  createKedai,
  createCabang,
  createInventaris,
  stockIn,
};
