import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline, Box } from "@mui/material";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Sidebar from "./components/layouts/Sidebar";

const theme = createTheme();

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppLayout />
      </ThemeProvider>
    </Router>
  );
}

function AppLayout() {
  const location = useLocation();

  const showSidebarRoutes = ["/dashboard", "/profile"];

  const showSidebar = showSidebarRoutes.includes(location.pathname);

  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      {showSidebar && <Sidebar />}
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </Box>
  );
}
export default App;
