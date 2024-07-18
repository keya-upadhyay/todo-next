"use client";
import NewTodoList from "@/Components/NewTodoList";
import TodoList from "@/Components/TodoList";
import React, { useState } from "react";

const page = () => {
  const [todos, SetTodos] = useState([]);

  const create = (newTodo) => {
    console.log(newTodo);
    SetTodos([...todos, newTodo]);
  };

  const todo = todos.map((todo, index) => {
    <TodoList key={index} todo={todo} />;
  });

  return (
    <div className="w-3/4 mx-auto">
      <NewTodoList createTodo={create} />

      <div className="grid grid-cols-3 gap-4">{todo}</div>
    </div>
  );
};

export default page;
