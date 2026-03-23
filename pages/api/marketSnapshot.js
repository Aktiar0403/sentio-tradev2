import { calculateBreadth } from "../../lib/breadth";

export default function handler(req, res) {
  const stocks = [
    { symbol: "RELIANCE", price: 2500 },
    { symbol: "TCS", price: 3500 }
  ];

  const breadth = calculateBreadth(stocks);

  res.status(200).json({
    stocks,
    breadth
  });
}