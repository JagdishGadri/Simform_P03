// Functional Component

import React from "react";

import "./Header.css";

const Header = () => {
  const todayDate = new Date();
  console.log(todayDate);

  const date =  todayDate.getDate();
  const month = todayDate.toLocaleString("default", { month: "short" });
  const year = todayDate.getFullYear();
  const day = todayDate.toLocaleDateString("en-US", { weekday: "long" });

  return (
    <div className="header">
      <div className="date">
        <h1>{date}</h1>
        <div className="month_year">
          <h6>{month}</h6>
          <h6>{year}</h6>
        </div>
      </div>
      <div className="day">
        <h6>{day}</h6>
      </div>
    </div>
  );
};

export default Header;
