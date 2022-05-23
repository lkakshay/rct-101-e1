import React, { useState } from "react";

import styles from "./taskApp.module.css";
import { TaskHeader } from "./TaskHeader";
import { AddTask } from "./AddTask";
import { Tasks } from "./Tasks";
import taksData from '../data/tasks.json'

const TaskApp = () => {


  const [TaskList,setTaskList]=useState(taksData)

  const handleAddTask=(task)=>{
    setTaskList([...TaskList,task])
       
  }

  const handleDeleteTask=(task)=>{
     setTaskList(TaskList.filter(item=>item.id!==task))
  }

  const handleUpdateTask=(task,id)=>{

    if(task==="increase"){
      console.log(1)
    }
    if(task==="decreace"){
      console.log(-1)
    }
    
   
 }


  // NOTE: do not delete `data-cy` key value pair
  return (
    <div data-cy="task-app" className={styles.taskApp}>
      <TaskHeader   />
      <AddTask  handleAddTask={handleAddTask}/>
      <Tasks  handleUpdateTask={handleUpdateTask} handleDeleteTask={handleDeleteTask} TaskList={TaskList}/>
      {/* Header */}
      {/* Add Task */}
      {/* Tasks */}
    </div>
  );
};

export default TaskApp;
