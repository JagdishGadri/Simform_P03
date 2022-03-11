// Functional Component

import React from "react";

import styled from "./Header.module.css";

const Header = () => {
  const todayDate = new Date();

  const date =  todayDate.getDate();
  const month = todayDate.toLocaleString("default", { month: "short" });
  const year = todayDate.getFullYear();
  const day = todayDate.toLocaleDateString("en-US", { weekday: "long" });

  return (
    <div className={styled.header}>
      <div className={styled.date}>
        <h1>{date}</h1>
        <div>
          <h6>{month}</h6>
          <h6>{year}</h6>
        </div>
      </div>
      <div>
        <h6>{day}</h6>
      </div>
      {/* {console.log("Header Component mounted")} */}
    </div>
    
  );
};

export default Header;
