import { Decimal } from "@prisma/client/runtime/client";

const currencyFormatter = new Intl.NumberFormat("en-US", {
  minimumFractionDigits: 2,
});

export function formatCurrency(
  amount: Decimal,
  currencyCode: string,
  locale = "en-ZA"
) {
  const num = Number(amount);
  // TODO: Fix asap.
  return `R ${currencyFormatter.format(num)}`;
  //   return new Intl.NumberFormat(locale, {
  //     style: "currency", // Specifies monetary formatting
  //     currency: currencyCode, // Specifies the currency code
  //   }).format(amount);
}
