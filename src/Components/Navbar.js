import React from 'react'
import "./Navbar.css"
import logo from "../assets/download.jpeg"
import search from "../assets/search (1).png"

function Navbar() {
    return (
        <div className='Navbar'>
            <div className="texts">
                <img src={logo} alt="..." />
                <button>New Cars</button>
                <button>Electrified</button>
                <button>Business</button>
                <button>Owners</button>
                <button>Discover Lexus</button>
                <button>Lexus X ATP Tour</button>
            </div>
            <div className="search-panel">
                <img src={search} alt="..." />
                <input type="text" name='text' placeholder='Search' />
            </div>

        </div>
    )
}

export default Navbar