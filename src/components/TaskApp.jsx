import React, { useEffect, useState } from "react";

import styles from "./taskApp.module.css";
import { TaskHeader } from "./TaskHeader";
import { AddTask } from "./AddTask";
import { Tasks } from "./Tasks";
import taksData from '../data/tasks.json'

const TaskApp = () => {
  


  const [TaskList,setTaskList]=useState(taksData)
  
  const handleAddTask=(task)=>{
     let duplicate=false

    TaskList.forEach(e=>{
      if(e.text===task.text){
        duplicate=true
        return 
      }
      
    })

    if(!duplicate){
      setTaskList([...TaskList,task])
  
    }
    
    
  }

  const handleDeleteTask=(task)=>{
     setTaskList(TaskList.filter((e,i)=>i!==task))
  }

  const handleUpdateTask=(task,id)=>{

    if(task==="increase"){
      
      
      let newArr = [...TaskList]; 
      newArr[id].count +=1
    
      setTaskList(newArr)
      return  
    }
    if(task==="decreace"){
      
      let newArr = [...TaskList]; 
      if(newArr[id].count>0)
      newArr[id].count -=1
    
      setTaskList(newArr)
      return
    }


 
      let newArr = [...TaskList]; 
      if(newArr[id].count>0)
      newArr[id].done =task
      setTaskList(newArr)
 }
 
 

 const [rem ,setrem]=useState()

 const reminng=()=>{
     let count =0
    TaskList.forEach((e)=>{
      if(!e.done){
        count++
      }

    })

    setrem(count)
 }

 useEffect(()=>{
  reminng()
 },[TaskList])
 
 


  // NOTE: do not delete `data-cy` key value pair
  return (
    <div data-cy="task-app" className={styles.taskApp}>
      <TaskHeader totalTask={TaskList.length}  unCompletedTask={rem}/>
      <AddTask  handleAddTask={handleAddTask}/>
      <Tasks  handleUpdateTask={handleUpdateTask} handleDeleteTask={handleDeleteTask} TaskList={TaskList}/>
      {/* Header */}
      {/* Add Task */}
      {/* Tasks */}
    </div>
  );
};

export default TaskApp;
