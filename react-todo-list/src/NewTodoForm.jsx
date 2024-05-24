import { useState } from "react";

export function NewTodoForm(props) {
    //console.log(props)
    const [newItem, setNewItem] = useState("");

    function handleInput(e) {
        setNewItem(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        if(newItem==="") return
        props.addTodo(newItem);
        setNewItem("");
    }

    return (
        <form onSubmit={handleSubmit} className="new-item-form">
            <div>
                <label htmlFor="item">New Item</label>
                <input value={newItem} onChange={handleInput} type="text" id="item" />
            </div>
            <button className="btn">Add</button>
        </form>
    );
}
