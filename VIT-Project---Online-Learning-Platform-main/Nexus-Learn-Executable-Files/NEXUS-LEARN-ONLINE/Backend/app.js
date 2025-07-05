const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json({ extended: false, limit: "50mb" }));

// API routes
app.use("/api/userlist", require("./routes/userlist"));
app.use("/api/addstudents", require("./routes/addstudents"));
app.use("/api/addcourse", require("./routes/addcourse"));
app.use("/api/newsandannu", require("./routes/newsandannu"));
app.use("/api/request", require("./routes/request"));


// ✅ Error-handling middleware — add here, at the end
app.use((err, req, res, next) => {
  console.error("Unhandled Error:", err.stack);
  res.status(500).json({ message: "Something went wrong!" });
});

// Server listener
const PORT = process.env.PORT || 5005;
app.listen(PORT, () => console.log(`Server running at ${PORT}`));
