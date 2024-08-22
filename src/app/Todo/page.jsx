"use client";
import NewTodoList from "@/Components/NewTodoList";
import TodoList from "@/Components/TodoList";
import React, { useState } from "react";

const Page = () => {
  const [todos, setTodos] = useState([]);
  const [open, setOpen] = useState({ state: false, id: null });
  const [checkTask, setCheckTask] = useState([]);
  const completedTasks = todos.filter((todo) => checkTask.includes(todo.id));
  const incompleteTasks = todos.filter((todo) => !checkTask.includes(todo.id));

  const deteleData = (id) => {
    let a = todos.filter((todo) => todo.id != id);
    setTodos(a);
    setOpen({ state: false, id: null });
  };
  const handleDelete = (id) => {
    setOpen({ state: true, id: id });
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
      remove={(id) => handleDelete(id)}
      update={handleUpdate}
      checkTask={checkTask}
      setCheckTask={setCheckTask}
    />
  ));

  return (
    <div className="w-3/4 mx-auto space-y-10">
      <NewTodoList
        createTodo={(userInput) => {
          const maxId =
            todos
              .map((item) => +item.id)
              .sort((a, b) => a - b)
              .pop() || 1;
          setTodos((preTodos) => [
            ...preTodos,
            { task: userInput, id: maxId + 1 },
          ]);
        }}
      />
      <span className="text-zinc-400 my-2 inline-block">
        Total List items ({todo.length})
      </span>
      {/* <div className="grid grid-cols-3 gap-4">{todo}</div> */}
      <p>INcomplete task</p>
      <div className="grid grid-cols-3 hey gap-4">
        {incompleteTasks.map((todo) => (
          <TodoList
            key={todo.id}
            todo={todo}
            remove={handleDelete}
            update={handleUpdate}
            checkTask={checkTask}
            setCheckTask={setCheckTask}
          />
        ))}
      </div>
      {completedTasks.length > 0 && (
        <div>
          <h3 className="text-zinc-400 hi my-2">Completed Tasks</h3>
          <div className="grid grid-cols-3 gap-4">
            {completedTasks.map((todo) => (
              <TodoList
                key={todo.id}
                todo={todo}
                remove={handleDelete}
                update={handleUpdate}
                checkTask={checkTask}
                setCheckTask={setCheckTask}
              />
            ))}
          </div>
        </div>
      )}

      <div
        className={`${
          open.state
            ? "fixed bg-black bg-blur-lg inset-0 h-full w-full flex items-center justify-center"
            : "hidden"
        }`}
      >
        <p>This data will be deleted</p>

        <button
          onClick={() => deteleData(open.id)}
          className="m-4 py-2 px-4 bg-black/05"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Page;
