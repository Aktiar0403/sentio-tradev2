export function calculateBreadth(stocks) {
  let advance = 0;
  let decline = 0;

  stocks.forEach(stock => {
    if (stock.price > 3000) {
      advance++;
    } else {
      decline++;
    }
  });

  return {
    advance,
    decline,
    ratio: advance / (decline || 1)
  };
}