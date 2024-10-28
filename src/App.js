import React from 'react'
import Header from './components/Header'
import Body from './components/Body'
import MyInfo from './components/MyInfo'
import Footer from './components/Footer'
import "./style.css"

function App() 
{
    return(
        <div className="container">
            <Header />
            <Body />
            <MyInfo />
            <Footer />
        </div>
    )
}

export default App;