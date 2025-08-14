import { useState } from "react";

function ToDoList() {

    const [tasks,setTasks] = useState(["Eat breakfast","Go to college","Study 5 hours"]);
    const [task,setTask] = useState("");
    function addTask(){
        if (task.trim() === "") return; 
        setTasks(prev=>[...prev,task]);
        setTask("");
    }
    function handleAddTask(e){
        setTask(e.target.value)
    }
    function deleteTask(idx){
        setTasks(tasks.filter((_,index)=>index!==idx))
    }
    // function handleMoveUp(idx){
    //     const temp = tasks[idx];
    //     tasks[idx]=tasks[idx+1];  wrong
    //     tasks[idx+1]=temp;
    // }
    function handleMoveUp(idx){
        if (idx <= 0) return;
        setTasks(prev => {
            const arr = [...prev];
            [arr[idx - 1], arr[idx]] = [arr[idx], arr[idx - 1]];
            return arr;
        });
        }
function handleMoveDown(idx){
        setTasks(prev => {
            if (idx >= prev.length - 1) return prev;
            const arr = [...prev];
            [arr[idx], arr[idx + 1]] = [arr[idx + 1], arr[idx]];
            return arr;
        });
        }

    return(
        <div>
            <h1>To-Do-App</h1>
            <div>
              <input onChange={handleAddTask} value={task} placeholder="Enter to do task"></input>
              <button onClick={addTask}>Add</button>
            </div>
            <div>
                <ol>
                    {tasks.map(
                        (task,idx)=> <li id={idx}>
                            <span>{task}</span>
                            <button onClick={()=>deleteTask(idx)}>Delete</button>
                            <button onClick={()=>handleMoveUp(idx)}>Up</button>
                            <button onClick={()=>handleMoveDown(idx)}>Down</button>
                        </li>
                    )}
                </ol>
            </div>
        </div>
    )
}

export default ToDoList;


