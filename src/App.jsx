import React from "react"
import styled from 'styled-components'
import Contact from "./components/Contact"
import Hero from "./components/Hero"
import Who from "./components/Who"
import Work from "./components/Work"
import './App.css'
import Footer from "./components/Footer"
import { Canvas } from "@react-three/fiber"
import NavBar from './components/NavBar'


function App() {
  const Container = styled.div`
 height:100vh;
 scroll-snap-type:x mandatory;
 scroll-behaviour:smooth;
 overflow-y:auto;
 color:white;
 background: url("./src/pix.jpg");
 &::-webkit-scrollbar{
  display:none;
 }
`;

   
  return (
    <div className="Container">
        <Hero/>
        {/* <Who/> */}
      {/* <Work/> */}
     {/* <Contact/> 
  <Footer/> */}
    </div>
  )
}

export default App
