const mongoose = require("mongoose");
const Addcourse = require("./models/Addcourse"); // adjust path if needed

mongoose.connect("mongodb://127.0.0.1:27017/yourDatabaseName") // replace with your DB name
  .then(async () => {
    const courses = [
      { courseName: "Web Development" },
      { courseName: "Data Structures" },
      { courseName: "Machine Learning" },
      { courseName: "Cyber Security" },
      { courseName: "AI" }
    ];

    await Addcourse.insertMany(courses);
    console.log("Courses inserted!");
    process.exit();
  })
  .catch(err => {
    console.error("MongoDB connection error:", err);
  });
