export const formatAddress = (address) => {
  return `${address.substring(0, 6)}...${address.substring(
    address.length - 4
  )}`;
};

export const currencyFormat = (num) => {
  return num
    ? "₦ " +
        parseFloat(num)
          .toFixed(2)
          .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
    : 0.0;
};
