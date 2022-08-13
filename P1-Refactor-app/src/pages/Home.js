import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Summary from "../components/Summary";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home(){
    return(
        <>
        <Navbar />
        <Hero />
        <About /> 
        <Summary />
        <Projects />
        <Contact />
        <Footer />
        </>
    )
}