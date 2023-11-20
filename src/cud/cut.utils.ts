export const transformNumberSingleDigit = (value: number): number => {
  if (value < 0) {
    throw new Error('transformNumberToDigit: value must be positive');
  }

  const numberDigits = String(value)
    .split('')
    .map((v) => Number(v));

  const sumTotal = numberDigits.reduce((total, num) => total + num, 0);

  if (sumTotal > 9) {
    return transformNumberSingleDigit(sumTotal);
  }

  return sumTotal;
};

const getLuhnDigit = (keepNumbers: number[], mulNumbers: number[]) => {
  const multiplicatedNumbers = mulNumbers
    .map((v) => v * 2)
    .map(transformNumberSingleDigit);

  const sumTotal = [...multiplicatedNumbers, ...keepNumbers].reduce(
    (total, num) => total + num,
    0,
  );

  return 10 - (sumTotal % 10);
};

export const getCheckDigit = (value: number) => {
  const numberArray = String(value)
    .split('')
    .reverse()
    .map((v) => Number(v));

  const evenPositions = numberArray.filter((_, index) => index % 2 === 0);
  const oddPositions = numberArray.filter((_, index) => index % 2 === 1);

  const firstDigit = getLuhnDigit(evenPositions, oddPositions);
  const secondDigit = getLuhnDigit(oddPositions, evenPositions);

  return Number(`${firstDigit}${secondDigit}`);
};
