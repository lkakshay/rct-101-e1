import React from "react";
import styles from "./tasks.module.css";
import Task from "../Task/Task";





const Tasks = ({TaskList,handleDeleteTask,handleUpdateTask}) => {


  // NOTE: do not delete `data-cy` key value pair
  return (
    <>
       {TaskList.length>0? <ul data-cy="tasks" className={styles.tasks}>
          {TaskList?.map((e,i)=>(
            <Task key={i} index={i} handleUpdateTask={handleUpdateTask} handleDeleteTask={handleDeleteTask} data={e}/>
          ))}
        </ul>:
        <div data-cy="tasks-empty" className={styles.empty}>
              Empty List Add a new task
          {/* Show when No Tasks are present */}
        </div>}
    </>
  );
};

export default Tasks;
