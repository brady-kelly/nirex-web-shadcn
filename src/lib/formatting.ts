import type { Decimal } from "@prisma/client/runtime/client";

export function formatCurrency(
  amount: Decimal,
  currencyCode = "ZAR",
  locale = "en-ZA"
) {
  const currencyFormatter = new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currencyCode,
    minimumFractionDigits: 2,
  });
  const num = Number(amount);
  const withComma = `${currencyFormatter.format(num)}`;
  return withComma.replace(",", ".");
}

export function camelToTitleCase(str: string): string {
  return str
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (match) => match.toUpperCase())
    .trim();
}
