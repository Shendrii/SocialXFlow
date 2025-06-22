"use client";

import { Box, Container, Typography, Card, CardContent, Divider } from "@mui/material";
import { AutoAwesome, Schedule, Analytics, Psychology } from '@mui/icons-material';
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from '@mui/material/styles';

const theme = createTheme();

export default function AboutPage() {
  const features = [
    {
      icon: <AutoAwesome sx={{ fontSize: 40, color: "primary.main" }} />,
      title: "AI-Powered Content Creation",
      description: "Generate engaging social media content using advanced AI algorithms tailored to your brand voice."
    },
    {
      icon: <Schedule sx={{ fontSize: 40, color: "secondary.main" }} />,
      title: "Smart Scheduling",
      description: "Optimize post timing across platforms using data-driven insights for maximum engagement."
    },
    {
      icon: <Analytics sx={{ fontSize: 40, color: "success.main" }} />,
      title: "Advanced Analytics",
      description: "Make informed decisions with comprehensive performance metrics and engagement tracking."
    },
    {
      icon: <Psychology sx={{ fontSize: 40, color: "warning.main" }} />,
      title: "Audience Intelligence",
      description: "Understand your audience better with AI-powered insights and engagement patterns."
    }
  ];

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ minHeight: "100vh" }}>
        {/* Hero Section */}
        <Box
          sx={{
            background: "linear-gradient(135deg, #E3F2FD 0%, #FFFFFF 50%, #F3E5F5 100%)",
            py: { xs: 8, md: 12 },
            textAlign: "center",
          }}
        >
          <Container maxWidth="lg">
            <Typography 
              variant="h2" 
              component="h1" 
              fontWeight="bold"
              sx={{ mb: 2 }}
            >
              Revolutionizing Social Media Management
            </Typography>
            <Typography 
              variant="h5" 
              color="text.secondary"
              sx={{ maxWidth: 800, mx: "auto" }}
            >
              Empowering businesses to excel in social media through intelligent automation
            </Typography>
          </Container>
        </Box>

        {/* Vision & Mission Section */}
        <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 6 }}>
            <Box sx={{ flex: 1 }}>
              <Typography variant="h3" fontWeight="bold" gutterBottom>
                Our Vision
              </Typography>
              <Typography variant="body1" color="text.secondary" paragraph>
                To transform how businesses connect with their audience by making professional social media management accessible to everyone through AI-powered automation.
              </Typography>
            </Box>
            <Box sx={{ flex: 1 }}>
              <Typography variant="h3" fontWeight="bold" gutterBottom>
                Our Mission
              </Typography>
              <Typography variant="body1" color="text.secondary" paragraph>
                We're dedicated to simplifying social media management while maximizing engagement through innovative AI technology. Our platform enables businesses to create compelling content, maintain consistent presence, and make data-driven decisions effortlessly.
              </Typography>
            </Box>
          </Box>
        </Container>

        <Divider />

        {/* Features Section */}
        <Box sx={{ bgcolor: "grey.50", py: { xs: 6, md: 10 } }}>
          <Container maxWidth="lg">
            <Typography 
              variant="h3" 
              fontWeight="bold" 
              textAlign="center"
              sx={{ mb: 6 }}
            >
              How We Help Businesses Succeed
            </Typography>
            <Box sx={{ 
              display: 'grid', 
              gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
              gap: 4 
            }}>
              {features.map((feature) => (
                <Card key={feature.title} sx={{ height: "100%" }}>
                  <CardContent sx={{ p: 4 }}>
                    <Box sx={{ mb: 2 }}>
                      {feature.icon}
                    </Box>
                    <Typography variant="h5" fontWeight="bold" gutterBottom>
                      {feature.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {feature.description}
                    </Typography>
                  </CardContent>
                </Card>
              ))}
            </Box>
          </Container>
        </Box>

        {/* Impact Section */}
        <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 }, textAlign: "center" }}>
          <Typography variant="h3" fontWeight="bold" gutterBottom>
            Our Impact
          </Typography>
          <Typography 
            variant="body1" 
            color="text.secondary"
            sx={{ maxWidth: 800, mx: "auto" }}
          >
            SocialXFlow is transforming how businesses approach social media management. Our AI-powered platform helps companies save time, increase engagement, and maintain a consistent brand presence across all social platforms. By automating routine tasks and providing intelligent insights, we enable teams to focus on creating meaningful connections with their audience.
          </Typography>
        </Container>
      </Box>
    </ThemeProvider>
  );
}