type TodoItemProps = {
  text: string;
  completed: boolean;
  onToggleComplete: () => void;
};

export function TodoItem({ text, completed, onToggleComplete }: TodoItemProps) {
  return (
    <li
      className={completed ? 'completed-todo' : ''}
      onClick={onToggleComplete}
      style={{ cursor: 'pointer' }} // Add a pointer cursor to indicate it's clickable
    >
      {text}
    </li>
  );
}
