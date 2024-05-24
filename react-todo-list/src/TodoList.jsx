import { SingleTodoItem } from "./SingleTodoItem"


export function TodoList({todoItem,toggleTodo,deleteTodo}){//this will be the todoItems(stored as todoprop redundantly) needed


   
   return (<ul className="list" >
    {todoItem.length===0//short circuiting through logical operator -see js concept 
    &&"no todos"}
   {//javascript here 
   todoItem.map((item,key)=> {
    return <SingleTodoItem completed={item.completed} id={item.id} title={item.title} key={item.id}
    toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
   })
    }  
</ul>)
}