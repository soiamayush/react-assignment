import React from "react";
import Card from "./Card";

const content = () => {
  return (
    <div className="dashboard">
      <p className="heading">Employee Productivity Dashboard</p>
      <div className="progresscard-container">
        <Card day="Monday" perc="4%" />
        <Card day="Tuesday" perc="92%" />
        <Card day="Wednesday" perc="122%" />
        <Card day="Thursday" perc="93%" />
        <Card day="Friday" perc="89%" />
        <Card day="Saturday" perc="98%" />
      </div>
    </div>
  );
};

export default content;
