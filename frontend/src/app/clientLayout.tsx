"use client";
import { ThemeProvider } from "@mui/material/styles";
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Box, 
  Drawer, 
  IconButton, 
  List, 
  ListItem, 
  ListItemText, 
  ListItemIcon,
  ListItemButton,
  Stack,
  Button,
  useTheme,
  useMediaQuery
} from "@mui/material";
import { 
  Menu as MenuIcon, 
  Close as CloseIcon,
  Home, 
  Info, 
  Analytics, 
  Share, 
  Login, 
  PersonAdd,
  Bolt
} from "@mui/icons-material";
import Link from "next/link";
import { useState } from "react";
import theme from "./theme";

// Navigation items
const navigationItems = [
  { text: "Home", href: "/", icon: <Home /> },
  { text: "About", href: "/about", icon: <Info /> },
  { text: "Analytics", href: "/analytics", icon: <Analytics /> },
  { text: "Social Media Management", href: "/management", icon: <Share /> },
];

// Auth items
const authItems = [
  { text: "Sign In", href: "/auth/login", icon: <Login /> },
  { text: "Get Started", href: "/auth/signup", icon: <PersonAdd /> },
];

function ResponsiveDrawer({ drawerOpen, setDrawerOpen }: { 
  drawerOpen: boolean; 
  setDrawerOpen: (open: boolean) => void; 
}) {
  const theme = useTheme();
  // Only show drawer on phone screens (xs and sm)
  const isPhone = useMediaQuery(theme.breakpoints.down('md'));

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const drawerContent = (
    <Box sx={{ width: 280 }} role="presentation">
      <Box sx={{ p: 2, borderBottom: 1, borderColor: 'divider', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
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
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            SocialXFlow
          </Typography>
        </Box>
        <IconButton onClick={handleDrawerClose} size="small">
          <CloseIcon />
        </IconButton>
      </Box>
      
      <List sx={{ pt: 1 }}>
        {navigationItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton 
              component={Link} 
              href={item.href}
              onClick={handleDrawerClose}
              sx={{ 
                '&:hover': { 
                  backgroundColor: 'primary.50',
                  '& .MuiListItemIcon-root': { color: 'primary.main' }
                }
              }}
            >
              <ListItemIcon sx={{ minWidth: 40 }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      
      <Box sx={{ borderTop: 1, borderColor: 'divider', mt: 2, pt: 2 }}>
        <List>
          {authItems.map((item) => (
            <ListItem key={item.text} disablePadding>
              <ListItemButton 
                component={Link} 
                href={item.href}
                onClick={handleDrawerClose}
                sx={{ 
                  '&:hover': { 
                    backgroundColor: 'primary.50',
                    '& .MuiListItemIcon-root': { color: 'primary.main' }
                  }
                }}
              >
                <ListItemIcon sx={{ minWidth: 40 }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );

  return (
    <>
      {/* Phone Drawer - Only show on phone screens (xs and sm) */}
      <Drawer
        variant="temporary"
        anchor="left"
        open={drawerOpen && isPhone}
        onClose={() => setDrawerOpen(false)}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box', 
            width: 280,
            backgroundColor: 'background.paper'
          },
        }}
      >
        {drawerContent}
      </Drawer>
    </>
  );
}

function Header({ drawerOpen, setDrawerOpen }: { 
  drawerOpen: boolean; 
  setDrawerOpen: (open: boolean) => void; 
}) {
  const theme = useTheme();
  // Only show hamburger on phone screens (xs and sm)
  const isPhone = useMediaQuery(theme.breakpoints.down('md'));

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <AppBar position="static" sx={{ bgcolor: "white", boxShadow: 1 }}>
      <Toolbar>
        {/* Hamburger menu - Only show on phone screens (xs and sm) */}
        {isPhone && (
          <IconButton
            color="inherit"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, color: "black" }}
            aria-label="open drawer"

          >
            <MenuIcon />
          </IconButton>
        )}
        
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, flexGrow: 1 }}>
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
          <Typography variant="h6" sx={{ fontWeight: "bold", color: "text.primary" }}>
            SocialXFlow
          </Typography>
        </Box>

        {/* Desktop Navigation - Show on tablet and larger screens (md and up) */}
        <Stack direction="row" spacing={3} sx={{ display: { xs: "none", md: "flex" } }}>
          {navigationItems.map((item) => (
            <Link key={item.text} href={item.href} style={{ textDecoration: "none" }}>
              <Typography 
                variant="body2" 
                sx={{ 
                  color: "text.primary", 
                  "&:hover": { color: "primary.main" },
                  cursor: 'pointer'
                }}
              >
                {item.text}
              </Typography>
            </Link>
          ))}
        </Stack>

        {/* Desktop Auth Buttons - Show on tablet and larger screens (md and up) */}
        <Stack direction="row" spacing={2} sx={{ display: { xs: "none", md: "flex" } }}>
          <Link href="/auth/login" style={{ textDecoration: "none" }}>
            <Button variant="text" color="inherit">
              Sign In
            </Button>
          </Link>
          <Link href="/auth/signup" style={{ textDecoration: "none" }}>
            <Button variant="contained">Get Started</Button>
          </Link>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />
        <ResponsiveDrawer drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />
        <Box component="main" sx={{ flexGrow: 1 }}>
          {children}
        </Box>
      </Box>
    </ThemeProvider>
  );
}