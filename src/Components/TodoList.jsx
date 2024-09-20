import React, { useEffect, useState } from "react";

const TodoList = ({ todo, remove, update, checkTask, setCheckTask }) => {
  const [isEditing, setIsEditing] = useState(false);

  const [task, setTask] = useState(todo.task);

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleDelete = (e) => {
    remove(todo.id);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    update(todo.id, task);
    handleEdit();
  };

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  if (isEditing) {
    return (
      <div className="Todo" id={todo.id}>
        <form className="Todo-edit-form" onSubmit={handleUpdate}>
          <input onChange={handleChange} value={task} type="text" />
          <button type="submit">Save</button>
        </form>
      </div>
    );
  } else {
    return (
      <div className="bg-zinc-900 p-4 shadow-sm shadow-slate-600" id={todo.id}>
        <div className="flex items-center justify-between">
          <span className="text-zinc-500 capitalize">{todo.task}</span>

          <label htmlFor={todo.id}>
            {/* <input
              type="checkbox"
              id={todo.id}
              onChange={() => {
                setCheckTask(task);
              }}
              checked={checkTask}
            ></input> */}

            <input
              type="checkbox"
              id={todo.id}
              onChange={() => {
                if (checkTask.includes(todo.id)) {
                  setCheckTask(checkTask.filter((id) => id !== todo.id)); // Uncheck the task
                } else {
                  setCheckTask([...checkTask, todo.id]); // Check the task
                }
              }}
              checked={checkTask.includes(todo.id)}
            ></input>
          </label>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="text-zinc-600 hover:text-zinc-500 transition-colors"
            onClick={handleEdit}
          >
            Edit
          </button>
          <button
            className="text-zinc-600 hover:text-zinc-500 transition-colors"
            onClick={handleDelete}
          >
            Remove
          </button>
        </div>
      </div>
    );
  }
};

export default TodoList;
