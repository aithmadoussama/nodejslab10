import React, { useReducer, useState } from "react";
import {
  todoReducer,
  ADD_TODO,
  TOGGLE_TODO,
  DELETE_TODO,
} from "../reducers/todoReducer";

function TodoList() {
  const [text, setText] = useState("");
  const [todos, dispatch] = useReducer(todoReducer, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text.trim() === "") return;

    dispatch({
      type: ADD_TODO,
      payload: text,
    });

    setText("");
  };

  return (
    <div className="card">
      <h3>Mes tâches</h3>

      <form onSubmit={handleSubmit} className="todo-form">
        <input
          type="text"
          placeholder="Nouvelle tâche..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button>Ajouter</button>
      </form>

      {todos.length === 0 ? (
        <p>Aucune tâche ajoutée.</p>
      ) : (
        <ul className="todo-list">
          {todos.map((todo) => (
            <li key={todo.id}>
              <span
                onClick={() =>
                  dispatch({ type: TOGGLE_TODO, payload: todo.id })
                }
                className={todo.completed ? "done" : ""}
              >
                {todo.text}
              </span>

              <button
                className="delete"
                onClick={() =>
                  dispatch({ type: DELETE_TODO, payload: todo.id })
                }
              >
                Supprimer
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TodoList;