import React from "react";

const TodoList = ({ todo }) => {
  const [isEditing, setIsEditing] = useState(false);
  return (
    <div className="p-4 bg-zinc-950">
      <span className="text-zinc-500">{item.task}</span>
      <div>
        <button className="text-zinc-600 hover:text-zinc-500 transition-colors">
          Edit
        </button>
        <button className="text-zinc-600 hover:text-zinc-500 transition-colors">
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoList;
