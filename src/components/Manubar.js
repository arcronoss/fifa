import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Home from "@mui/icons-material/Home";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import "./Manubar.css";

const Manubar = () => {
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    navigate("/login");
  };

  const handleRegisterClick = () => {
    navigate("/Register");
  };
  const handleMainpageClick = () => {
    navigate("/mainpage");
  };

  return (
    <div className="homepage">
      
      <AppBar position="fixed" color="warning">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="home"
            sx={{ mr: 2 }}
            onClick={handleMainpageClick}
          >
            <Home />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, cursor: 'pointer' }}
            onClick={handleMainpageClick}
          >
            Home
          </Typography>
          <Box sx={{ display: "flex" }}>
            <Button
              sx={{
                border: "1px solid white",
              }}
              color="inherit"
              onClick={handleRegisterClick}
            >
              Register
            </Button>
            <Button
              sx={{
                border: "1px solid white",
                marginLeft: "5px",
                backgroundColor: "white",
                color: "orange",
                "&:hover": {
                  backgroundColor: "orange",
                  color: "white",
                },
              }}
              onClick={handleSignUpClick}
            >
              Login
            </Button>
            <IconButton
              size="large"
              edge="end"
              color="inherit"
              aria-label="account of current user"
              aria-haspopup="true"
              sx={{
                "&:hover": {
                  backgroundColor: "transparent",
                  cursor: "default",
                },
              }}
            >
              <AccountCircle />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Manubar;