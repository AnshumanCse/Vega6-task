// import React, { useState, useEffect } from "react";
// import { styled } from "@mui/material/styles";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   Button,
//   Dialog,
//   DialogActions,
//   DialogContent,
//   DialogTitle,
//   TextField,
// } from "@mui/material";
// import { PlusOutlined, EditOutlined, DeleteOutlined, EyeOutlined } from "@ant-design/icons";
// import axiosInstance from "utils/axiosInstance";
// import toast from "react-hot-toast";

// const StyledTableCell = styled(TableCell)(({ theme }) => ({
//   [`&.${TableCell.head}`]: {
//     backgroundColor: "#005adf",
//     color: theme.palette.common.white,
//   },
//   [`&.${TableCell.body}`]: {
//     fontSize: 14,
//   },
// }));

// const StyledTableRow = styled(TableRow)(({ theme }) => ({
//   "&:nth-of-type(odd)": {
//     backgroundColor: theme.palette.action.hover,
//   },
//   "&:last-child td, &:last-child th": {
//     border: 0,
//   },
// }));

// const BlogTable = () => {
//   const [blogs, setBlogs] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [open, setOpen] = useState(false);
//   const [editMode, setEditMode] = useState(false);
//   const [selectedBlog, setSelectedBlog] = useState(null);
//   const [formData, setFormData] = useState({ title: "", description: "" });

//   useEffect(() => {
//     fetchBlogs();
//   }, []);

//   const fetchBlogs = async () => {
//     try {
//       const { data } = await axiosInstance.get("/blogs");
//       setBlogs(data.blogs);
//       setLoading(false);
    
//     } catch (error) {
//       toast.error("Failed to load blogs");
//       setLoading(false);
//     }
//   };

//   const handleOpenDialog = (mode, blog = null) => {
//     setEditMode(mode === "edit");
//     setSelectedBlog(blog);
//     setFormData(blog ? { title: blog.title, description: blog.description } : { title: "", description: "" });
//     setOpen(true);
//   };

//   const handleCloseDialog = () => {
//     setOpen(false);
//     setSelectedBlog(null);
//   };

//   const handleDeleteBlog = async (id) => {
//     try {
//       await axiosInstance.delete(`/blog/delete/${id}`);
//       toast.success("Blog deleted successfully");
//       fetchBlogs();
//     } catch (error) {
//       toast.error("Failed to delete blog");
//     }
//   };

//   const handleSaveBlog = async () => {
//     try {
//       if (editMode && selectedBlog) {
//         await axiosInstance.put(`/blog/update/${selectedBlog._id}`, formData);
//         toast.success("Blog updated successfully");
//       } else {
//         await axiosInstance.post("/blog/create", formData);
//         toast.success("Blog added successfully");
//       }
//       handleCloseDialog();
//       fetchBlogs();
//     } catch (error) {
//       toast.error("Failed to save blog");
//     }
//   };

//   return (
//     <div>
//       <h3 style={{ textAlign: "right" }} onClick={() => handleOpenDialog("add")}>
//         <Button variant="contained" style={{ backgroundColor: "#005adf" }}>
//           <PlusOutlined /> Add New Blog
//         </Button>
//       </h3>

//       <TableContainer component={Paper}>
//         <Table sx={{ minWidth: 700 }} aria-label="customized table">
//           <TableHead>
//             <TableRow>
//               <StyledTableCell>Sr. No.</StyledTableCell>
//               <StyledTableCell>Title</StyledTableCell>
//               <StyledTableCell>Description</StyledTableCell>
//               <StyledTableCell>Created At</StyledTableCell>
//               <StyledTableCell align="right">Action</StyledTableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {loading ? (
//               <StyledTableRow>
//                 <StyledTableCell colSpan={5} align="center">
//                   Loading Data...
//                 </StyledTableCell>
//               </StyledTableRow>
//             ) : (
//               blogs?.map((blog, index) => (
//                 <StyledTableRow key={blog._id}>
//                   <StyledTableCell>{index + 1}</StyledTableCell>
//                   <StyledTableCell>{blog.title}</StyledTableCell>
//                   <StyledTableCell>{blog.description}</StyledTableCell>
//                   <StyledTableCell>
//                     {new Date(blog.createdAt).toLocaleString("en-US", {
//                       day: "2-digit",
//                       month: "short",
//                       year: "numeric",
//                       hour: "2-digit",
//                       minute: "2-digit",
//                       hour12: true,
//                     })}
//                   </StyledTableCell>
//                   <StyledTableCell align="right">
//                     <EyeOutlined
//                       style={{ cursor: "pointer", fontSize: "20px", color: "green", marginRight: "8px" }}
//                       onClick={() => handleOpenDialog("view", blog)}
//                     />
//                     <EditOutlined
//                       style={{ cursor: "pointer", fontSize: "20px", color: "blue", marginRight: "8px" }}
//                       onClick={() => handleOpenDialog("edit", blog)}
//                     />
//                     <DeleteOutlined
//                       style={{ cursor: "pointer", fontSize: "20px", color: "red" }}
//                       onClick={() => handleDeleteBlog(blog._id)}
//                     />
//                   </StyledTableCell>
//                 </StyledTableRow>
//               ))
//             )}
//           </TableBody>
//         </Table>
//       </TableContainer>

//       <Dialog open={open} onClose={handleCloseDialog}>
//         <DialogTitle>{editMode ? "Edit Blog" : "Add Blog"}</DialogTitle>
//         <DialogContent>
//           <TextField
//             margin="dense"
//             label="Title"
//             fullWidth
//             value={formData.title}
//             onChange={(e) => setFormData({ ...formData, title: e.target.value })}
//           />
//           <TextField
//             margin="dense"
//             label="Description"
//             fullWidth
//             multiline
//             rows={4}
//             value={formData.description}
//             onChange={(e) => setFormData({ ...formData, description: e.target.value })}
//           />
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleCloseDialog} color="secondary">
//             Cancel
//           </Button>
//           <Button onClick={handleSaveBlog} color="primary">
//             {editMode ? "Update" : "Save"}
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </div>
//   );
// };

// export default BlogTable;

import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import {
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Typography,
  Grid,
  CircularProgress,
} from "@mui/material";
import { PlusOutlined, EditOutlined, DeleteOutlined, EyeOutlined } from "@ant-design/icons";
import axiosInstance from "utils/axiosInstance";
import toast from "react-hot-toast";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#005adf",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const BlogTable = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [open, setOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [viewMode, setViewMode] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [formData, setFormData] = useState({ title: "", description: "", image: null });

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

  const handleOpenDialog = (mode, blog = null) => {
    setEditMode(mode === "edit");
    setViewMode(mode === "view");
    setSelectedBlog(blog);
    setFormData(
      blog
        ? { title: blog.title, description: blog.description, image: null }
        : { title: "", description: "", image: null }
    );
    setOpen(true);
  };

  const handleCloseDialog = () => {
    setOpen(false);
    setSelectedBlog(null);
    setViewMode(false);
  };

  const handleDeleteBlog = async (id) => {
    try {
      await axiosInstance.delete(`/blog/delete/${id}`);
      toast.success("Blog deleted successfully");
      fetchBlogs();
    } catch (error) {
      toast.error("Failed to delete blog");
    }
  };

  const handleSaveBlog = async () => {
    setSubmitting(true);
    try {
      const formDataToSend = new FormData();
      formDataToSend.append("title", formData.title);
      formDataToSend.append("description", formData.description);
      if (formData.image) formDataToSend.append("image", formData.image);

      if (editMode && selectedBlog) {
        await axiosInstance.put(`/blog/update/${selectedBlog._id}`, formDataToSend);
        toast.success("Blog updated successfully");
      } else {
        await axiosInstance.post("/blog/create", formDataToSend);
        toast.success("Blog added successfully");
      }
      handleCloseDialog();
      fetchBlogs();
    } catch (error) {
      toast.error("Failed to save blog");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <h3 style={{ textAlign: "right" }} onClick={() => handleOpenDialog("add")}>
        <Button variant="contained" style={{ backgroundColor: "#005adf" }}>
          <PlusOutlined /> Add New Blog
        </Button>
      </h3>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Sr. No.</StyledTableCell>
              <StyledTableCell>Title</StyledTableCell>
              <StyledTableCell>Description</StyledTableCell>
              <StyledTableCell>Image</StyledTableCell>
              <StyledTableCell>Likes</StyledTableCell>
              <StyledTableCell align="right">Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {loading ? (
              <StyledTableRow>
                <StyledTableCell colSpan={6} align="center">
                  <div style={{ textAlign: "center", fontSize: "18px", color: "#005adf" }}>
                    Loading Data...
                  </div>
                </StyledTableCell>
              </StyledTableRow>
            ) : (
              blogs?.map((blog, index) => (
                <StyledTableRow key={blog._id}>
                  <StyledTableCell component="th" scope="row">
                    {index + 1}
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row">
                    {blog.title}
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row">
                    {blog.description || "-"}
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row">
                    {blog.image ? (
                      <img src={blog.image} alt={blog.title} style={{ maxWidth: "50px", maxHeight: "50px" }} />
                    ) : (
                      "-"
                    )}
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row">
                    {blog.likes || 0}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    <EyeOutlined
                      style={{ cursor: "pointer", fontSize: "20px", color: "green", marginRight: "8px" }}
                      onClick={() => handleOpenDialog("view", blog)}
                    />
                    <EditOutlined
                      style={{ cursor: "pointer", fontSize: "20px", color: "blue", marginRight: "8px" }}
                      onClick={() => handleOpenDialog("edit", blog)}
                    />
                    <DeleteOutlined
                      style={{ cursor: "pointer", fontSize: "20px", color: "red" }}
                      onClick={() => handleDeleteBlog(blog._id)}
                    />
                  </StyledTableCell>
                </StyledTableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog open={open} onClose={handleCloseDialog} maxWidth="md">
        <DialogTitle>
          {viewMode ? "Blog Details" : editMode ? "Edit Blog" : "Add Blog"}
        </DialogTitle>
        <DialogContent style={{ minWidth: "500px" }}>
          {viewMode ? (
            <div style={{ padding: "20px", fontFamily: "Arial, sans-serif", color: "#333" }}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <h2 style={{ textAlign: "center", color: "#005adf", marginBottom: "20px" }}>
                    Blog Information
                  </h2>
                </Grid>
                <Grid item xs={12}>
                  <Typography>
                    <strong>Title:</strong> {selectedBlog?.title}
                  </Typography>
                  <Typography>
                    <strong>Description:</strong> {selectedBlog?.description}
                  </Typography>
                  <Typography>
                    <strong>Likes:</strong> {selectedBlog?.likes || 0}
                  </Typography>
                  {selectedBlog?.image && (
                    <img
                      src={selectedBlog.image}
                      alt={selectedBlog.title}
                      style={{ maxWidth: "100%", marginTop: "10px" }}
                    />
                  )}
                </Grid>
              </Grid>
            </div>
          ) : (
            <>
              <label
                style={{
                  fontSize: "15px",
                  color: "#005adf",
                  fontWeight: "bolder",
                  marginTop: "10px",
                  display: "block",
                }}
              >
                Title
              </label>
              <TextField
                margin="dense"
                label="Title"
                fullWidth
                variant="outlined"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                required
                disabled={submitting}
              />

              <label
                style={{
                  fontSize: "15px",
                  color: "#005adf",
                  fontWeight: "bolder",
                  marginTop: "10px",
                  display: "block",
                }}
              >
                Description
              </label>
              <TextField
                margin="dense"
                label="Description"
                fullWidth
                variant="outlined"
                multiline
                rows={4}
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                required
                disabled={submitting}
              />

              <label
                style={{
                  fontSize: "15px",
                  color: "#005adf",
                  fontWeight: "bolder",
                  marginTop: "10px",
                  display: "block",
                }}
              >
                Image
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setFormData({ ...formData, image: e.target.files[0] })}
                style={{ marginTop: "10px" }}
                disabled={submitting}
              />
              {selectedBlog?.image && !formData.image && (
                <img
                  src={selectedBlog.image}
                  alt="Preview"
                  style={{ maxWidth: "200px", marginTop: "10px" }}
                />
              )}
            </>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="secondary" disabled={submitting}>
            Cancel
          </Button>
          {!viewMode && (
            <Button
              onClick={handleSaveBlog}
              color="primary"
              variant="contained"
              disabled={submitting}
            >
              {submitting ? <CircularProgress size={24} /> : editMode ? "Update" : "Save"}
            </Button>
          )}
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default BlogTable;