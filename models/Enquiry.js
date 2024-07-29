const mongoose = require("mongoose");

const enquirySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  query: {
    type: String,
    required: true,
  },
});

const Enquiry = mongoose.model("Enquiry", enquirySchema);
module.exports = Enquiry;
