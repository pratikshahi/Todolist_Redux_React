import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const taskObj = useSelector((store) => store);
  const taskitems = taskObj.taskItems.map((task) => {
    return <TodoItem props={task} />;
  });
  return <div>{taskitems}</div>;
}
