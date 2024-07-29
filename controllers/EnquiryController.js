const Enquiry = require("../models/Enquiry");

exports.createEnquiry = async (req, res) => {
  try {
    const { name, email, query, date } = req.body;

    const newquery = new Enquiry({ name, email, query, date });
    await newquery.save();
    return res.status(200).send({
      message: "Created a new query",
      success: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      message: "Internal server error",
      success: false,
      error,
    });
  }
};

exports.getEnquiries = async (req, res) => {
  try {
    const enquiries = await Enquiry.find();
    return res.status(200).send({
      message: "All Enquiries",
      success: true,
      enquiries,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      message: "Internal server error",
      success: false,
      error,
    });
  }
};

exports.deleteEnquiry = async (req, res) => {
  try {
    const { id } = req.body;

    if (!id) {
      return res.status(400).send({
        message: "Enquiry ID is required",
        success: false,
      });
    }

    const enquiry = await Enquiry.findByIdAndDelete(id);

    if (!enquiry) {
      return res.status(404).send({
        message: "Enquiry not found",
        success: false,
      });
    }

    return res.status(200).send({
      message: "Enquiry deleted successfully",
      success: true,
      enquiry,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      message: "Internal server error",
      success: false,
      error,
    });
  }
};
