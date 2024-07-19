"use client";
import React, { useState } from "react";
import { toast } from "react-toastify";

const NewTodoList = ({ createTodo, todos }) => {
  const [userInput, setUserInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userInput === "") {
      toast.warn("Plase fill out form ");
    } else {
      let newTodo = { task: userInput, id: todos.length + 1 };
      createTodo(newTodo);
      setUserInput("");
    }
  };

  const handleChnage = (e) => {
    setUserInput(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="space-x-10 flex items-center ">
      <input
        id="task"
        type="text"
        name="task"
        value={userInput}
        onChange={handleChnage}
        placeholder="Please enter value"
      />
      <button type="submit" className="bg-slate-800 py-2 px-4">
        Save
      </button>
    </form>
  );
};

export default NewTodoList;
