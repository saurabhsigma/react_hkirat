"use client"
// import React, { useState } from "react";

// const page = () => {
//     // const [marks, setMarks] = useState(80);
//     const [todos, setTodos] = useState([
//         {
//             title: "Study web dev",
//             description: "Study web development from Harkirat's course"
//         },
//         {
//             title: "Study DSA",
//             description: "Study DSA from Kunal Kushwaha"
//         },
//         {
//             title: "Study hacking",
//             description: "Study hacking from the Udemy course"
//         }
//     ]);
//     // function updateMarks(){
//     //     const max = 100;
//     //     const min = 36;
//     //     const a = Math.floor(Math.random() * (max - min + 1)) + min;

//     //     setMarks(a);
//     // }

//     return (
//         <>

//             {/* making a toodo app with the react using the in-house databse */}
//             {/* <h1 className="font-bold text-xl">
//                 My total marks were: {marks}
//             </h1>
//             <br />
//             <button onClick={updateMarks} className="bg-gray-400 px-5 py-2 rounded mt-5 text-white font-bold ml-4">
//                 Update!
//                   {todos.map(todo => <Todo title={todo.title} description={todo.description} />)}

//             </button>  
            
//             function Todo({title, description}) {

//   return <div>
//     <h1>
//       {title}
//     </h1>
//     <h5>
//       {description}
//     </h5>
//   </div>
// }*/}

//             {todos.map(todo => <Todo title={todo.title} description={todo.description}></Todo>)}
//         </>
//     )

//     function Todo({ title }, { description }) {
//         return (
//             <>
//                 <h1> {title} </h1>
//                 <br />
//                 <h5> {description} </h5>
//             </>
//         )
//     }
// }



// export default page


// "use client"

import React, { useState } from "react";
import Header from "@/components/Header";
import Link from "next/link";

const Page = () => {
    
    const [todos, setTodos] = useState([
        {
            title: "Study web dev",
            description: "Study web development from Harkirat's course"
        },
        {
            title: "Study DSA",
            description: "Study DSA from Kunal Kushwaha"
        },
        {
            title: "Study hacking",
            description: "Study hacking from the Udemy course"
        }
    ]);

    const addTodo = () => {
        const newTodo = {
            title: "New Task",
            description: "Description of the new task"
        };

        setTodos([...todos, newTodo]);
    };

    const Todo = ({ title, description }) => (
        <>
            <h1>{title}</h1>
            <h5>{description}</h5>
        </>
    );

    return (
        <>

            <Header/>
            <br/> 
            <h1 className="font-bold text-xl">TODO List</h1>
            <button onClick={addTodo} className="bg-gray-400 px-5 py-2 rounded mt-5 text-white font-bold ml-4">
                Add Todo
            </button>
            {todos.map((todo, index) => (
                <Todo key={index} title={todo.title} description={todo.description} />
            ))}
        </>
    );
};

export default Page;
