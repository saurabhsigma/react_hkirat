import { useState } from 'react'
// import Hello from './Hello'
// import Navbar from './Nav'
// import './App. css'

// function App(){
//     const [headerTitle, setHeaderTitle] = useState("original header");

//     function NameChange(){
//       const newTitle = `Random title ${Math.random()}`;
//       setHeaderTitle(newTitle);
//     }
    
//     return <>
       
//        {/* < Navbar /> */}
//        {/* < Hello /> */}

//        <button onClick={NameChange}>Click me to change the title.</button>

//        <Header title={headerTitle}/>
//        <Header title={"header 2"} />
//     </>
// }

// function Header({title}){
//   return <>
//       <h2>This is the {title}</h2>
//   </>
// }



// export default App;


// import { useState } from 'react'
// // import Hello from './Hello'
// // import Navbar from './Nav'
// import './App.css'

// function App(){
//     return <>
       
//        {/* < Navbar /> */}
//        {/* < Hello /> */}

//        <Header title={"Header 1"}/>
//        <Header title={"header 2"} />
//     </>
// }

// function Header(prop){
//   return <>
//       <h2>This is the {prop.title}</h2>
//   </>
// }
// export default App; 

// let counter = 4;

// function App(){
//   const [todos,setTodos] = useState([{
//     id: 1,
//     title: "go to gym",
//     description: "go to the gym in the morning"
//   },{
//     id: 2,
//     title: "take shower",
//     description: "take shower in the morning"
//   },{
//     id: 3,
//     title: "finish homework",
//     description: "finish homework before going to the college"
//   }])

//   function addTodo(){
//     setTodos([...todos,{
//       id: counter++,
//       title: (Math.random()),
//       description: (Math.random())
//     }])
//   }

//   return (
//     <>
//       <button onClick={addTodo}>Add a Todo</button>
//       {todos.map(todo => <Todo key={todo.id} title={todo.title} description = {todo.description} />)}
//     </>
//   )
// }

// function Todo({title, description}){
//   return <div>
//     <h1>
//       {title}
//     </h1>
//     <h5>
//       {description}
//     </h5>
//   </div>
// }

// export default App;



//  wrapper components

function App(){
  return <div>
  <CardWrapper innnerComponent = {<TextComponent />} />
  </div>
}

function CardWrapper({innnerComponent}){

  //  create a div which has a border (hint: the way to create a border is border: 2px solid black)
  // and inside the div, renders the prop
    return <div style={{border: "2px solid black"} }>
          {innnerComponent}
      </div>
}

function TextComponent() {
  return <div>
    <h2> hi there!</h2>
  </div>
}



export default App;