"use client";

import { 
  Box, 
  Container, 
  Typography, 
  Card, 
  CardContent, 
  Stack, 
  Avatar
} from "@mui/material";
import { 
  CalendarMonth,
  BarChart,
  TrendingUp,
  People,
  Facebook,
  Instagram,
  Twitter,
  LinkedIn,
  YouTube
} from "@mui/icons-material";

const platforms = [
  { name: "Facebook", icon: <Facebook />, color: "#1877F2", posts: 12, engagement: 89 },
  { name: "Instagram", icon: <Instagram />, color: "#E4405F", posts: 8, engagement: 156 },
  { name: "Twitter", icon: <Twitter />, color: "#1DA1F2", posts: 15, engagement: 234 },
  { name: "LinkedIn", icon: <LinkedIn />, color: "#0A66C2", posts: 6, engagement: 67 },
  { name: "YouTube", icon: <YouTube />, color: "#FF0000", posts: 3, engagement: 445 }
];

const analytics = {
  totalPosts: 44,
  totalEngagement: 991,
  followersGrowth: 12.5,
  reachThisMonth: 45600
};

export default function AnalyticsPage() {
  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" component="h1" fontWeight="bold" gutterBottom>
          Analytics Overview
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Track your social media performance across all platforms
        </Typography>
      </Box>
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
      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" fontWeight="bold" gutterBottom>
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
    </Container>
  );
} 