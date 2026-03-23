export function calculateSectorFlow(current, previous) {
  const flow = [];

  current.forEach(curr => {
    const prev = previous.find(p => p.sector === curr.sector);

    const prevStrength = prev ? prev.strength : 0;
    const change = curr.strength - prevStrength;

    flow.push({
      sector: curr.sector,
      strength: curr.strength,
      change,
      trend:
        change > 0 ? "inflow" :
        change < 0 ? "outflow" :
        "neutral"
    });
  });

  // Sort by biggest inflow
  flow.sort((a, b) => b.change - a.change);

  return flow;
}