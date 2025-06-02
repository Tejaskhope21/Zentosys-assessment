import React, { useState } from "react";

export default function TodoItem({ todo, onDelete, onToggle, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(todo.text);

  const handleUpdate = () => {
    onUpdate(todo.id, editedText);
    setIsEditing(false);
  };

  return (
    <div className="flex items-center justify-between bg-white dark:bg-gray-800 p-2 rounded shadow">
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
        />
        {isEditing ? (
          <input
            className="border px-2 py-1 rounded"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
          />
        ) : (
          <span
            className={`${todo.completed ? "line-through text-gray-500" : ""}`}
          >
            {todo.text}
          </span>
        )}
      </div>
      <div className="flex gap-1">
        {isEditing ? (
          <button
            onClick={handleUpdate}
            className="text-green-500 hover:underline"
          >
            Save
          </button>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="text-blue-500 hover:underline"
          >
            Edit
          </button>
        )}
        <button
          onClick={() => onDelete(todo.id)}
          className="text-red-500 hover:underline"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
