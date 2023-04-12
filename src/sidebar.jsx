import React, { Children } from "react";
import "./sidebar.css";
import ReorderIcon from "@mui/icons-material/Reorder";
import LoginIcon from "@mui/icons-material/Login";
import { NavLink } from "react-router-dom";
import { Typography } from "@mui/material";
const mapData = [
  {
    path: "/list",
    name: "list",
    icon: <ReorderIcon />,
  },
  {
    path: "/users",
    name: "users",
    icon: "../public/assets/Vector.svg",
  },
  {
    path: "/doller",
    name: "doller",
    icon: "../public/assets/Vector doller.svg",
  },
  {
    path: "/box",
    name: "box",
    icon: "../public/assets/box.svg",
  },

  {
    path: "/logout",
    name: "logout",
    icon: <LoginIcon />,
  },
];
const sidebar = ({children}) => {
  return (
    <div  className="sidebar_flex_container">
      <div className="side_main_container">
        {mapData.map((item, index) => (
          <>
            <div className="sidebar_icon_wrapper">
              <NavLink
                key={index}
                className="list_link"
                to={item.path}
                activeclassName="active"
              >
                <div className="sideBar_item">
                  <img src={process.env.PUBLIC_URL + "/" + item.icon} alt={item.name} className="icons"/>
                  <p>{item.name}</p>
                </div>
              </NavLink>
            </div>
          </>
        ))}

      </div>
        <div>
            {children}
        </div>
    </div>
  );
};

export default sidebar;
