import currency from "currency.js";

export const format = (value: number) => {
  return currency(value, {
    errorOnInvalid: true,
  }).format();
};

export const add = (value1: number, value2: number) => {
  return currency(value1, {
    errorOnInvalid: true,
  }).add(value2).value;
};

export const multiply = (value1: number, value2: number) => {
  return currency(value1, {
    errorOnInvalid: true,
  }).multiply(value2).value;
};
