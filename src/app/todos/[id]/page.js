// Client Side Rendering
// useEffect dan useState
"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { NextResponse } from "next/server";
import baseUrl from "@/lib/baseUrl";

// Client Component
// Interaksi user
export default function TodoDetail({ params }) {
  const [todo, setTodo] = useState({});
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleDelete = async (id) => {
    await fetch(`${baseUrl}/todos/${id}`, {
      method: "DELETE",
    });
    router.push("/");
  };

  const fetchData = async () => {
    const response = await fetch(`${baseUrl}/todos/${params.id}`);

    const data = await response.json();
    setTodo(data);
    setLoading(false);
  };

  useEffect(() => {
    const fetching = async () => {
      setLoading(true);
      await fetchData();
    };

    fetching();
  }, []);

  if (loading) {
    return <div>LOADING.....</div>;
  } else {
    return (
      <div>
        <p>{todo.id}</p>
        <p>{todo.title}</p>
        <p>{todo.description}</p>
        <p>{todo.status?.toString()}</p>
        <button
          onClick={(e) => router.push("/")}
          className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
        >
          BACK
        </button>
        <button
          onClick={(e) => router.push(`/todos/update/${todo.id}`)}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          UPDATE
        </button>
        <button
          onClick={(e) => handleDelete(todo.id)}
          className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
        >
          DELETE
        </button>
      </div>
    );
  }
}
