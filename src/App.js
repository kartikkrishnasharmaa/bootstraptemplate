import React from "react";
import Navbar from "./Navbar";
import Intro from "./Intro";
import Header from "./Header";
import Service from "./Ser"
import Project from "./Project";
import Contact from "./Contact";
import Footer from "./Footer";

const App=()=>{
    return(
        <div>
            <Navbar/>
            <Header/>
            <Intro/>
           <Service/>
           <Project/>
           <Contact/>
           <Footer/>
        </div>
    )
};
export default App;