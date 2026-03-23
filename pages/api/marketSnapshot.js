import { calculateBreadth } from "../../lib/breadth";
import { calculateSectorStrength } from "../../lib/sector";
import { calculateSectorFlow } from "../../lib/sectorFlow";

export default function handler(req, res) {
const stocks = [
  { symbol: "RELIANCE", price: 2500, prevClose: 2450, sector: "Energy" },
  { symbol: "ONGC", price: 200, prevClose: 190, sector: "Energy" },

  { symbol: "TCS", price: 3500, prevClose: 3550, sector: "IT" },
  { symbol: "INFY", price: 1500, prevClose: 1480, sector: "IT" }
];

const previousSectorStrength = [
  { sector: "Energy", strength: 1.5 },
  { sector: "IT", strength: 0.5 }
];
  const breadth = calculateBreadth(stocks);
  const sectorStrength = calculateSectorStrength(stocks);
  const sectorFlow = calculateSectorFlow(
  sectorStrength,
  previousSectorStrength
);

res.status(200).json({
  stocks,
  breadth,
  sectorStrength,
  sectorFlow
});
}