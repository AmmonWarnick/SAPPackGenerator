import CssBaseline from "@mui/material/CssBaseline";
import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { Link, Outlet } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { Global } from "../../utils/Global";
import Footer from "./Footer";
interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

export default function Layout({ window }: Props) {
  const drawerWidth = 240;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  // this is the mobile drawer

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <Box>
        <CssBaseline />
        <AppBar component="nav" sx={{ backgroundColor: Global.primaryColor }}>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>
                {Global.companyName}
              </Link>
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}></Box>
          </Toolbar>
        </AppBar>

        <Box sx={{ p: 0 }}>
          <Toolbar />
          <Outlet />
        </Box>
        <Footer />
      </Box>
    </>
  );
}
