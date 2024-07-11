import { AiFillDelete } from "react-icons/ai";
import axios from "axios";
import Swal from "sweetalert2";

import "./TaskItem.scss";

export default function TaskItem({ task, fetchTasks }) {
  async function handleTaskDelete() {
    try {
      await axios.delete(
        `https://task-manager-backend-7y59.onrender.com/tasks/${task._id}`
      );
    } catch {
      return Swal.fire({
        position: "bottom-right",
        title: "Error!",
        text: "Algo deu errado.",
        icon: "error",
        showConfirmButton: false,
        timer: 1500,
      });
    }

    await fetchTasks();
  }

  return (
    <div className="task-item-container">
      <div className="task-description">
        <label
          className={
            task.isCompleted
              ? "checkbox-container-completed"
              : "checkbox-container"
          }
        >
          {task.description}
          <input type="checkbox" defaultChecked={task.isCompleted} />
          <span
            className={task.isCompleted ? "checkmark completed" : "checkmark"}
          ></span>
        </label>
      </div>
      <div className="delete">
        <AiFillDelete size={18} color="#F97474" onClick={handleTaskDelete} />
      </div>
    </div>
  );
}
