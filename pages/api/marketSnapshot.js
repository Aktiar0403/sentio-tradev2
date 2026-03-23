import { calculateBreadth } from "../../lib/breadth";

export default function handler(req, res) {
const stocks = [
  { symbol: "RELIANCE", price: 2500, prevClose: 2450 },
  { symbol: "TCS", price: 3500, prevClose: 3550 }
];

  const breadth = calculateBreadth(stocks);

  res.status(200).json({
    stocks,
    breadth
  });
}