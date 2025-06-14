'use client';

import { useState } from 'react';
import { Todo } from '../types/todo';

interface TodoItemProps {
  todo: Todo;
  onUpdate: (id: string, text: string) => void;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export default function TodoItem({ todo, onUpdate, onToggle, onDelete }: TodoItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editText.trim()) {
      onUpdate(todo.id, editText.trim());
      setIsEditing(false);
    }
  };

  const handleCancel = () => {
    setEditText(todo.text);
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <form onSubmit={handleSubmit} className="flex gap-2 p-3 bg-gray-800 rounded-lg">
        <input
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          className="flex-1 px-3 py-1 border border-gray-600 bg-gray-700 text-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          autoFocus
        />
        <button
          type="submit"
          className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Save
        </button>
        <button
          type="button"
          onClick={handleCancel}
          className="px-3 py-1 bg-gray-600 text-gray-200 rounded hover:bg-gray-500"
        >
          Cancel
        </button>
      </form>
    );
  }

  return (
    <div className="flex items-center gap-3 p-3 bg-gray-800 border border-gray-700 rounded-lg hover:shadow-sm hover:shadow-gray-700/50 transition-shadow">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        className="w-5 h-5 text-blue-500 rounded focus:ring-blue-400"
      />
      <span 
        className={`flex-1 ${todo.completed ? 'line-through text-gray-400' : 'text-gray-100'}`}
      >
        {todo.text}
      </span>
      <button
        onClick={() => setIsEditing(true)}
        className="px-3 py-1 text-sm bg-gray-700 text-gray-200 rounded hover:bg-gray-600"
      >
        Edit
      </button>
      <button
        onClick={() => onDelete(todo.id)}
        className="px-3 py-1 text-sm bg-red-900/30 text-red-300 rounded hover:bg-red-900/50"
      >
        Delete
      </button>
    </div>
  );
}