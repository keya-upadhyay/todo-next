import React, { useEffect, useState } from "react";

const TodoList = ({ todo, remove, update }) => {
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
      <div className="Todo">
        <form className="Todo-edit-form" onSubmit={handleUpdate}>
          <input onChange={handleChange} value={task} type="text" />
          <button type="submit">Save</button>
        </form>
      </div>
    );
  } else {
    return (
      <div className="bg-zinc-900 p-4 shadow-sm shadow-slate-600">
        <span className="text-zinc-500 capitalize">{todo.task}</span>
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
            Delete
          </button>
        </div>
      </div>
    );
  }
};

export default TodoList;
