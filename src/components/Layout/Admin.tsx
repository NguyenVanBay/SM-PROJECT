import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import { Sidebar } from "./pages/Sidebar";
import { Header } from "./pages/Header";
import { Route, Routes } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
export interface AdminLayoutProps {}

export function AdminLayout(props: AdminLayoutProps) {
  const mdTheme = createTheme();
  console.log("bay123");

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Header />
        <Sidebar />
        <Routes>
          <Route path="/admin/dashboard" element={<Dashboard />} />
        </Routes>
      </Box>
    </ThemeProvider>
  );
}
