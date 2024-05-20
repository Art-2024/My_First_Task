import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline, Box } from "@mui/material";
import MenuListComposition from "./Sidebar";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import Profile from "./Profile";
import { Provider } from "react-redux";
// import store from "./redux/store";
import Login from "./Login";

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
      {showSidebar && <MenuListComposition />}
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </Box>
  );
}
export default App;
