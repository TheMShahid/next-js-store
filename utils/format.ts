export const formatCurrency = (number: number | null) => {
  const value = number || 0;
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(value);
};
