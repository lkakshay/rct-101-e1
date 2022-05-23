import React from "react";
import styles from "./task.module.css";

import Counter from "../Counter/Counter";
const Task = ({data,handleDeleteTask,handleUpdateTask,index}) => {
  // NOTE: do not delete `data-cy` key value pair

  return (
    <li data-cy="task" className={styles.task}>
      <input checked={data.done} onClick={()=>handleUpdateTask(!data.done,index)} type="checkbox" data-cy="task-checkbox" />
     {data.done?<div data-cy="task-text" style={{ textDecorationLine: 'line-through' }}>{data.text}</div>:<div data-cy="task-text">{data.text}</div>}
      <Counter  handleUpdateTask={handleUpdateTask} id={index}count={data.count}/>
      <button onClick={()=>handleDeleteTask(index)} data-cy="task-remove-button">X</button>
    </li>
  );
};

export default Task;
