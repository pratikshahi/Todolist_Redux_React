import React from "react";
import classes from "./TodoItem.module.css";
import { Fab } from "@material-ui/core";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import EditIcon from "@material-ui/icons/Edit";
import { useDispatch } from "react-redux";

export default function TodoItem({ props }) {
  const dispatch = useDispatch();
  function deleteTask(task) {
    dispatch({ type: "DELETE_TASK", payload: task });
  }

  return (
    <div>
      <li>
        {props}
        <span className={classes.button1}>
          <Fab size="small" onClick={() => deleteTask(props)}>
            <DeleteForeverIcon />
          </Fab>
        </span>
        <span className={classes.button2}>
          <Fab size="small">
            <EditIcon />
          </Fab>
        </span>
      </li>
    </div>
  );
}
