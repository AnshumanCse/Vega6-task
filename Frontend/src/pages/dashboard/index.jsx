import React, { useState, useEffect } from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  CircularProgress,
  Container,
  Divider,
} from "@mui/material";
import axiosInstance from "utils/axiosInstance";
import toast from "react-hot-toast";

const BlogPostUI = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expandedDescriptions, setExpandedDescriptions] = useState({});

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const { data } = await axiosInstance.get("/blogs");
      setBlogs(data.blogs);
      setLoading(false);
    } catch (error) {
      toast.error("Failed to load blogs");
      setLoading(false);
    }
  };

  const toggleDescription = (blogId) => {
    setExpandedDescriptions((prev) => ({
      ...prev,
      [blogId]: !prev[blogId],
    }));
  };

  const truncateDescription = (description, maxLength = 100) => {
    if (description.length <= maxLength) return description;
    return description.substring(0, maxLength) + "...";
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      {loading ? (
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="50vh">
          <CircularProgress size={40} color="primary" />
        </Box>
      ) : (
        <>
          {blogs.length === 0 ? (
            <Typography variant="h6" align="center" color="text.secondary">
              No blogs available
            </Typography>
          ) : (
            blogs.map((blog) => (
              <Card key={blog._id} sx={{ mb: 3, boxShadow: 3 }}>
                {blog.image && (
                  <CardMedia
                    component="img"
                    height="300"
                    image={blog.image}
                    alt={blog.title}
                    sx={{ objectFit: "cover" }}
                  />
                )}
                <CardContent>
                  <Typography variant="h5" component="div" gutterBottom>
                    {blog.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ whiteSpace: "pre-wrap" }}
                  >
                    {expandedDescriptions[blog._id]
                      ? blog.description
                      : truncateDescription(blog.description)}
                  </Typography>
                  {blog.description.length > 100 && (
                    <Button
                      size="small"
                      onClick={() => toggleDescription(blog._id)}
                      sx={{ mt: 1, textTransform: "none" }}
                    >
                      {expandedDescriptions[blog._id] ? "Show Less" : "Load More"}
                    </Button>
                  )}
                  <Divider sx={{ my: 2 }} />
                  <Typography variant="caption" color="text.secondary">
                    Likes: {blog.likes || 0} | Posted on:{" "}
                    {new Date(blog.createdAt).toLocaleDateString("en-US", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    })}
                  </Typography>
                </CardContent>
              </Card>
            ))
          )}
        </>
      )}
    </Container>
  );
};

export default BlogPostUI;