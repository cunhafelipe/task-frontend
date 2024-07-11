import CustomImput from "./CustomInput";

import "./AddTask.scss";
import { useState } from "react";

export default function AddTask() {
  const [task, setTask] = useState("");

  const onChange = (e) => {
    setTask(e.target.value);
  };

  return (
    <div className="add-task-container">
      <CustomImput
        label="Adicinar tarefa..."
        value={task}
        onChange={onChange}
      />
    </div>
  );
}
