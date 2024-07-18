"use client";
import React, { useState } from "react";
import { toast } from "react-toastify";

const NewTodoList = ({ createTodo }) => {
  const [userInput, setUserInput] = useState({
    task: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (userInput !== "") {
      let newTodo = { task: userInput.task };
      createTodo(newTodo);
      setUserInput({ task: "" });
    } else {
      toast.warn("Plase fill out form ");
    }
  };

  const handleChnage = (e) => {
    if (userInput === "") {
      toast.warn("Plase fill out form ");
    } else {
      setUserInput({ [e.target.name]: e.target.value });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <input
        id="task"
        type="text"
        name="task"
        value={userInput.task}
        onChange={handleChnage}
        placeholder="Please enter value"
      />
      <button type="submit">Save</button>
    </form>
  );
};

export default NewTodoList;
