const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const studentRoutes = require("./routes/studentRoutes");

const app = express(); // ✅ declare app first

app.use(express.json());
app.use(express.static(path.join(__dirname, "public"))); // ✅ serve frontend

mongoose.connect("mongodb://localhost:27017/studentDB", {
  useNewUrlParser: true,
}).then(() => {
  console.log("✅ Connected to MongoDB");
}).catch((err) => {
  console.error("❌ MongoDB connection failed:", err);
});

app.use("/api/students", studentRoutes); // ✅ route for API

// Optional: If no index.html, send a simple message
app.get("/", (req, res) => {
  res.send("🎉 Welcome to Student Management System");
});

app.listen(5000, () => {
  console.log("✅ Server running at http://localhost:5000");
});
