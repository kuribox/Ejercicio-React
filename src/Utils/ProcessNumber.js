export const numberWithDot = x => {
  return x.toString()
    .replace('.', ',')
    .replace(/\B(?=(\d{3})+(?!\d))/g, '.');
};

export const numberWithComma = x => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
