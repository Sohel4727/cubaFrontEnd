import React from "react";
import "./Navigation.css"
import {
  AppBar,
  Avatar,
  Box,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import KeyboardArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardArrowLeftOutlined";
const NavigationBar = () => {
  return (
    <div className="navigationBar">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static"

          sx={{
            backgroundColor: "white",
            color: "black",
            boxShadow: "0px 1px 10px rgba(238, 239, 244, 1);",
            padding: "20px 100px 20px 100px",
          }}
        >
          <Toolbar>
            <Box sx={{ display: "flex" }}>
              <IconButton>
                <KeyboardArrowLeftOutlinedIcon
                  sx={{ fontSize: "32px", color: "#712AA9" }}
                />
              </IconButton>
              <Typography
                sx={{ fontSize: "31px", fontWeight: "600", color: "#000" }}
              >
                Create User
              </Typography>
            </Box>
            <Box
              component="div"
              sx={{ flexGrow: 1, display: "flex", justifyContent: "right" }}
            ></Box>

            <Box display="flex" alignItems={"center"}>
              <Avatar
                sx={{
                  mr: 2,
                  color: "#712AA9",
                  backgroundColor: "#F7EDFF",
                  width: "51px",
                  height: "51px",
                }}
                sizes="50px"
                alt="Remy Sharp"
                src="/static/images/avatar/1.jpg"
              />
              <Typography
                variant="h5"
                sx={{ fontSize: "28px", fontWeight: "600", color: "#712AA9" }}
              >
                User name
              </Typography>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default NavigationBar;
