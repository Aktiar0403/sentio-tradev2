import { calculateBreadth } from "../../lib/breadth";
import { calculateSectorStrength } from "../../lib/sector";
import { calculateSectorFlow } from "../../lib/sectorFlow";
import { detectSmartMoney } from "../../lib/smartMoney";

export default function handler(req, res) {
const stocks = [
  {
    symbol: "RELIANCE",
    price: 2500,
    prevClose: 2450,
    volume: 1200000,
    avgVolume: 800000,
    sector: "Energy"
  },
  {
    symbol: "ONGC",
    price: 200,
    prevClose: 190,
    volume: 900000,
    avgVolume: 600000,
    sector: "Energy"
  },
  {
    symbol: "TCS",
    price: 3500,
    prevClose: 3550,
    volume: 500000,
    avgVolume: 700000,
    sector: "IT"
  }
];

const previousSectorStrength = [
  { sector: "Energy", strength: 1.5 },
  { sector: "IT", strength: 0.5 }
];

const smartMoney = detectSmartMoney(stocks);
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
  sectorFlow,
  smartMoney
});
}