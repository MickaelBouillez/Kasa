import React from "react"
import Navbar from "./components/Navbar/Navbar.jsx"
import Banner from "./components/Banner/Banner.jsx"
import Card from "./components/Card/Card.jsx"
import Main from "./components/Main/Main.jsx"
import Footer from "./components/Footer/Footer.jsx"
import "./style/App.css"

function App() {

  return (
    <div>
      <Navbar />
      <Main>
        <Banner />
        <Card />
      </Main>
      <Footer/>
    </div>
  )
}

export default App
