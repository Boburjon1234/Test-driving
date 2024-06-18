import React from 'react'
import "./Navbar.css"
import logo from "../assets/download.jpeg"
import search from "../assets/search (1).png"
import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <div className='Navbar'>
            <div className="texts">
                <img src={logo} alt="..." />

                <button><NavLink to='/Newcards'>New Cards</NavLink></button>
                <button><NavLink to='Electrified'>Electrified</NavLink> </button>
                <button><NavLink to='Business'>Business</NavLink></button>
                <button><NavLink to='Owners'>Owners</NavLink></button>
                <button><NavLink to='Discover Lexus'>Discover Lexus</NavLink></button>
                <button><NavLink to='Lexus X ATP Tour'>Lexus X ATP Tour</NavLink></button>
            </div>
            <div className="search-panel">
                <img src={search} alt="..." />
                <input type="text" name='text' placeholder='Search' />
            </div>

        </div>
    )
}

export default Navbar