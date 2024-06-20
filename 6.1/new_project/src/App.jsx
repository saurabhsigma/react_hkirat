// create a react app that has a Header component that takes a title as a prop and renders it inside a div
// the top level App component renders 2 Headers

import { useState } from "react"


// todos 6.1

// react returns, re-rendering, key, wrapper components, useEffect, useMemo, useCallback, useRef
function App() {
  const [todos, setTodos]= useState([{
    id:1,
    title: "go to the gym",
    description: "go to the gym today"
  },{
    id:2,
    title: "eat food ",
    description: "eat food today"
  }, {
    id:3,
    title: "go to class",
    description: "go to the class today"
  }]);


  // function updateTitle(){
  //   setTitle("my name is " + Math.random());
  // }

  function addTodo(){
    setTodos([...todos, {
      id : 4,
      title: Math.random(),
      description: Math.random()
    }])
  }

  return (
   <>
   {/* <button onClick={updateTitle}>Update the title</button>
   <Header title={title}></Header>
   <Header title="saurabh2"></Header> */}
  <button onClick={addTodo}>Add a todo</button>
  {todos.map(todo => <Todo title={todo.title} description={todo.description} />)}
   </>
  )
}

// function Header({title}){
//   return <div>
//     {title}
//   </div>
// }

function Todo({title, description}) {

  return <div>
    <h1>
      {title}
    </h1>
    <h5>
      {description}
    </h5>
  </div>
}

export default App
