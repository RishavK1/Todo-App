import React, { useState, useEffect } from "react";
import todo_icon from "../assets/todo_icon.png";
import TodoItems from "./Todo.items";
import { v4 as uuidv4 } from "uuid";

export default function Todo() {
  const [todo, setTodo] = useState([
    { task: "React-Practice", id: uuidv4(), isDone: false },
  ]);
  const [newTodo, setNewTodo] = useState("");
  const [editId, setEditId] = useState(null);

const addNewTask = () => {
    if (newTodo.trim() !== "") {
      if (editId) {
        setTodo((prevTodo) =>
          prevTodo.map((item) =>
            item.id === editId ? { ...item, task: newTodo } : item
          )
        );
        setEditId(null);
      } else {
        setTodo((prevTodo) => {
          return [...prevTodo, { task: newTodo, id: uuidv4(), isDone: false }];
        });
      }
      setNewTodo("");
    }
  };

  const updateTodo = (event) => {
    setNewTodo(event.target.value);
  };

  const deleteTodo = (id) => {
    setTodo((prevTodo) => prevTodo.filter((item) => item.id !== id));
  };

  const markAsDone = (id) => {
    setTodo((prevTodo) =>
      prevTodo.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            isDone: !todo.isDone,
          };
        } else {
          return todo;
        }
      })
    );
  };

  const editTodo = (id, task) => {
    setNewTodo(task);
    setEditId(id);
  };

  return (
    <div className="bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl">
      <div className="flex items-center mt-7 gap-2">
        <img className="w-8" src={todo_icon} alt="todo-icon" />
        <h1 className="text-3xl font-semibold">Todo-List</h1>
      </div>
      <div className="flex items-center my-7 bg-gray-200 rounded-full">
        <input
          onChange={updateTodo}
          className="bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600"
          type="text"
          placeholder="Add Your tasks"
          value={newTodo}
        />
        <button
          onClick={addNewTask}
          className="border-none rounded-full bg-orange-600 w-32 h-14 text-white text-lg font-medium cursor-pointer"
        >
          {editId ? "Update" : "Add +"}
        </button>
      </div>
      <div>
        <TodoItems
          tasks={todo}
          deleteTodo={deleteTodo}
          markAsDone={markAsDone}
          editTodo={editTodo}
        />
      </div>
    </div>
  );
}
