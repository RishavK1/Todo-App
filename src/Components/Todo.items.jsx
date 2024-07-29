import React from "react";
import tick from "../assets/tick.png";
import not_tick from "../assets/not_tick.png";
import delete_icon from "../assets/delete.png";

export default function TodoItems({ tasks, deleteTodo, markAsDone, editTodo }) {
  return (
    <div>
      {tasks.map((work) => (
        <div key={work.id} className="flex items-center my-3 gap-2">
          <div
            onClick={() => markAsDone(work.id)}
            className="flex flex-1 items-center cursor-pointer"
          >
            <img
              src={work.isDone ? tick : not_tick}
              alt="tick-sign"
              className="w-7"
            />
            <p
              className={`text-slate-700 ml-4 text-[17px] ${
                work.isDone ? "line-through" : ""
              }`}
            >
              {" "}
              {work.task}
            </p>
          </div>
          <img
            onClick={() => deleteTodo(work.id)}
            src={delete_icon}
            alt="Delete-icon"
            className="w-4 cursor-pointer"
          />
          <button
            onClick={() => editTodo(work.id, work.task)}
            className="text-white bg-orange-600 px-2 py-1 rounded-full cursor-pointer"
          >
            Edit
          </button>
        </div>
      ))}
    </div>
  );
}
