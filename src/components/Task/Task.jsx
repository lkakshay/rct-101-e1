import React from "react";
import styles from "./task.module.css";

import Counter from "../Counter/Counter";
const Task = ({data,handleDeleteTask,handleUpdateTask}) => {
  // NOTE: do not delete `data-cy` key value pair
  return (
    <li data-cy="task" className={styles.task}>
      <input   onChange={(e)=>console.log(e)} type="checkbox" data-cy="task-checkbox" />
      <div data-cy="task-text">{data.text}</div>
      <Counter  handleUpdateTask={handleUpdateTask} id={data.id}count={data.count}/>
      <button onClick={()=>handleDeleteTask(data.id)} data-cy="task-remove-button">X</button>
    </li>
  );
};

export default Task;
