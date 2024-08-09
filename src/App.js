
import React from "react";
import {BrowserRouter, Route, Routes,} from "react-router-dom";
import Home from "./screens/Home";


function App() {
  return (
    <>
    
      <BrowserRouter>
        <Routes>
         
          <Route path="/" element={<Home/>} />
      
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;



//get jobs admin me h location