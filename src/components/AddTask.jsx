import CustomImput from "./CustomInput";

import "./AddTask.scss";
import { useState } from "react";
import CustomButton from "./CustomButton";
import { FaPlus } from "react-icons/fa";
import axios from "axios";
import Swal from "sweetalert2";

export default function AddTask({ fetchTasks }) {
  const [task, setTask] = useState("");

  const onChange = (e) => {
    setTask(e.target.value);
  };

  const handleTaskAddition = async () => {
    try {
      if (task.length === 0) {
        return Swal.fire({
          position: "bottom-right",
          title: "Error!",
          text: "A tarefa precisa de uma descrição para ser adicionada.",
          icon: "error",
          showConfirmButton: false,
          timer: 1500,
        });
      }

      await axios.post("https://task-manager-backend-7y59.onrender.com/tasks", {
        description: task,
        isCompleted: false,
      });

      await fetchTasks();
      setTask("");
      Swal.fire({
        position: "bottom-right",
        title: "SUCESSO",
        text: "A TAREFA FOI ADICIONADA",
        icon: "success",
        showConfirmButton: false,
        timer: 1500,
      });
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
  };

  return (
    <div className="add-task-container">
      <CustomImput
        label="Adicionar tarefa..."
        value={task}
        onChange={onChange}
        onEnterPress={handleTaskAddition}
      />
      <CustomButton onClick={handleTaskAddition}>
        <FaPlus size={14} color="#ffffff" />
      </CustomButton>
    </div>
  );
}
