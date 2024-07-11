import { AiFillDelete } from "react-icons/ai";
import "./TaskItem.scss";
import axios from "axios";

export default function TaskItem({ task }) {
  async function handleTaskDelete() {
    try {
      await axios.delete(
        "https://task-manager-backend-7y59.onrender.com/tasks/:id"
      );
    } catch (error) {
      console.log(error);
    }
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
