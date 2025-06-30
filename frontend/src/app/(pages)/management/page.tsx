"use client";

import { 
  Box, 
  Container, 
  Typography, 
  Card, 
  CardContent, 
  Button, 
  Stack, 
  Chip,
  Avatar,
  IconButton,
  Tabs,
  Tab,
  Paper
} from "@mui/material";
import { 
  Add as AddIcon,
  CalendarMonth,
  BarChart,
  TrendingUp,
  People,
  Schedule,
  Facebook,
  Instagram,
  Twitter,
  LinkedIn,
  YouTube,
  MoreVert,
  Edit,
  Delete,
  Visibility
} from "@mui/icons-material";
import { useState } from "react";

// Mock data for the dashboard
const platforms = [
  { name: "Facebook", icon: <Facebook />, color: "#1877F2", posts: 12, engagement: 89 },
  { name: "Instagram", icon: <Instagram />, color: "#E4405F", posts: 8, engagement: 156 },
  { name: "Twitter", icon: <Twitter />, color: "#1DA1F2", posts: 15, engagement: 234 },
  { name: "LinkedIn", icon: <LinkedIn />, color: "#0A66C2", posts: 6, engagement: 67 },
  { name: "YouTube", icon: <YouTube />, color: "#FF0000", posts: 3, engagement: 445 }
];

const scheduledPosts = [
  {
    id: 1,
    platform: "Instagram",
    content: "New product launch announcement with exciting features! 🚀",
    scheduledFor: "2024-01-15 10:00 AM",
    status: "scheduled",
    engagement: 0
  },
  {
    id: 2,
    platform: "Facebook",
    content: "Behind the scenes: Our team working on the latest updates",
    scheduledFor: "2024-01-16 02:00 PM",
    status: "draft",
    engagement: 0
  },
  {
    id: 3,
    platform: "Twitter",
    content: "Quick tip: How to maximize your social media ROI 📈",
    scheduledFor: "2024-01-17 09:30 AM",
    status: "scheduled",
    engagement: 0
  }
];

const analytics = {
  totalPosts: 44,
  totalEngagement: 991,
  followersGrowth: 12.5,
  reachThisMonth: 45600
};

export default function SocialMediaManagement() {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      {/* Header */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" component="h1" fontWeight="bold" gutterBottom>
          Social Media Management
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Manage your social media presence across all platforms from one dashboard
        </Typography>
      </Box>

      {/* Analytics Overview */}
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, mb: 4 }}>
        <Card sx={{ flex: '1 1 250px', minWidth: 250 }}>
          <CardContent>
            <Stack direction="row" alignItems="center" justifyContent="space-between">
              <Box>
                <Typography color="text.secondary" gutterBottom>
                  Total Posts
                </Typography>
                <Typography variant="h4" fontWeight="bold">
                  {analytics.totalPosts}
                </Typography>
              </Box>
              <CalendarMonth sx={{ fontSize: 40, color: "primary.main" }} />
            </Stack>
          </CardContent>
        </Card>
        <Card sx={{ flex: '1 1 250px', minWidth: 250 }}>
          <CardContent>
            <Stack direction="row" alignItems="center" justifyContent="space-between">
              <Box>
                <Typography color="text.secondary" gutterBottom>
                  Total Engagement
                </Typography>
                <Typography variant="h4" fontWeight="bold">
                  {analytics.totalEngagement}K
                </Typography>
              </Box>
              <TrendingUp sx={{ fontSize: 40, color: "success.main" }} />
            </Stack>
          </CardContent>
        </Card>
        <Card sx={{ flex: '1 1 250px', minWidth: 250 }}>
          <CardContent>
            <Stack direction="row" alignItems="center" justifyContent="space-between">
              <Box>
                <Typography color="text.secondary" gutterBottom>
                  Followers Growth
                </Typography>
                <Typography variant="h4" fontWeight="bold">
                  +{analytics.followersGrowth}%
                </Typography>
              </Box>
              <People sx={{ fontSize: 40, color: "warning.main" }} />
            </Stack>
          </CardContent>
        </Card>
        <Card sx={{ flex: '1 1 250px', minWidth: 250 }}>
          <CardContent>
            <Stack direction="row" alignItems="center" justifyContent="space-between">
              <Box>
                <Typography color="text.secondary" gutterBottom>
                  Monthly Reach
                </Typography>
                <Typography variant="h4" fontWeight="bold">
                  {analytics.reachThisMonth}K
                </Typography>
              </Box>
              <BarChart sx={{ fontSize: 40, color: "info.main" }} />
            </Stack>
          </CardContent>
        </Card>
      </Box>

      {/* Main Content Tabs */}
      <Paper sx={{ width: '100%' }}>
        <Tabs value={tabValue} onChange={handleTabChange} sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tab label="Content Calendar" />
          <Tab label="Platform Analytics" />
          <Tab label="Scheduled Posts" />
        </Tabs>

        {/* Content Calendar Tab */}
        {tabValue === 0 && (
          <Box sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
              <Typography variant="h6" fontWeight="bold">
                Content Calendar
              </Typography>
              <Button variant="contained" startIcon={<AddIcon />}>
                Create Post
              </Button>
            </Box>
            
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
              {scheduledPosts.map((post) => (
                <Card key={post.id} sx={{ flex: '1 1 300px', minWidth: 300, maxWidth: 400 }}>
                  <CardContent>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                      <Chip 
                        label={post.platform} 
                        size="small" 
                        sx={{ 
                          bgcolor: platforms.find(p => p.name === post.platform)?.color,
                          color: 'white'
                        }}
                      />
                      <IconButton size="small">
                        <MoreVert />
                      </IconButton>
                    </Box>
                    <Typography variant="body2" sx={{ mb: 2 }}>
                      {post.content}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      Scheduled for: {post.scheduledFor}
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 1, mt: 2 }}>
                      <Chip 
                        label={post.status} 
                        size="small" 
                        color={post.status === 'scheduled' ? 'primary' : 'default'}
                      />
                    </Box>
                  </CardContent>
                </Card>
              ))}
            </Box>
          </Box>
        )}

        {/* Platform Analytics Tab */}
        {tabValue === 1 && (
          <Box sx={{ p: 3 }}>
            <Typography variant="h6" fontWeight="bold" sx={{ mb: 3 }}>
              Platform Performance
            </Typography>
            
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
              {platforms.map((platform) => (
                <Card key={platform.name} sx={{ flex: '1 1 250px', minWidth: 250 }}>
                  <CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <Avatar sx={{ bgcolor: platform.color, mr: 2 }}>
                        {platform.icon}
                      </Avatar>
                      <Typography variant="h6" fontWeight="bold">
                        {platform.name}
                      </Typography>
                    </Box>
                    <Stack spacing={1}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography variant="body2" color="text.secondary">
                          Posts this month:
                        </Typography>
                        <Typography variant="body2" fontWeight="bold">
                          {platform.posts}
                        </Typography>
                      </Box>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography variant="body2" color="text.secondary">
                          Engagement:
                        </Typography>
                        <Typography variant="body2" fontWeight="bold">
                          {platform.engagement}K
                        </Typography>
                      </Box>
                    </Stack>
                  </CardContent>
                </Card>
              ))}
            </Box>
          </Box>
        )}

        {/* Scheduled Posts Tab */}
        {tabValue === 2 && (
          <Box sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
              <Typography variant="h6" fontWeight="bold">
                Scheduled Posts
              </Typography>
              <Button variant="outlined" startIcon={<Schedule />}>
                View All
              </Button>
            </Box>
            
            <Stack spacing={2}>
              {scheduledPosts.map((post) => (
                <Paper key={post.id} sx={{ p: 2 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <Box sx={{ flex: 1 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        <Chip 
                          label={post.platform} 
                          size="small" 
                          sx={{ 
                            bgcolor: platforms.find(p => p.name === post.platform)?.color,
                            color: 'white',
                            mr: 1
                          }}
                        />
                        <Typography variant="caption" color="text.secondary">
                          {post.scheduledFor}
                        </Typography>
                      </Box>
                      <Typography variant="body2" sx={{ mb: 1 }}>
                        {post.content}
                      </Typography>
                      <Chip 
                        label={post.status} 
                        size="small" 
                        color={post.status === 'scheduled' ? 'primary' : 'default'}
                      />
                    </Box>
                    <Stack direction="row" spacing={1}>
                      <IconButton size="small">
                        <Edit />
                      </IconButton>
                      <IconButton size="small">
                        <Visibility />
                      </IconButton>
                      <IconButton size="small">
                        <Delete />
                      </IconButton>
                    </Stack>
                  </Box>
                </Paper>
              ))}
            </Stack>
          </Box>
        )}
      </Paper>
    </Container>
  );
} 