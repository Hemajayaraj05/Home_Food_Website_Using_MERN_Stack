import React from "react";
import Navbar from "../components/Navbar";
import Content from "../components/Content";
import About from "../components/About";
import Contact from "../components/Contact";

function Home(){
    return <section className="flex flex-col">
        <Navbar/>
        <Content/>
        <About/>
        <Contact/>
    </section>
    
}
export default Home;