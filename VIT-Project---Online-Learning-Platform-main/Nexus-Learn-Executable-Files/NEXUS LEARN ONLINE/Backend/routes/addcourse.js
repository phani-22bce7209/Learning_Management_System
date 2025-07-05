const express = require("express");
const router = express.Router();
const Addcourse = require("../models/Addcourse");

// GET all courses
router.get("/", async (req, res) => {
  try {
    const courses = await Addcourse.find();
    res.status(200).json({ data: courses });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// GET course by ID
router.get("/:id", async (req, res) => {
  try {
    const course = await Addcourse.findById(req.params.id);
    if (!course) return res.status(404).json({ message: "Course not found" });
    res.status(200).json({ data: course });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// POST a new course
router.post("/", async (req, res) => {
  try {
    const newCourse = new Addcourse(req.body);
    const savedCourse = await newCourse.save();
    res.status(201).json({ data: savedCourse });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

// PUT (update course name by ID)
router.put("/:id", async (req, res) => {
  try {
    const updated = await Addcourse.findByIdAndUpdate(
      req.params.id,
      { courseName: req.body.courseName },
      { new: true }
    );
    if (!updated) return res.status(404).json({ message: "Course not found" });
    res.status(200).json({ data: updated });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// DELETE course
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await Addcourse.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Course not found" });
    res.status(200).json({ message: "Course deleted" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
