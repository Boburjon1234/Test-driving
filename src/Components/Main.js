import React from 'react'
import Navbar from './Navbar'
import { Route, Routes } from 'react-router-dom'
import Newcards from './Newcards'

function Main() {
    return (
        <div className='Main'>
            <Navbar />
            <Routes>
                <Route path='/Newcards' element={<Newcards />} />
            </Routes>
        </div>
    )
}

export default Main