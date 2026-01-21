"use server";

export async function fetchAccessToken() {
  const shop = process.env.SHOPIFY_SHOP_NAME;
  if (!shop) {
  }
  const url = `POST https://${process.env.SHOPIFY_SHOP_NAME}.myshopify.com/admin/oauth/access_token`;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: new URLSearchParams({
      grant_type: "client_credentials",
      client_id: process.env.SHOPIFY_CLIENT_ID!,
      client_secret: process.env.SHOPIFY_CLIENT_SECRET!,
    }),
  });
}
