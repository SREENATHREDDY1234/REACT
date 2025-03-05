import React from "react"
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Navbar from "./components/Navbar"
import {Routes,Route} from "react-router-dom"

function App(){
    return(
        <div className="App">
            <Navbar />
            <Routes>
                <Route path ="/" element = {<Home />}/>
                <Route path ="/about" element = {<About />}/>
                <Route path ="/contact" element = {<Contact />}/>
            </Routes>
            <div>App component</div>
        </div>
    )
}

export default App;
