import React from 'react'
import logo from './logo.svg'
import './App.css'
import Header from './Components/Header/Header'
import Hero from './Components/Hero/Hero'
import Missions from './Components/Missions/Missions'

function App(): JSX.Element {
    return (
        <>
            <Header />
            <Hero />
            <Missions />
            {/* Body */}
            {/* Footer */}
        </>
    )
}

export default App
