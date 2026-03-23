export default function handler(req, res) {
  res.status(200).json([
    { symbol: "RELIANCE", price: 2500 },
    { symbol: "TCS", price: 3500 }
  ]);
}
