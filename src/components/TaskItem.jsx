import { AiFillDelete } from "react-icons/ai";
import axios from "axios";
import Swal from "sweetalert2";

import "./TaskItem.scss";

export default function TaskItem({ task, fetchTasks }) {
  const handleTaskDeletion = async () => {
    try {
      const response = await axios.delete(
        `https://task-manager-backend-7y59.onrender.com/tasks/${task._id}`
      );
      console.log("Delete response:", response);
      await fetchTasks();
    } catch (error) {
      console.log(error);
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

  const handleTaskCompletion = async (e) => {
    try {
      await axios.patch(
        `https://task-manager-backend-7y59.onrender.com/tasks/${task._id}`,
        {
          isCompleted: e.target.checked,
        }
      );
      await fetchTasks();

      Swal.fire({
        position: "bottom-right",
        title: "Error!",
        text: "A TAREFA FOI MODIFICADA COM SUCESSO!",
        icon: "success",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      console.log(error);
    }
  };

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
          <input
            type="checkbox"
            defaultChecked={task.isCompleted}
            onChange={(e) => handleTaskCompletion(e)}
          />
          <span
            className={task.isCompleted ? "checkmark completed" : "checkmark"}
          ></span>
        </label>
      </div>
      <div className="delete">
        <AiFillDelete size={18} color="#F97474" onClick={handleTaskDeletion} />
      </div>
    </div>
  );
}
