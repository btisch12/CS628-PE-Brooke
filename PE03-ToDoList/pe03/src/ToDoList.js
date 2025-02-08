import React from 'react';
import ToDoItem from './ToDoItem';

export default function ToDoList({ todos, onDeleteTask }) {
  return (
    <div style={styles.listContainer}>
      {todos.map((todo, index) => (
        <ToDoItem
          key={index}
          task={todo}
          onDelete={() => onDeleteTask(index)}
        />
      ))}
    </div>
  );
}

const styles = {
  listContainer: {
    marginTop: '20px',
  },
};
