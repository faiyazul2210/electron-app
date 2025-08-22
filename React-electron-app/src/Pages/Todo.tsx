import React, { useEffect, useState } from "react";
import ToDoForm from "../components/forms/ToDoform";
export interface ITASK {
  id: number;
  description: string;
  completed: boolean;
}
const Todo: React.FC = () => {
  const [tasks, setTasks] = useState<ITASK[]>([
    { id: 1, description: "created poc", completed: true },
    { id: 2, description: "Deploy to dev", completed: true },
    { id: 3, description: "publish the repo", completed: true },
    { id: 4, description: "create a demo video", completed: false },
  ]);
  const ipcRenderer = (window as any).ipcRenderer;
  const handleAddTodo = (newTask: ITASK) => {
    const newItem = {
      id: tasks.length + 1,
      description: newTask.description,
      completed: false,
    };
    setTasks([...tasks, newItem]);
  };
  // const getTodoList = async () => {
  //   try {
  //     const response = await fetch("MY_API_ENDPOINT");
  //     const json = await response.json();
  //     setTasks(json); // Update state with fetched data
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // };

  // useEffect(() => {
  //   getTodoList();
  //   ipcRenderer.on("task:added", (event: any, data: any) => getTodoList());
  // }, []);
  return (
    <div>
      <ToDoForm addItemTodo={handleAddTodo} />
      <ul className="menu menu-vertical lg:menu-horizontal bg-base-200 rounded-box">
        {tasks &&
          tasks.map((task) => {
            return (
              <li key={task.id} className="flex-row justify-between">
                <span> {task.description}</span>

                <input
                  type="checkbox"
                  checked={task.completed}
                  className="checkbox checkbox-success"
                />
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Todo;
