export default function checkingNumber(number) {
  const result = parseInt(number, 10).toString() === number;
  if (result === false) {
    throw new Error(`Вводимые данные не являются числом в десятичной системе счисления ${number}`);
  }

  return number;
}
