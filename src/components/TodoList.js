import React from 'react';
import Todo from './Todo';


const TodoList = ({ todos, setTodos, filtered }) => {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {filtered.map((todo, i) => {
                    return <Todo key={todo.id} todo={todo} todos={todos} setTodos={setTodos} />;
                })}
            </ul>
        </div>
    );
}

export default TodoList;