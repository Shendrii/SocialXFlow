"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import {
  Box,
  Container,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Alert,
  Stack,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ThemeProvider,
} from "@mui/material"
import { Bolt, Person, Email, Business, Lock, CheckCircle } from "@mui/icons-material"
import { createTheme } from '@mui/material/styles'

const theme = createTheme()

export default function SignupPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    password: "",
    confirmPassword: "",
  })
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match")
      setIsLoading(false)
      return
    }

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      router.push("/dashboard")
    } catch (err) {
      setError("Failed to create account. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          minHeight: "100vh",
          background: "linear-gradient(135deg, #E3F2FD 0%, #FFFFFF 50%, #F3E5F5 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: 2,
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", mb: 4 }}>
            <Link href="/" style={{ textDecoration: "none" }}>
              <Box sx={{ display: "inline-flex", alignItems: "center", gap: 1, mb: 2 }}>
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    background: "linear-gradient(45deg, #2196F3 30%, #9C27B0 90%)",
                    borderRadius: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Bolt sx={{ color: "white", fontSize: 24 }} />
                </Box>
                <Typography variant="h4" fontWeight="bold" color="text.primary">
                  SocialXFlow
                </Typography>
              </Box>
            </Link>
            <Typography variant="body1" color="text.secondary">
              Join thousands of businesses automating their social media
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", lg: "row" },
              gap: 4,
              alignItems: "flex-start",
            }}
          >
            {/* Form Section */}
            <Box sx={{ flex: 1, minWidth: 0, maxWidth: { lg: "60%" } }}>
              <Card sx={{ boxShadow: 4 }}>
                <CardContent sx={{ p: 4 }}>
                  <Typography variant="h4" fontWeight="bold" gutterBottom>
                    Create Your Account
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                    Get started with SocialXFlow in less than 2 minutes
                  </Typography>

                  {error && (
                    <Alert severity="error" sx={{ mb: 3 }}>
                      {error}
                    </Alert>
                  )}

                  <Box component="form" onSubmit={handleSubmit}>
                    <Stack spacing={3}>
                      <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, gap: 2 }}>
                        <TextField
                          fullWidth
                          label="First Name"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                          slotProps={{
                            input: {
                              startAdornment: <Person sx={{ color: "text.secondary", mr: 1 }} />,
                            }
                          }}
                        />
                        <TextField
                          fullWidth
                          label="Last Name"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                          slotProps={{
                            input: {
                              startAdornment: <Person sx={{ color: "text.secondary", mr: 1 }} />,
                            }
                          }}
                        />
                      </Box>

                      <TextField
                        fullWidth
                        label="Work Email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        slotProps={{
                          input: {
                            startAdornment: <Email sx={{ color: "text.secondary", mr: 1 }} />,
                          }
                        }}
                      />

                      <TextField
                        fullWidth
                        label="Company Name"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        required
                        slotProps={{
                          input: {
                            startAdornment: <Business sx={{ color: "text.secondary", mr: 1 }} />,
                          }
                        }}
                      />

                      <TextField
                        fullWidth
                        label="Password"
                        name="password"
                        type="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        slotProps={{
                          input: {
                            startAdornment: <Lock sx={{ color: "text.secondary", mr: 1 }} />,
                          }
                        }}
                      />

                      <TextField
                        fullWidth
                        label="Confirm Password"
                        name="confirmPassword"
                        type="password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                        slotProps={{
                          input: {
                            startAdornment: <Lock sx={{ color: "text.secondary", mr: 1 }} />,
                          }
                        }}
                      />

                      <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        size="large"
                        disabled={isLoading}
                        sx={{ py: 1.5 }}
                      >
                        {isLoading ? "Creating account..." : "Create Account"}
                      </Button>
                    </Stack>
                  </Box>

                  <Divider sx={{ my: 3 }} />

                  <Typography variant="body2" textAlign="center" color="text.secondary">
                    Already have an account?{" "}
                    <Link href="/auth/login" style={{ textDecoration: "none" }}>
                      <Typography component="span" variant="body2" color="primary" fontWeight="medium">
                        Sign in
                      </Typography>
                    </Link>
                  </Typography>
                </CardContent>
              </Card>
            </Box>

            {/* Features Section */}
            <Box sx={{ flex: 1, minWidth: 0, maxWidth: { lg: "40%" } }}>
              <Stack spacing={3}>
                <Card sx={{ boxShadow: 2 }}>
                  <CardContent>
                    <Typography variant="h6" fontWeight="bold" gutterBottom>
                      What's included:
                    </Typography>
                    <List dense>
                      {[
                        "Unlimited social media accounts",
                        "Schedule unlimited posts",
                        "AI-powered content suggestions",
                        "Advanced analytics and reporting",
                        "Team collaboration tools",
                        "24/7 email support",
                      ].map((feature, index) => (
                        <ListItem key={index} sx={{ px: 0 }}>
                          <ListItemIcon sx={{ minWidth: 32 }}>
                            <CheckCircle sx={{ color: "success.main", fontSize: 20 }} />
                          </ListItemIcon>
                          <ListItemText primary={feature} primaryTypographyProps={{ variant: "body2" }} />
                        </ListItem>
                      ))}
                    </List>
                  </CardContent>
                </Card>

                <Card sx={{ bgcolor: "primary.50", boxShadow: 1 }}>
                  <CardContent>
                    <Typography variant="h6" fontWeight="bold" color="primary.main" gutterBottom>
                      100% Free Forever
                    </Typography>
                    <Typography variant="body2" color="primary.dark">
                      SocialXFlow is completely free to use. No hidden fees, no credit card required, and no limits on
                      your social media automation.
                    </Typography>
                  </CardContent>
                </Card>
              </Stack>
            </Box>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  )
}