"use client"

import { useRouter } from "next/navigation"

// Client Component
export const Table = ({todos}) => {
    const router = useRouter();

    const handleInfo = (id) => {
        router.push(`/todos/${id}`)    
    }


    return (
        <div>
            <button onClick={(e) => router.push("/todos")} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">New +</button>
            <table>
                <thead>
                    <tr>
                    <th>NO</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Status</th>
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {todos.map((todo, idx) => {
                    return (
                        <tr key={idx}>
                            <td>{idx+1}</td>
                            <td>{todo.title}</td>
                            <td>{todo.description}</td>
                            <td>{todo.status.toString()}</td>
                            <td><button onClick={(e) => handleInfo(todo.id)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">INFO</button></td>
                        </tr>
                    )
                    })}
                </tbody>
            </table>
        </div>
    )
} 