import React, { ReactNode, useState } from "react";
import {
  Box,
  Drawer,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
  CssBaseline,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Brightness4,
  Brightness7,
} from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";
import { createTheme, ThemeProvider, useMediaQuery } from "@mui/material";


interface LayoutProps {
  children: ReactNode;
  title: string;
}

const Layout: React.FC<LayoutProps> = ({ children, title }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleThemeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  const theme = createTheme({
    palette: {
      mode: isDarkMode ? "dark" : "light",
      primary: {
        main: "#1976d2",
      },
      secondary: {
        main: "#ff4081",
      },
    },
  });

  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); 
  const isTabletOrLarger = useMediaQuery(theme.breakpoints.up("sm"));
 const location = useLocation(); 

 const getActiveStyle = (path: string) => {
   const isActive = location.pathname === path;
   return {
     backgroundColor: isActive ? "white" : "lightgray",
     color: "black",
     textAlign: "center",
     border: isActive ? "2px solid green" : "1px solid gray",
     borderRadius:10,
  marginBottom:2,
   };
 };
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        {isTabletOrLarger && (
          <Box
            sx={{
              width: { sm: "25%", md: "20%" },
              bgcolor: theme.palette.primary.main,
              height: "100vh",
              color: theme.palette.common.white,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              position: "fixed",
              top: 0,
              left: 0,
              zIndex: theme.zIndex.drawer + 1,
              paddingTop: theme.spacing(4),
            }}
          >
            <Box display="flex" justifyContent="center" p={2}>
              <Box
                component={"img"}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv3SOPSEOJaQ1mUxcAAv200Cb32TuNyYTP7A&s"
                alt="Logo"
                sx={{ width: "100%", height: 200, borderRadius: 10 }}
              />
            </Box>
            <Divider />
            <List>
              <ListItem component={Link} to="/" sx={getActiveStyle("/")}>
                <ListItemText primary="Dashboard" />
              </ListItem>
              <ListItem
                component={Link}
                to="/reports"
                sx={getActiveStyle("/reports")}
              >
                <ListItemText primary="Reports" />
              </ListItem>
            </List>
          </Box>
        )}

        <Drawer
          sx={{
            width: 240,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: 240,
              boxSizing: "border-box",
            },
          }}
          variant={isMobile ? "temporary" : "persistent"}
          anchor="left"
          open={drawerOpen}
          onClose={handleDrawerToggle}
        >
          <Box
            sx={{
              width: 240,
              backgroundColor: theme.palette.primary.main,
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              color: theme.palette.common.white,
              paddingTop: theme.spacing(4),
            }}
          >
            <Box display="flex" justifyContent="center" p={2}>
              <Box
                component={"img"}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv3SOPSEOJaQ1mUxcAAv200Cb32TuNyYTP7A&s"
                alt="Logo"
                sx={{ width: "100%", height: 200, borderRadius: 10 }}
              />
            </Box>
            <Divider />
            <List>
              <ListItem component={Link} to="/" sx={getActiveStyle("/")}>
                <ListItemText primary="Dashboard" />
              </ListItem>
              <ListItem
                component={Link}
                to="/reports"
                sx={getActiveStyle("/reports")}
              >
                <ListItemText primary="Reports" />
              </ListItem>
            </List>
          </Box>
        </Drawer>

        <Box
          component="main"
          sx={{
            bgcolor: "background.default",
            p: 3,
            width: { xs: "100%", sm: "80%" },
          }}
        >
          <AppBar position="sticky">
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{
                  mr: 2,
                  display: { sm: "none" },
                }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" noWrap>
                {title}
              </Typography>

              <IconButton
                color="inherit"
                onClick={handleThemeToggle}
                sx={{ ml: "auto" }}
              >
                {isDarkMode ? <Brightness7 /> : <Brightness4 />}
              </IconButton>
            </Toolbar>
          </AppBar>

          {children}
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Layout;
