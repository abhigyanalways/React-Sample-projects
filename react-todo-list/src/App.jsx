import { useState } from "react";
import "./styles.css";
import { NewTodoForm } from "./NewTodoForm";
import { TodoList } from "./TodoList";

export default function App (){
    const [todoItem, setTodoItem] = useState([]);

    function addTodo(title) {
        setTodoItem((current_todoItem) => {
            return [...current_todoItem, { id:crypto.randomUUID(), title:title, completed:false}];
        });
    }


    function toggleTodo(id, completed_status) {
        setTodoItem((current_todoItem) => {
            return current_todoItem.map(single_todoItem => {
                if(single_todoItem.id === id) {
                    return { ...single_todoItem, completed: completed_status };
                }
                return single_todoItem;
            });
        });
    }

    function deleteTodo(id) {
        setTodoItem(current_todoItem => {
            return current_todoItem.filter(single_todoItem => single_todoItem.id !== id);
        });
    }
   
   

    

    return (
        <>
        
            <NewTodoForm addTodo={addTodo} />

            <h1 className="header">To Do List</h1>
            <TodoList todoItem={todoItem} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
        </>
    )
}
