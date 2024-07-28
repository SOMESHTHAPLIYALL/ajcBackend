const BlogModel = require("../models/BlogModel");

exports.createBlog = async (req, res) => {
  try {
    const { title, description, date, image } = req.body;

    const newblog = new BlogModel({ title, description, date, image });
    await newblog.save();
    return res.status(200).send({
      message: "Created a new blog",
      success: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      message: "Internal server error",
      success: false,
    });
  }
};

exports.getBlogs = async (req, res) => {
  try {
    const blogs = await BlogModel.find();
    return res.status(200).send({
      message: "All Blogs",
      success: true,
      blogs,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      message: "Internal server error",
      success: false,
    });
  }
};

exports.deleteBlog = async (req, res) => {
  try {
    const { id } = req.body;

    // Check if the ID is provided
    if (!id) {
      return res.status(400).send({
        message: "Blog ID is required",
        success: false,
      });
    }

    // Find and delete the blog by ID
    const blog = await BlogModel.findByIdAndDelete(id);

    // Check if the blog was found and deleted
    if (!blog) {
      return res.status(404).send({
        message: "Blog not found",
        success: false,
      });
    }

    return res.status(200).send({
      message: "Blog deleted successfully",
      success: true,
      blog,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      message: "Internal server error",
      success: false,
    });
  }
};

exports.updateBlog = async (req, res) => {
  try {
    const { id, title, description, image } = req.body;
    const blog = await BlogModel.findByIdAndUpdate(
      id,
      {
        title: title,
        description: description,
        image: image,
      },
      { new: true }
    );

    return res.status(200).send({
      message: "Blog Updated",
      success: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      message: "Internal server error",
      success: false,
    });
  }
};
