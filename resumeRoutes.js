const express = require("express");
const router = express.Router();

const upload = require("../middleware/upload");

router.post(
  "/upload",
  upload.single("resume"),
  (req, res) => {
    res.json({
      message: "Resume Uploaded",
      file: req.file,
    });
  }
);

module.exports = router;