import React, { useState } from "react";
import NewTodoForm from "./NewTodoForm.js";
import Todo from "./Todo.js";

function TodoList() {
  const startingTodo = {
    task: "take out trash",
    id: 1,
  };

  const [todos, setTodos] = useState([startingTodo]);

  const add = (todoObj) => {
    setTodos((todos) => [...todos, todoObj]);
  };

  const remove = (id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };

  const todoComponents = todos.map((todo) => (
    <Todo key={todo.id} id={todo.id} task={todo.task} handleRemove={remove} />
  ));

  return (
    <>
      <h1>Your Todo List</h1>
      <div>
        <NewTodoForm add={add} />
      </div>
      <div className="todoList">{todoComponents}</div>
    </>
  );
}

export default TodoList;
