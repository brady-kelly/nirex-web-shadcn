# Missing Info in Authorization Guide

1. Data Access Layer

- `data/auth.tsx`
  - `cookies().get("AUTH_TOKEN")` should be `(await cookies().get('AUTH_TOKEN'))?.value`. I think.
  - `decryptAndValidate` is called but not defined anywhere.
