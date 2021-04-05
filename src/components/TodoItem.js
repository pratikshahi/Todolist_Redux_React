import React, { useState } from "react";
import classes from "./TodoItem.module.css";
import { Fab } from "@material-ui/core";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import SaveIcon from "@material-ui/icons/Save";
import EditIcon from "@material-ui/icons/Edit";
import { useDispatch } from "react-redux";

export default function TodoItem({ props }) {
  const [show, setShow] = useState(false);
  const [updatedTask, setUpdatedTask] = useState("");
  const dispatch = useDispatch();
  function deleteTask(task) {
    dispatch({ type: "DELETE_TASK", payload: task });
  }
  function editTask() {
    show ? setShow(false) : setShow(true);
  }
  function finalEdit(task) {
    dispatch({
      type: "EDIT_TASK",
      payload: { oldTask: task, newTask: updatedTask },
    });
    setShow(false);
  }

  return (
    <div>
      <li>
        <span className={classes.text}>{props}</span>
        <span className={classes.button1}>
          <Fab size="small" onClick={() => deleteTask(props)}>
            <DeleteForeverIcon />
          </Fab>
        </span>
        <span className={classes.button2}>
          <Fab size="small" onClick={editTask}>
            <EditIcon />
          </Fab>
        </span>
        {show && (
          <div className={classes.editArea}>
            <input
              type="text"
              value={updatedTask}
              onChange={(event) => {
                setUpdatedTask(event.target.value);
              }}
            />
            <Fab
              size="small"
              onClick={() => {
                finalEdit(props);
              }}
            >
              <SaveIcon />
            </Fab>
          </div>
        )}
      </li>
    </div>
  );
}
