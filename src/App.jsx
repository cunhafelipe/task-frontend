import { useEffect, useState } from "react";
import axios from "axios";
import "./index.scss";

import TaskItem from "./TaskItem";

function App() {
  const [task, setTask] = useState([]);

  const fetchTask = async () => {
    try {
      const response = await axios.get(
        "https://task-manager-backend-7y59.onrender.com/tasks"
      );
      setTask(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTask();
  }, []);

  return (
    <div>
      {task.map((task, index) => (
        <TaskItem task={task} key={index} />
      ))}
    </div>
  );
}

export default App;
