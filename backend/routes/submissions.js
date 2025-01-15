const express = require("express");
const Submission = require("../models/Submission");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// Create Submission
router.post("/", authMiddleware, async (req, res) => {
  const { name, country, company, questions } = req.body;
  try {
    const newSubmission = new Submission({
      name,
      country,
      company,
      questions,
      userId: req.user.id,
    });
    await newSubmission.save();
    res.status(201).json(newSubmission);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get Submissions
router.get("/", async (req, res) => {
  const { search } = req.query;
  try {
    const query = search
      ? {
          $or: [
            { name: { $regex: search, $options: "i" } },
            { country: { $regex: search, $options: "i" } },
            { company: { $regex: search, $options: "i" } },
          ],
        }
      : {};
    const submissions = await Submission.find(query);
    res.json(submissions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get User Submissions
router.get("/user", authMiddleware, async (req, res) => {
  try {
    const submissions = await Submission.find({ userId: req.user.id });
    res.json(submissions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
