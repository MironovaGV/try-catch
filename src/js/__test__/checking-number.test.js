import checkingNumber from '../checking-number';

test('checking the decimal number', () => {
  const number = '10';

  expect(checkingNumber(number)).toBe('10');
});

test('checking the text value', () => {
  const number = 'Hello';

  expect(() => checkingNumber(number)).toThrow(Error);
});

test('checking a number from a different number system', () => {
  const number = 'Оx14';

  expect(() => checkingNumber(number)).toThrow('Вводимые данные не являются числом в десятичной системе счисления Оx14');
});
