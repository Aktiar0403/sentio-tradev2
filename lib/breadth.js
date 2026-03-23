export function calculateBreadth(stocks) {
  let advance = 0;
  let decline = 0;

  stocks.forEach(stock => {
    if (stock.price > stock.prevClose) {
      advance++;
    } else if (stock.price < stock.prevClose) {
      decline++;
    }
  });

  return {
    advance,
    decline,
    ratio: advance / (decline || 1)
  };
}