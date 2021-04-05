import React from "react";
import classes from "./Navbar.module.css";
import { useSelector } from "react-redux";

export default function Navbar() {
  const taskObj = useSelector((store) => store);
  return (
    <div className={classes.heading}>
      <h1>To-Do list: {taskObj.taskItems.length}</h1>
    </div>
  );
}
