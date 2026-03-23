export function calculateBreadth(stocks) {
  let advance = 0;
  let decline = 0;
  let strong = 0;

  stocks.forEach(stock => {
    const change = ((stock.price - stock.prevClose) / stock.prevClose) * 100;

    if (change > 0) {
      advance++;
      if (change > 1) strong++; // strong move
    } else if (change < 0) {
      decline++;
    }
  });

  return {
    advance,
    decline,
    strong,
    ratio: advance / (decline || 1)
  };
}