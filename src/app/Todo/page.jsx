"use client";
import NewTodoList from "@/Components/NewTodoList";
import TodoList from "@/Components/TodoList";
import React, { useState } from "react";

const Page = () => {
  const [todos, setTodos] = useState([]);

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const handleUpdate = (id, updatedTask) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, task: updatedTask };
        } else {
          return todo;
        }
      })
    );
  };
  const create = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const todo = todos.map((todo, index) => (
    <TodoList
      key={todo.id}
      todo={todo}
      remove={handleDelete}
      update={handleUpdate}
    />
  ));

  return (
    <div className="w-3/4 mx-auto space-y-10">
      <NewTodoList createTodo={create} todos={todos} />
      <div className="grid grid-cols-3 gap-4">{todo}</div>
    </div>
  );
};

export default Page;
