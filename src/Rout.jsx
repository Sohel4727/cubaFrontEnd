import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./sidebar";
import List from "./comp/List"
import Users from "./comp/Users"
import Box from "./comp/Box"
import Logout from "./comp/Logout"
import Doller from "./comp/Doller";
import NavigationBar from "./NavigationBar";

const Rout = () => {
  return (
    <>
      <BrowserRouter>
      <NavigationBar/>
        <Sidebar>
          <Routes>
            <Route path="/list" element={<List/>} />
            <Route path="/users" element={<Users/>} />
            <Route path="/logout" element={<Logout/>} />
            <Route path="/box" element={<Box/>} />
            <Route path="/doller" element={<Doller/>} />
            
          </Routes>
        </Sidebar>
      </BrowserRouter>
    </>
  );
};

export default Rout;
