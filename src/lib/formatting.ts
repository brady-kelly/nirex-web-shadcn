const currencyFormatter = new Intl.NumberFormat("en-US", {
  minimumFractionDigits: 2,
});

export function formatCurrency(
  amount: number,
  currencyCode: string,
  locale = "en-ZA"
) {
  // TODO: Fix asap.
  return `R ${currencyFormatter.format(amount)}`;
  //   return new Intl.NumberFormat(locale, {
  //     style: "currency", // Specifies monetary formatting
  //     currency: currencyCode, // Specifies the currency code
  //   }).format(amount);
}
