import React from "react";
import styles from "./addTask.module.css";
import { useState } from "react";

const AddTask = ({handleAddTask}) => {
  // NOTE: do not delete `data-cy` key value pair

  const [input,setInput]=useState({
   
    text:"",
    done:"false",
    count:1
  })
  const AddTask=()=>{
    handleAddTask(input)
  }


 
  return (
    <div className={styles.todoForm}>
      <input placeholder="Add Task" onChange={(e)=>setInput({...input,text:e.target.value,id:Date.now()})} data-cy="add-task-input" type="text" />
      <button onClick={AddTask} data-cy="add-task-button" >Add</button>
    </div>
  );
};

export default AddTask;
