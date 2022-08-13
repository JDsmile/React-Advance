import React from "react";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio"
import Contact from "./pages/Contact";
import { Route, Routes } from "react-router-dom";





export default function app(){
    return(
        <>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/portfolio' element={<Portfolio />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
     
        </Routes>

        </>
    )
}