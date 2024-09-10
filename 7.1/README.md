# Routing, prop drilling, context API


<!-- react rounter dom is the library we gonna use
 to do routing in our multipage applications -->



# imp 1
<!-- import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";  // Adjust the import path based on where your Dashboard component is located
import Landing from "./Landing";      // Adjust the import path based on where your Landing component is located

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/" element={<Landing />} />
            </Routes>
        </BrowserRouter>
    );
} -->
<!-- export default App; -->

# imp 2

<!-- <button onClick={()=>{
    window.location.href = "/landing";
}}>Landing </button> -->

<!-- but this reload the page, so its not the write way of client side routing -->

<!-- the right way of doing client side routing is:  -->