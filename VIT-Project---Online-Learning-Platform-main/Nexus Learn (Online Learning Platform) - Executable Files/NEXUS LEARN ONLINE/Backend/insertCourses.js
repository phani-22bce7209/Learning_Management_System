// insertCourse.js

const mongoose = require("mongoose");
require("dotenv").config({ path: "./config.env" });
const Addcourse = require("./models/Addcourse");

// Step 1: Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("✅ MongoDB connected");
  insertCourses();
})
.catch((err) => {
  console.error("❌ MongoDB connection error:", err);
});

// Step 2: Define courses and insert
const insertCourses = async () => {
  try {
    const courses = [
      { courseName: "Physics" },
      { courseName: "Computer Science" },
      { courseName: "Biology" },
      { courseName: "English" },
      { courseName: "Artificial Intelligence" }
    ];

    await Addcourse.insertMany(courses);
    console.log("✅ Courses inserted successfully");
  } catch (err) {
    console.error("❌ Course insertion error:", err);
  } finally {
    mongoose.disconnect();
  }
};
