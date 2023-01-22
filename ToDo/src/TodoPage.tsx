import { useState, FormEvent, ChangeEvent } from "react";

interface TodoPageProps {
    todos: string[] | ""
}

export const TodoPage = ({ todos }: TodoPageProps) => {
    const [todoItems, setTodoItems] = useState<string[]>(todos || []);
    const [newItem, setNewItem] = useState('');

    const handleAddTodo = (event: FormEvent) => {
        event.preventDefault();
        setTodoItems([...todoItems, newItem]);
        setNewItem('');
        localStorage.setItem('todoItems', JSON.stringify(todoItems));
    }

    const handleRemoveTodo = (index: number) => {
        const updatedList = todoItems.filter((_, i) => i !== index);
        setTodoItems(updatedList);
        localStorage.setItem('todoItems', JSON.stringify(updatedList));
    }

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setNewItem(event.target.value);
    }

    return (
        <div>
            <h1>Todos are stored to localStorage</h1>
            <form onSubmit={handleAddTodo}>
                <label>
                    Add new ToDo item:
                    <input type="text" value={newItem} onChange={handleChange} />
                </label>
                <button type="submit">Add</button>
            </form>
            <ul>
                {todoItems.map((item, index) => (
                    <li key={index}>{item} <button onClick={() => handleRemoveTodo(index)}>Remove</button></li>
                ))}
            </ul>
        </div>
    );
}