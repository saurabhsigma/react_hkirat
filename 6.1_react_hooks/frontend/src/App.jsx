// //topics covered in 6.1 react hooks: 
// // react returns, re-rendering, key, wrapper components, useEffect, useMemo, useCallback, useRef, prop drilling

// import { useState } from "react";
// import React from "react";

// function App(){
//     const [firstTitle, setFirstTitle] = useState("my name is saurabh singh");

//     function changeTitle(){
//        setFirstTitle("My name is " + Math.random())
//     }

//     return (
//       <div>
//         <button onClick={changeTitle}>Click me to change the first title</button>
//         <Header title={firstTitle} />
//         <Header title="my name is raman singh" />
        

//       </div>
//     )
// }




// const Header = React.memo(function Header({title}){
//   return <div>
//      {title}
//   </div>
// })


// export default App;

// import { useState } from "react"
// let GLOBAL_ID = 4;
// function App() {
//   const [todos, setTodos] = useState([{
//     id: 1,
//     title: "Go to gym",
//     description: "Need to hit the gym from 7-9PM"
//   }, {
//     id: 2,
//     title: "Go to Clas",
//     description: "Need to go to the class from 4-7 PM"
//   }, {
//     id: 3,
//     title: "Eat foor",
//     description: "Need to eat food from 2-4 PM"
//   }])

//   function addTodo() {
//     setTodos([...todos, {
//       id: GLOBAL_ID++,
//       title: "new todo",
//       description: "new todo desc"
//     }])
//   }

//   return (
//     <div>
//       <button onClick={addTodo}>Add todo</button>
//       {todos.map((todo, index) => <Todo key={todo.id} title={todo.title} description={todo.description} />)}
//     </div>
//   )
// }

// function Todo({title, description}) {
//   return <div>
//     <h1>
//       {title}
//     </h1>
//     <h4>
//       {description}
//     </h4>
//   </div>
// }

// export default App  

// function App(){
//   return <div>
//     <CardWrapper innerComponent = {< TextComponent />} />
//     {/* <CardWrapper innerComponent = {< DemoText />} /> */}
//   </div>
// }

// function TextComponent(){
//   return <div>
//     Hello there
//   </div>
// }

// function DemoText(){
//   return <div>
//     <h1>Hello</h1>
//     <table >
//       <tr>
//       <th>hi</th>
//       <th>hello</th>
//       </tr>
//       <tr>
//         <td>namaste</td>
//         <td>hola</td>
//       </tr>


//     </table>
//   </div>
// }

// function CardWrapper({ innerComponent }) {
//    return <div style={{border: "2px solid black"}}>
//     { innerComponent }

//    </div>
// }

// export default App;



//cleaner syntax
function App(){
  return <div>
    <CardWrapper>
      hi there
    </CardWrapper>
  </div>
}

function CardWrapper({children}){
  return <div style={{border:"2px solid black", padding: 20}}>
      {children}
  </div>
}

export default App