"use client"
import { useState } from "react"
import baseUrl from "@/lib/baseUrl"
import { useRouter } from "next/navigation"
// Client Component
export default function CreateTodo() {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [userId, setUserId] = useState("")
    const router = useRouter();


    const handleSubmit = async () => {

        const payload = {
            title,
            description,
            userId: +userId
        }

        const response = await fetch(`${baseUrl}/todos`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        })

        const data = await response.json();

        router.push("/")
    }

    return (
        <div>
            <input onChange={(e) => setTitle(e.target.value)} className="block bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" placeholder="title" />
            <input onChange={(e) => setDescription(e.target.value)} className="block bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" placeholder="description"/>
            <input onChange={(e) => setUserId(e.target.value)} className="block bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" placeholder="userId"/>
            <button onClick={handleSubmit} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">SUBMIT</button>
        </div>
    )
}