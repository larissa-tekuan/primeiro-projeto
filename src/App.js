import React from "react";
import "./App.css";

const tasks = [];

function App() {
    const [list, setList] =  React.useState(tasks);

    const insert = (event) => {
        event.preventDefault();

        setList([...list, { done: false, label: event.target.elements[0].value }]);
    };

    return (
        <div>
            <h1> To Do List</h1>

            <form onSubmit={insert}>
                <input type="text" id="label" name="label" placeholder="What needs be done?"/>
                <button type="submit"></button>
            </form>

            <ul>
                {list.map((task, i)=> (
                    <li key={i}>{task.label}</li>
                ))}
            </ul>
        </div>
    );
}


export default App;