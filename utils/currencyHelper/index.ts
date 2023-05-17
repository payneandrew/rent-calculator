import currency from "currency.js";

export const format = (value: number) => {
  return currency(value, {
    errorOnInvalid: true,
  }).format();
};

// add

// multiply

// think of this file as a currency helper that I didn't know its using currency.js
