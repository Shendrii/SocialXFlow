"use client"

import Link from "next/link"
import { Box, Container, Typography, Button, Card, CardContent, Stack } from "@mui/material"
import { ArrowForward, CalendarMonth, BarChart, People, Bolt, Security, Language } from "@mui/icons-material"
import Image from "next/image"
import { SocialIcon } from 'react-social-icons';

export default function Home() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      {/* Hero Section */}
      <Box
        sx={{
          background: "linear-gradient(135deg, #E3F2FD 0%, #FFFFFF 50%, #F3E5F5 100%)",
          py: { xs: 8, md: 12 },
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", lg: "row" },
              gap: 6,
              alignItems: "center",
            }}
          >
            <Box sx={{ flex: 1, minWidth: 0, maxWidth: { lg: "50%" } }}>
              <Stack spacing={4}>
                <Box>
                  <Typography
                    variant="h2"
                    component="h1"
                    sx={{
                      fontWeight: "bold",
                      fontSize: { xs: "2.5rem", md: "3.5rem" },
                      lineHeight: 1.2,
                      mb: 2,
                    }}
                  >
                    Automate Your Social Media{" "}
                    <Typography component="span" variant="inherit" sx={{ color: "primary.main" }}>
                      Marketing
                    </Typography>
                  </Typography>
                  <Typography
                    variant="h5"
                    sx={{
                      color: "text.secondary",
                      fontWeight: 400,
                      maxWidth: 600,
                    }}
                  >
                    Schedule, publish, and analyze your social media content across all platforms with AI-powered
                    automation. Save time and boost engagement. It's completely free!
                  </Typography>
                </Box>

                <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                  <Link href="/auth/signup" style={{ textDecoration: "none" }}>
                    <Button variant="contained" size="large" endIcon={<ArrowForward />} sx={{ px: 4, py: 1.5 }}>
                      Get Started
                    </Button>
                  </Link>
                  <Link href="/demo" style={{ textDecoration: "none" }}>
                    <Button variant="outlined" size="large" sx={{ px: 4, py: 1.5 }}>
                      Watch Demo
                    </Button>
                  </Link>
                </Stack>
              </Stack>
            </Box>

            <Box sx={{ flex: 1, minWidth: 0, maxWidth: { lg: "50%" }, display: "flex", justifyContent: "center" }}>
              <Card
                sx={{
                  maxWidth: 400,
                  width: "100%",
                  boxShadow: 4,
                  borderRadius: 3,
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 3 }}>
                    <Typography variant="h6" fontWeight="bold">
                      Calendar
                    </Typography>
                    <CalendarMonth color="primary" />
                  </Box>
                  <Box
                    sx={{
                      display: "grid",
                      gridTemplateColumns: "repeat(7, 1fr)",
                      gap: 1,
                      mb: 2
                    }}
                  >
                    {["S", "M", "T", "W", "T", "F", "S"].map((day, index) => (
                      <Typography
                        key={`day-${index}`}
                        variant="caption"
                        sx={{
                          textAlign: "center",
                          fontWeight: "medium",
                          color: "text.secondary",
                        }}
                      >
                        {day}
                      </Typography>
                    ))}
                  </Box>
                  <Box
                    sx={{
                      display: "grid",
                      gridTemplateColumns: "repeat(7, 1fr)",
                      gap: 1,
                    }}
                  >
                    
                    {Array.from({ length: 42 }, (_, i) => {
                      const isWeekend = i % 7 === 0 || i % 7 === 6;
                      const hasContent = (i % 3 === 0 && !isWeekend);

                      return (
                        
                        <Box
                          key={`cell-${i}`}
                          sx={{
                            aspectRatio: "1",
                            borderRadius: 0.5,
                            bgcolor: isWeekend 
                              ? "grey.50"
                              : hasContent
                                ? "primary.50"
                                : "background.paper",
                            border: isWeekend 
                              ? "none" 
                              : hasContent 
                                ? "1px solid" 
                                : "1px solid",
                            borderColor: hasContent 
                              ? "primary.200" 
                              : "grey.200",
                          }}
                        />
                      );
                    })}
                  </Box>
                  
                </CardContent>
              </Card>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Features Section */}
      <Box sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", mb: 8 }}>
            <Typography variant="h3" component="h2" fontWeight="bold" gutterBottom>
              Everything you need to manage social media
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: "text.secondary",
                maxWidth: 800,
                mx: "auto",
              }}
            >
              From content creation to analytics, SocialXFlow provides all the tools you need to succeed on social
              media.
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 4,
              justifyContent: "center",
            }}
          >
            {[
              {
                icon: <CalendarMonth sx={{ fontSize: 32, color: "primary.main" }} />,
                title: "Smart Scheduling",
                description: "Schedule posts across all platforms with AI-optimized timing for maximum engagement.",
                color: "primary.50",
              },
              {
                icon: <Bolt sx={{ fontSize: 32, color: "secondary.main" }} />,
                title: "AI Content Creation",
                description: "Generate engaging captions and content ideas with our AI-powered writing assistant.",
                color: "secondary.50",
              },
              {
                icon: <BarChart sx={{ fontSize: 32, color: "success.main" }} />,
                title: "Advanced Analytics",
                description: "Track performance, engagement, and ROI with comprehensive analytics and reporting.",
                color: "success.50",
              },
              {
                icon: <People sx={{ fontSize: 32, color: "warning.main" }} />,
                title: "Team Collaboration",
                description: "Work together with role-based permissions, approval workflows, and shared workspaces.",
                color: "warning.50",
              },
              {
                icon: <Language sx={{ fontSize: 32, color: "error.main" }} />,
                title: "Multi-Platform",
                description: "Connect and manage Facebook, Instagram, Twitter, LinkedIn, TikTok, and more.",
                color: "error.50",
              },
              {
                icon: <Security sx={{ fontSize: 32, color: "info.main" }} />,
                title: "Enterprise Security",
                description: "Bank-level security with OAuth authentication and encrypted data storage.",
                color: "info.50",
              },
            ].map((feature, index) => (
              <Box
                key={index}
                sx={{
                  flex: { xs: "1 0 100%", md: "1 0 calc(50% - 16px)", lg: "1 0 calc(33.333% - 16px)" },
                  minWidth: 0,
                  maxWidth: { xs: "100%", md: "calc(50% - 16px)", lg: "calc(33.333% - 16px)" },
                }}
              >
                <Card sx={{ height: "100%", p: 3, boxShadow: 1 }}>
                  <CardContent sx={{ p: 0 }}>
                    <Box
                      sx={{
                        width: 64,
                        height: 64,
                        bgcolor: feature.color,
                        borderRadius: 2,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mb: 2,
                      }}
                    >
                      {feature.icon}
                    </Box>
                    <Typography variant="h6" fontWeight="bold" gutterBottom>
                      {feature.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {feature.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Social Platforms Section */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: "grey.50" }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", mb: 8 }}>
            <Typography variant="h3" component="h2" fontWeight="bold" gutterBottom>
              Connect All Your Social Platforms
            </Typography>
            <Typography variant="h5" color="text.secondary">
              Manage your entire social media presence from one unified dashboard
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 10,  // Increased gap for better spacing
              justifyContent: "center",
              alignItems: "center", // Added to ensure vertical alignment
            }}
          >
            {[
              { 
                name: "Facebook", 
                color: "#1877F2",
                url: "https://facebook.com"
              },
              { 
                name: "Instagram", 
                color: "#E4405F",
                url: "https://instagram.com"
              },
              { 
                name: "X", 
                color: "#000000",
                url: "https://x.com"
              },
              { 
                name: "LinkedIn", 
                color: "#0A66C2",
                url: "https://linkedin.com"
              },
              { 
                name: "TikTok", 
                color: "#000000",
                url: "https://tiktok.com"
              },
              { 
                name: "YouTube", 
                color: "#FF0000",
                url: "https://youtube.com"
              },
            ].map((platform) => (
              <Box
                key={platform.name}
                sx={{
                  flex: { 
                    xs: "1 0 calc(50% - 16px)", 
                    sm: "1 0 calc(33.333% - 16px)", 
                    md: "0 0 auto"  // Changed to auto to prevent wrapping on large screens
                  },
                  textAlign: "center",
                }}
              >
                <Box
                  sx={{
                    width: 80,
                    height: 80,
                    bgcolor: platform.color,
                    borderRadius: 3,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mb: 1,
                    mx: "auto",
                  }}
                >
                  <SocialIcon 
                    url={platform.url}
                    style={{ width: 48, height: 48 }}
                    bgColor="transparent"
                    fgColor="white"
                  />
                </Box>
                <Typography variant="body2" fontWeight="medium">
                  {platform.name}
                </Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Footer */}
      <Box component="footer" sx={{ bgcolor: "grey.50", borderTop: 1, borderColor: "divider", py: 6 }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 4,
            }}
          >
            <Box sx={{ flex: { xs: "1 0 100%", md: "1 0 25%" }, minWidth: 0 }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
                <Box
                  sx={{
                    width: 32,
                    height: 32,
                    background: "linear-gradient(45deg, #2196F3 30%, #9C27B0 90%)",
                    borderRadius: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Bolt sx={{ color: "white", fontSize: 20 }} />
                </Box>
                <Typography variant="h6" fontWeight="bold">
                  SocialXFlow
                </Typography>
              </Box>
              <Typography variant="body2" color="text.secondary">
                The complete social media automation platform for modern businesses.
              </Typography>
            </Box>

            {[
              {
                title: "Product",
                links: ["Features", "Integrations", "API"],
              },
              {
                title: "Company",
                links: ["About", "Blog", "Careers", "Contact"],
              },
              {
                title: "Support",
                links: ["Help Center", "Documentation", "Status", "Security"],
              },
            ].map((section, index) => (
              <Box
                key={index}
                sx={{
                  flex: { xs: "1 0 100%", sm: "1 0 33.333%", md: "1 0 25%" },
                  minWidth: 0,
                }}
              >
                <Typography variant="subtitle2" fontWeight="bold" gutterBottom>
                  {section.title}
                </Typography>
                <Stack spacing={1}>
                  {section.links.map((link) => (
                    <Link
                      key={link}
                      href={`/${link.toLowerCase().replace(" ", "-")}`}
                      style={{ textDecoration: "none" }}
                    >
                      <Typography variant="body2" color="text.secondary" sx={{ "&:hover": { color: "text.primary" } }}>
                        {link}
                      </Typography>
                    </Link>
                  ))}
                </Stack>
              </Box>
            ))}
          </Box>

          <Box
            sx={{
              borderTop: 1,
              borderColor: "divider",
              mt: 4,
              pt: 4,
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant="caption" color="text.secondary">
              © 2025 SocialXFlow. All rights reserved.
            </Typography>
            <Stack direction="row" spacing={2} sx={{ mt: { xs: 2, md: 0 } }}>
              <Link href="/privacy" style={{ textDecoration: "none" }}>
                <Typography variant="caption" color="text.secondary" sx={{ "&:hover": { color: "text.primary" } }}>
                  Privacy Policy
                </Typography>
              </Link>
              <Link href="/terms" style={{ textDecoration: "none" }}>
                <Typography variant="caption" color="text.secondary" sx={{ "&:hover": { color: "text.primary" } }}>
                  Terms of Service
                </Typography>
              </Link>
            </Stack>
          </Box>
        </Container>
      </Box>
    </Box>
  )
}