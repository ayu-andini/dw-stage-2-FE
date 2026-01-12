type TodoItemProps = {
  text: string;
};

export function TodoItem({ text }: TodoItemProps) {
  return <li>{text}</li>;
}
