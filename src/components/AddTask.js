import React, { useState } from "react";
import { useDispatch } from "react-redux";
import classes from "./AddTask.module.css";
import AddIcon from "@material-ui/icons/Add";
import { Fab } from "@material-ui/core";

export default function AddTask() {
  const [taskName, setTaskName] = useState("");
  const dispatch = useDispatch();

  function AddTask() {
    dispatch({ type: "ADD_TASK", payload: taskName });
  }
  return (
    <div className={classes.form}>
      <input
        type="text"
        value={taskName}
        onChange={(event) => {
          setTaskName(event.target.value);
        }}
      />

      <Fab onClick={AddTask} size="small">
        <AddIcon />
      </Fab>
    </div>
  );
}
