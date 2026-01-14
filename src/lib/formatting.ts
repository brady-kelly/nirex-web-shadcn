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

export function camelToTitleCase(str: string): string {
  return (
    str
      // 1. Insert a space before all caps
      .replace(/([A-Z])/g, " $1")
      // 2. Capitalize the first letter (in case it was lowercase)
      .replace(/^./, (match) => match.toUpperCase())
      // 3. Remove leading space if the original string started with a capital
      .trim()
  );
}
