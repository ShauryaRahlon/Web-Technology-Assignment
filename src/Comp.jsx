import React, { use } from "react";
import { useState } from "react";

function TodoApp() {

    const [task, setTask] = useState("")
    const [taskArr, setTaskArr] = useState([])

    const [editIndex, setEditIndex] = useState(-1);

    //add a task
    const addTask = () => {
        if (task.trim() == "")
            return;

        setTaskArr([...taskArr, task])
        setTask("");
    }

    const editTask = (index) => {
        setTask(taskArr[index])
        setEditIndex(index);
    }

    const updateTask = () => {
        if (task.trim() == "")
            return;

        const [newTasks] = [...taskArr]

        newTasks[editIndex] = task

        setTaskArr(newTasks)
        setTask("")
        setEditIndex(-1)
    }

    const changeTask = (e) => {
        setTask(e.target.value);
    }

    //delete done 
    const deleteTask = (index) => {
        const newTasks = taskArr.filter((_, i) => i != index)
        setTaskArr(newTasks);
    }

    //update task
    return (
        <div style={{ textAlign: "center", marginTop: "40px" }}>
            <h2>Simple Todo List</h2>

            <input
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
            />

            {editIndex === -1 ? (
                <button onClick={addTask}>Add</button>
            ) : (
                <button onClick={updateTask}>Update</button>
            )}

            <ul>
                {taskArr.map((t, index) => (
                    <li key={index}>
                        {t}

                        <button onClick={() => editTask(index)}>
                            Edit
                        </button>

                        <button onClick={() => deleteTask(index)}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoApp;