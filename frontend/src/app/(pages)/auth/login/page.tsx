"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Box, Container, Card, CardContent, Typography, TextField, Button, Alert, Stack, Divider } from "@mui/material"
import { Bolt, Email, Lock } from "@mui/icons-material"

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    try {
      // Simulate authentication
      await new Promise((resolve) => setTimeout(resolve, 1000))
      router.push("/dashboard")
    } catch (err) {
      setError("Invalid email or password. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
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
      <Container maxWidth="sm">
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
            Welcome back to your social media command center
          </Typography>
        </Box>

        <Card sx={{ boxShadow: 4 }}>
          <CardContent sx={{ p: 4 }}>
            <Typography variant="h4" fontWeight="bold" textAlign="center" gutterBottom>
              Sign In
            </Typography>
            <Typography variant="body2" color="text.secondary" textAlign="center" sx={{ mb: 3 }}>
              Enter your credentials to access your dashboard
            </Typography>

            {error && (
              <Alert severity="error" sx={{ mb: 3 }}>
                {error}
              </Alert>
            )}

            <Box component="form" onSubmit={handleSubmit}>
              <Stack spacing={3}>
                <TextField
                  fullWidth
                  label="Email Address"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  slotProps={{
                    input: {
                      startAdornment: <Email sx={{ color: "text.secondary", mr: 1 }} />,
                    }
                  }}
                />

                <Box>
                  <TextField
                    fullWidth
                    label="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    slotProps={{
                      input: {
                        startAdornment: <Lock sx={{ color: "text.secondary", mr: 1 }} />,
                      }
                    }}
                  />
                  <Box sx={{ textAlign: "right", mt: 1 }}>
                    <Link href="/auth/forgot-password" style={{ textDecoration: "none" }}>
                      <Typography variant="body2" color="primary">
                        Forgot password?
                      </Typography>
                    </Link>
                  </Box>
                </Box>

                <Button type="submit" fullWidth variant="contained" size="large" disabled={isLoading} sx={{ py: 1.5 }}>
                  {isLoading ? "Signing in..." : "Sign In"}
                </Button>
              </Stack>
            </Box>

            <Divider sx={{ my: 3 }} />

            <Typography variant="body2" textAlign="center" color="text.secondary">
              Don't have an account?{" "}
              <Link href="/auth/signup" style={{ textDecoration: "none" }}>
                <Typography component="span" variant="body2" color="primary" fontWeight="medium">
                  Create account
                </Typography>
              </Link>
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </Box>
  )
}
