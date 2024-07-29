const express = require("express");
const {
  createEnquiry,
  getEnquiries,
  deleteEnquiry,
} = require("../controllers/EnquiryController");

const router = express.Router();

router.get("/get", getEnquiries);

router.post("/create", createEnquiry);

router.post("/delete", deleteEnquiry);

module.exports = router;
