import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Welcome to the Quotes API! Go to /quote to get a random quote.");
});

app.get("/quote", async (req, res) => {
  try {
    const response = await fetch("https://zenquotes.io/api/random");
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch quote" });
  }
});



app.listen(PORT, () => {
  console.log(`Backend running at http://localhost:${PORT}`);
});
