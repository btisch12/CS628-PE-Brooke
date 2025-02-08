import React from 'react';

export default function ToDoItem({ task, onDelete }) {
  return (
    <div style={styles.itemContainer}>
      <span style={styles.task}>{task}</span>
      <button style={styles.deleteButton} onClick={onDelete}>
        Delete
      </button>
    </div>
  );
}

const styles = {
  itemContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    marginBottom: '10px',
    backgroundColor: '#f9f9f9',
    borderRadius: '4px',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
  },
  task: {
    fontSize: '16px',
    fontWeight: 'bold',
  },
  deleteButton: {
    padding: '5px 10px',
    fontSize: '14px',
    backgroundColor: '#dc3545',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};
