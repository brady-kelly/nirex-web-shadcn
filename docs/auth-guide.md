# Missing Info in Authentication Guide

1. No login form and related code. This is minor though, as the signup form and related can be adapted.

2. In the guide's signup form, the `useActionState` call passes `undefined` for initial state. This causes the returned `state` value to also be undefined and not have an `errors` array as used in displaying validation errors. I fixed this by passing `initState = {} as FormState` to the hook.

3. Session Management.
   - The `SessionPayload` type used in the `encrypt` function is not mentioned anywhere in the guide, except for the advice that the payload should contain the minimum, unique user data. Maybe an actual example type would be helpful.
   - The `redirect` API is called but not imported. I found it in `next/navigation`.
   - A lot of topics shared by stateless and datebase sessions fall under the heading of Stateless Sessions, so I had a lot of missing types and functions when I skipped ahead to Database sessions, unaware that Stateless was required reading.
