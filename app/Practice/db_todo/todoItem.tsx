"use client"

import Link from "next/link";
const STYLE = `border-2 border-black mx-1 p-1 drop-shadow-md rounded-md`

export default function TodoItem({ index, id, title, done, deleteTask, toggleTask }: {
    index: number;
    id: string;
    title: string;
    done: boolean;
    deleteTask: (id: string) => void;
    toggleTask: (id: string, done: boolean) => void;
}) {
    return (
        <div key={id}>
            {index + 1}:
            {title}
            <input
                className={STYLE}
                type="checkbox" defaultChecked={done}
                onClick={() => toggleTask(id, !done)}
            />

            <button
                className={STYLE}
                onClick={() => deleteTask(id)}>delete</button>

            <Link 
                className={STYLE}
                href={{
                pathname: '/Practice/db_todo/edit',
                query: { id, title },
            }} >Edit</Link>
        </div>)
}