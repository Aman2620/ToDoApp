import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons';
import './container.css';

function TaskItem({ task, onEdit, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(task);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleTaskChange = (event) => {
    setEditedTask(event.target.value);
  };

  const handleSave = () => {
    onEdit(editedTask);
    setIsEditing(false);
  };

  return (
    <div className="task-item">
      {isEditing ? (
        <input
          type="text"
          value={editedTask}
          onChange={handleTaskChange}
        />
      ) : (
        <p>{task}</p>
      )}
      <div className="wrap-task-action">
        <input type="checkbox" className="checkbox-input" style={{ marginTop: '15px' }} />
        <div className="icon-container">
          {isEditing ? (
            <FontAwesomeIcon
              className="fontawesome"
              icon={faTrash}
              style={{ color: '#790c32', marginTop: '-20px', cursor: 'pointer' }}
              onClick={() => onDelete(task)}
            />
          ) : (
            <FontAwesomeIcon
              className="fontawesome"
              icon={faPencilAlt}
              style={{ color: '#40be27', marginTop: '-20px', cursor: 'pointer' }}
              onClick={handleEdit}
            />
          )}
          {!isEditing && (
            <FontAwesomeIcon
              className="fontawesome"
              icon={faTrash}
              style={{ color: '#790c32', marginTop: '-20px', cursor: 'pointer' }}
              onClick={() => onDelete(task)}
            />
          )}
        </div>
      </div>
      {isEditing && (
        <button onClick={handleSave}>Save</button>
      )}
    </div>
  );
}

export default TaskItem;
