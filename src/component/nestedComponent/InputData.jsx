import { FormLabel } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Input from "../../custumComponent/Input";
import "./InputData.css";
const InputData = () => {
  return (
    <>
      <div className="main_container">
        <h4>Enter the Details of User</h4>
        <div className="userDetails">
          <div>
            <FormLabel>User Name</FormLabel>
            <Input className="Input" />
          </div>
          <div>
            <FormLabel>Owner Type</FormLabel>
            <Input className="Input" />
          </div>
          <div>
            <FormLabel>Phone</FormLabel>
            <Input className="Input" />
          </div>
          <div>
            <FormLabel>Email ID</FormLabel>
            <Input className="Input" />
          </div>
        </div>
        <h4>Banking Details</h4>
        <div className="userDetails">
          <div>
            <FormLabel>Banking Name</FormLabel>
            <Input className="Input" />
          </div>
          <div>
            <FormLabel>Branch Name</FormLabel>
            <Input className="Input" />
          </div>
          <div>
            <FormLabel>Account Number</FormLabel>
            <Input className="Input" />
          </div>
          <div>
            <FormLabel>IFSC Code</FormLabel>
            <Input className="Input" />
          </div>
        </div>
        <h4>Company Details</h4>
        <div className="userDetails">
          <div>
            <FormLabel>Chit fund Company Name</FormLabel>
            <Input className="Input" />
          </div>
          <div>
            <FormLabel>Address</FormLabel>
            <Input className="Input" />
          </div>
        </div>
      </div>
    </>
  );
};

export default InputData;
