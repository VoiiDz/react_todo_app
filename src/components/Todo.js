
const Todo = ({ todo, todos, setTodos }) => {
    const deleteHandler = () => {
        setTodos(todos.filter(t => 
            t.id !== todo.id
        ));
    }

    const completeHandler = () => {
        setTodos(todos.map(item => {
            return item.id === todo.id ? {...item, completed: !item.completed} : item;
        }));
    }
    return (
        <div className={`todo ${todo.completed ? "completed" : ""}`} >
            <li className='todo-item'>{todo.text}</li>
            <button onClick={completeHandler} className='complete-btn'><i className='fas fa-check'></i></button>
            <button onClick={deleteHandler} className='delete-btn'><i className='fas fa-trash'></i></button>
        </div>
    );
}

export default Todo;