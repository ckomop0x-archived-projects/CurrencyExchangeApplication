export const inputFilter = (value = '') => {
  let line = '';
  const currencyMask = /(?!0)(?:\d+)?(?:\.)?(?:\d)?(?:\d)/;
  const currencyMaskWithOne = /(?!0)(?:\d+)(?:\.)(?:\d)/;
  const currencyMaskWithDot = /(?!0)(?:\d+)(?:\.)/;
  if (currencyMaskWithDot.test(value) && !currencyMaskWithOne.test(value)) {
    line = currencyMaskWithDot.exec(value);
  } else if (currencyMask.test(value)) {
    line = currencyMask.exec(value);
  }

  return line[0] || '';
};
