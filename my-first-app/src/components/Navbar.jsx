import React from "react"
import "./Navbar.css"
import {Link} from "react-router-dom"
function Navbar(){
    return(
        <div className="navbar">
            <div className="left">
                <ul>
                    <li><Link to="/" >Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;