import React,{useState} from 'react'
import styles from "../../styles/AddInput.module.css";
export default function AddInput({todos,setTodos}) {
    const [todo, setTodo] = useState("")
       const addTodo = () => {
        let updatedTodos = [
            ...todos,
            {
                id:`${todo}${Math.random()}`,
                task: todo,
                completed: false
            }
        ]
        setTodos(updatedTodos);
        setTodo("")
    }
    return (
        <div className={styles.inputBox}>
            <input 
                className={styles.input} 
                value={todo} 
                onChange={(e) => setTodo(e.target.value)}
                placeholder="Add a new task here..."
            />
            <button 
                className={styles.addBtn}
                onClick={addTodo}
            >
                Add
            </button>
        </div>
    )
}
