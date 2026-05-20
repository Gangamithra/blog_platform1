const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const protect = require("./middleware/authMiddleware");
const blogRoutes = require("./routes/blogRoutes");
require("dotenv").config();
const connectDB = require("./config/db");
const path = require("path");

const app = express();

// connect database
connectDB();

// ─── CORS ─────────────────────────────────────────────────────────────────────
app.use(cors({
  origin: "*",
  credentials: false,
}));

app.use(express.json());

// ─── Routes ───────────────────────────────────────────────────────────────────
app.use("/api/auth",  authRoutes);
app.use("/api/blogs", blogRoutes);
app.use("/uploads",   express.static(path.join(__dirname, "uploads")));

// test route
app.get("/", (req, res) => {
  res.send("Inkwell API is running...");
});

app.get("/api/protected", protect, (req, res) => {
  res.json({ message: "Protected route accessed", user: req.user });
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
