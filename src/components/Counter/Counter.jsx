import React from "react";
import styles from "./counter.module.css";

const Counter = ({count,handleUpdateTask,id}) => {
  // sample value to be replaced

  // NOTE: do not delete `data-cy` key value pair
  return (
    <div className={styles.counter}>
      <button onClick={()=>handleUpdateTask("increase",id)} data-cy="task-counter-increment-button">+</button>
      <span data-cy="task-counter-value">{count}</span>
      <button onClick={()=>handleUpdateTask("decreace",id)} data-cy="task-counter-decrement-button">-</button>
    </div>
  );
};

export default Counter;
