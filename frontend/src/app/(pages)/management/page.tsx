"use client";

import { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Stack,
  Paper,
  Chip,
  IconButton,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions
} from "@mui/material";
import {
  Add as AddIcon,
  Edit,
  Delete,
  Schedule
} from "@mui/icons-material";

const initialPosts = [
  {
    id: 1,
    platform: "Instagram",
    content: "New product launch announcement! 🚀",
    scheduledFor: "2024-01-15 10:00 AM",
    status: "scheduled"
  },
  {
    id: 2,
    platform: "Facebook",
    content: "Behind the scenes: Our team working on the latest updates",
    scheduledFor: "2024-01-16 02:00 PM",
    status: "draft"
  }
];

export default function SocialMediaManagement() {
  const [posts, setPosts] = useState(initialPosts);
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ id: null, platform: "", content: "", scheduledFor: "", status: "scheduled" });
  const [editMode, setEditMode] = useState(false);

  const handleOpen = () => {
    setForm({ id: null, platform: "", content: "", scheduledFor: "", status: "scheduled" });
    setEditMode(false);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    if (editMode) {
      setPosts(posts.map(p => p.id === form.id ? { ...form, id: form.id } : p));
    } else {
      setPosts([...posts, { ...form, id: Date.now() }]);
    }
    setOpen(false);
  };

  const handleEdit = (post) => {
    setForm(post);
    setEditMode(true);
    setOpen(true);
  };

  const handleDelete = (id) => {
    setPosts(posts.filter(p => p.id !== id));
  };

  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 4 }}>
        <Typography variant="h4" fontWeight="bold">
          Scheduled Posts
        </Typography>
        <Button variant="contained" startIcon={<AddIcon />} onClick={handleOpen}>
          Create Post
        </Button>
      </Box>
      <Stack spacing={2}>
        {posts.length === 0 && (
          <Paper sx={{ p: 3, textAlign: "center" }}>
            <Typography color="text.secondary">No scheduled posts yet.</Typography>
          </Paper>
        )}
        {posts.map(post => (
          <Paper key={post.id} sx={{ p: 2, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <Box>
              <Stack direction="row" spacing={1} alignItems="center" mb={1}>
                <Chip label={post.platform} size="small" color="primary" />
                <Typography variant="caption" color="text.secondary">
                  {post.scheduledFor}
                </Typography>
                <Chip label={post.status} size="small" color={post.status === "scheduled" ? "primary" : "default"} />
              </Stack>
              <Typography variant="body1">{post.content}</Typography>
            </Box>
            <Stack direction="row" spacing={1}>
              <IconButton onClick={() => handleEdit(post)}><Edit /></IconButton>
              <IconButton onClick={() => handleDelete(post.id)} color="error"><Delete /></IconButton>
            </Stack>
          </Paper>
        ))}
      </Stack>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle>{editMode ? "Edit Post" : "Create Post"}</DialogTitle>
        <DialogContent>
          <Stack spacing={2} mt={1}>
            <TextField label="Platform" name="platform" value={form.platform} onChange={handleChange} fullWidth />
            <TextField label="Content" name="content" value={form.content} onChange={handleChange} fullWidth multiline minRows={2} />
            <TextField label="Scheduled For" name="scheduledFor" value={form.scheduledFor} onChange={handleChange} fullWidth placeholder="YYYY-MM-DD HH:mm AM/PM" />
            <TextField label="Status" name="status" value={form.status} onChange={handleChange} fullWidth />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSave} variant="contained">Save</Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
} 