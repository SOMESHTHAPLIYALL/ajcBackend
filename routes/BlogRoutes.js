const express = require("express");
const {
  createBlog,
  getBlogs,
  deleteBlog,
  updateBlog,
} = require("../controllers/BlogController");

const router = express.Router();

router.get("/get", getBlogs);

router.post("/create", createBlog);

router.post("/delete", deleteBlog);

router.post("/update", updateBlog);

module.exports = router;
