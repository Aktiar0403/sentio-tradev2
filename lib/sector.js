export function calculateSectorStrength(stocks) {
  const sectorMap = {};

  stocks.forEach(stock => {
    const change = ((stock.price - stock.prevClose) / stock.prevClose) * 100;

    if (!sectorMap[stock.sector]) {
      sectorMap[stock.sector] = {
        totalChange: 0,
        count: 0
      };
    }

    sectorMap[stock.sector].totalChange += change;
    sectorMap[stock.sector].count += 1;
  });

  // Convert to array with average strength
  const sectorStrength = Object.keys(sectorMap).map(sector => {
    const avgChange = sectorMap[sector].totalChange / sectorMap[sector].count;

    return {
      sector,
      strength: avgChange
    };
  });

  // Sort strongest first
  sectorStrength.sort((a, b) => b.strength - a.strength);

  return sectorStrength;
}