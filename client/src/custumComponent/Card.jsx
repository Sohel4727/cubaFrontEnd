import React, { useEffect, useState } from "react";
import "./Card.css";
import Button from "./Button";

const Card = (props) => {
  const { dynamicStyle, setDrawerOpen, isEdit, setIsEdit } = props;

  const handleUpdateScreen = () => {
    setDrawerOpen(true);
    setIsEdit(true);
  };

  return (
    <>
      {dynamicStyle.map((item, index) => {
        console.log(item)
        return (
          <div className="card_container">
            <div className="product_image_container">
              <img
                src={process.env.PUBLIC_URL + "assets/cuba_product_image.png "}
                alt="product_image"
              />
            </div>
            <h2 className="product_heading">{item.heading}</h2>
            <p className="product_description">
              Get free products from your favourite brands in exchange for your
              honest reviews
            </p>
            <Button className="product_next_Button">Next</Button>
            <div className="product_update_screen_Button_container">
              <Button
                className="product_update_screen_Button"
                onClick={handleUpdateScreen}
              >
                update screen
              </Button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Card;
