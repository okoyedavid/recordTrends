export default function handler(req, res) {
  if (req.method === "OPTIONS") {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    res.setHeader("Access-Control-Max-Age", "86400"); // Cache preflight response for 1 day
    res.status(204).end(); // End preflight request
    return;
  }

  // Handle actual API logic for other HTTP methods (GET, POST, etc.)
  res.status(200).json({ message: "Data fetched successfully!" });
}
