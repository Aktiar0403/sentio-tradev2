export function detectSmartMoney(stocks) {
  const signals = [];

  stocks.forEach(stock => {
    const priceChange =
      ((stock.price - stock.prevClose) / stock.prevClose) * 100;

    const volumeRatio = stock.volume / stock.avgVolume;

    let signal = null;

    if (volumeRatio >= 1.5 && priceChange > 1) {
      signal = "ACCUMULATION"; // strong buying
    } else if (volumeRatio >= 1.5 && priceChange < -1) {
      signal = "DISTRIBUTION"; // strong selling
    } else if (volumeRatio > 2 && Math.abs(priceChange) < 0.5) {
      signal = "ABSORPTION"; // hidden accumulation
    }

    if (signal) {
      signals.push({
        symbol: stock.symbol,
        signal,
        priceChange: priceChange.toFixed(2),
        volumeRatio: volumeRatio.toFixed(2)
      });
    }
  });

  return signals;
}