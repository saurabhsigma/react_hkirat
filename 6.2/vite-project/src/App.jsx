// import React, { useState } from "react";

// function App() {
//   // useState
//   // const [count, setCount] = useState(0);
//   // return <div>
//   //   <button onClick={function () {
//   //     setCount(count + 1);
//   //   }}> Click Me {count}</button>
//   // </div>

// }

// export default App;

// import React from "react";
// import { useState } from "react";
// import { useEffect } from "react";

// function App(){
//   const [todos, setTodos] = useState([])

  // use can use the axios syntax in the place of fetch syntax as an option
  // just import axios and write the following code in place of fetcg
  // useEffect(()=>{
  //   axios.get("https://sum-server.100xdevs.com/todos")
  //     .then(function(response) {
  //       setTodos(response.data.todos)
  //     })
  // },[])

  // useEffect(()=>{
  //   fetch("https://sum-server.100xdevs.com/todos")
  //   .then(async function(res){
  //     const json = await res.json();
  //     setTodos(json.todos);
  //   })
  // },[])

  // the second argument in the useffect (,[]) gives conditions as to when to call the fetch function
  // useEffect is used as a pit stop, which will be not used in every render
  // but when we want to use it, we can give it a condition

//   return <div>
//     {todos.map(todo => <Todo key={todo.title} title={todo.title} description = {todo.description} />)}
//   </div>
// }


// problem statement
// write a component that takes a todo id as an input and fetches 
// the data for that todo from the given data endpoint
// and then renders it
// how would the dependency array change?


import { useState } from "react";
import { useEffect  } from "react";
import axios from 'axios';


function App(){
  return <div>
  <button>1</button>
  <button>2</button>
  <button>3</button>
  <button>4</button>
    <Todo id = {1} />
  </div>
}

function Todo({id}){
  
  const [todos, setTodos] = useState({});
   
  // your effect here
  useEffect(() =>{
    axios.get("https:/sum-server.100xdevs.com/todo?id=" +id)
    .then(response =>{
      setTodos(response.data.todo)
    })
  }, [])

  return <div>
    <h1>
      {todos.title}
    </h1>
    <h4>
      {todos.description}
    </h4>
  </div>
}

export default App;