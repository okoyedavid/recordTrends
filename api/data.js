// api/users.js
export default function handler(req, res) {
  res.status(200).json({ name: "John Doe", age: 30 });
}
