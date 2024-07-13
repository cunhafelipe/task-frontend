import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

import "./Tasks.scss";
import TaskItem from "./TaskItem";
import AddTask from "./AddTask";

export default function Tasks() {
  const [tasks, setTask] = useState([]);

  const unfinishedTasks = tasks.filter((task) => task.isCompleted === false);
  const finishedTasks = tasks.filter((task) => task.isCompleted === true);

  const fetchTask = async () => {
    try {
      const response = await axios.get(
        "https://task-manager-backend-7y59.onrender.com/tasks"
      );
      setTask(response.data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
      return Swal.fire({
        position: "bottom-right",
        title: "Error!",
        text: "Algo deu errado.",
        icon: "error",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  useEffect(() => {
    fetchTask();
  }, []);

  return (
    <div className="tasks-container">
      <h2>Últimas tarefas</h2>

      <div className="last-tasks">
        <h3>Últimas tarefas</h3>
        <AddTask fetchTasks={fetchTask} />
        <div className="tasks-list">
          {unfinishedTasks.map((lastTask, index) => (
            <TaskItem task={lastTask} key={index} fetchTasks={fetchTask} />
          ))}
        </div>
      </div>

      <div className="completed-tasks">
        <h3>Tarefas Concluídas</h3>
        <div className="tasks-list">
          {finishedTasks.map((finishedTask, index) => (
            <TaskItem task={finishedTask} key={index} fetchTasks={fetchTask} />
          ))}
        </div>
      </div>
    </div>
  );
}
