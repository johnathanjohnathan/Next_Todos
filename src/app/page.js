// Server Side Rendering
// Hit API Backend request
// Load page

// Client Side Rendering => useEffect dan useState
// Load page
// Hit API Backend


// Default next js APP ROUTER => Server Component
// Server Side Rendering

import prisma from "@/lib/prisma";
import { Table } from "@/components/Table";

export const getData = async () => {
  try {

    const todos = await prisma.todo.findMany();

    return todos;
  } catch(err) {
    console.log(err)
  }
}

// Server Component
export default async function Home() {
  const todos = await getData();

  return (
    <div>
        {/* Client Component */}
        <Table todos={todos}/>
    </div>
  );
}
