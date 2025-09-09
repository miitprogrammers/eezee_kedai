# OpenAPI TypeScript Fetch Client

This folder contains a minimal TypeScript fetch client generated from `docs/openapi.yaml`.

How to use (basic):

```ts
import { login, createKedai } from './openapi-client';

async function example() {
  const { token } = await login({ email: 'pemilik@test.local', password: 'password123' });
  await createKedai(token, { nama: 'My Kedai' });
}
```

Notes:
- This is a lightweight client for frontend dev. It uses the `fetch` API and returns parsed JSON or throws on non-OK responses.
- Set `OPENAPI_BASE` env var to change the base URL when bundling.
