import React from "react"
import "../css/nav.css"
export default function Nav() {
    return(
        <nav className="slide-in-blurred-top">
            <div className="nav-div">
                <img className="logo" src="https://footballnewsindia.in/wp-content/uploads/2013/12/International-Management-Group-300x168.jpg" alt="" />
            </div>
            <div className="nav-div">
                <ul>
                    <li>home</li>
                    <li>about</li>
                    <li><a href="#id"></a>contact</li>
                    <li>projects</li>
                </ul>
            </div>
                <img className="menu" src="https://cdn-icons-png.flaticon.com/128/2976/2976215.png" alt="" />
        </nav>
    )
}