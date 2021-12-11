import { useState } from "react";
import Header from "../Header";
import styles from "../../styles/Todo.module.css";
import AddInput from "../AddInput";
import TodoList from "../TodoList";

function Todo() {
  const [todos, setTodos] = useState([]);

  return (
    <div className={styles.todo}>
      <Header title="Todo" />
      <AddInput setTodos={setTodos} todos={todos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default Todo;