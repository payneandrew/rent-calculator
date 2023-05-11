import currency from "currency.js";

export const convertToCurrency = (value: number) => {
  return currency(value, {
    errorOnInvalid: true,
  }).format();
};
