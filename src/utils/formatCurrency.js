export const formatCurrency = (code) => {
  const currency = {
    USD: '$',
    EUR: '€',
  };

  return Object.prototype.hasOwnProperty.call(currency, code) ? currency[code] : code;
};
