import React from 'react'
import {MeshDistortMaterial, OrbitControls, Sphere, Stage} from '@react-three/drei'
import {Canvas} from '@react-three/fiber'
import styled from 'styled-components'
import NavBar from './NavBar';
import Survilence from './Survilence'
import Robot from './Robot'
import Room from './Room'
import Tablet from './Tablet'
function Hero() {
    const Section= styled.div`
    
    scroll-snap-align:center;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
    gap:20px;
    flex-direction:column;
    position:relative;
    @media only screen and(max-width:768px){
      {
        width:100%;
        height:200vh;
      }
    }
   `;
   const Container=styled.div`
   height:100vh;
   scroll-snap-align:center;
   width:900px;
   display:flex;
   justify-content:center;
   position:absolute;
   @media only screen and (max-width:768px){
    {
      width:100%;
        flex-direction:column;
        align-items:center;
        justify-content:center;
    }
   }
   `;
   const Left=styled.div` 
   gap:10px;
   flex-direction:column;
   justify-content:center;
   display:flex;
   flex:5;
   @media only screen and(max-width:768px){
    {
      align-items:center;
    }
   }
   `;
   const Title=styled.h1` 

   @media only screen and(max-width:768px){
    {
      text-align:center;
    }
   }
   `;
   const WeDo=styled.div`
   display:flex;
   align-items:center;
   gap:20px;
   
   `;
   const Img=styled.img` 
   height:15px;
   `;
   const SubTitle=styled.h4`
   gap:10;
 
   font-weight:500;
   @media only screen and(max-width:768px){
    {
      text-align:center;
    }
   }
   `;
   const Desc=styled.p` 
   @media only screen and(max-width:768px){
    {
      text-align:center;
    }
   }
   `;
   const Button=styled.button` 
   width:150px;
   height:50px;
   background-color:black;
   color:white;
   border-radius:10px;
   cursor:pointer;
   border:2px solid #d4b013;

   `;

   const Right=styled.div`
   position:relative;
   flex:4;
   align-items:center;
   justify-content:center;
   
   @media only screen and (max-width: 769px){
    {
      display:none;
    }
  }
   `;
   const ImG=styled.img`
   
   width:300px;
   top:0;
   bottom:0;
   right:0;
   left:0;
   margin:auto;
   position:absolute;
   animation: animate 2s infinite ease  alternate;
   @keyframes animate{
    to{
        transform:translatey(20px);
    }
   }
   @media only screen and(max-width:768px){
    {
      display:none;
    }
   }
   `;
   
  return (
    <Section>
      <NavBar/>
    <Container>
             <Left>
          <Title>Reduce your AR&VR </Title>
          <Title>content cost by </Title>
          <Title>10X</Title>
          
            
            <SubTitle>Dynamically create Immersive content using with No Code</SubTitle>
            <SubTitle>Get to view your immersive content on Web/VR/PC</SubTitle>
            <SubTitle>Embed your immersive content on you website</SubTitle>
          <WeDo>
             <Button>Preview-Demo</Button>
             <Button>Book-Demo</Button>
             </WeDo>
        </Left> 
        <Right>
        <Canvas camera={{fov:50}} >
        <Stage environment="city" intensity={0.1} >
          <Tablet/>
        </Stage>
        <OrbitControls enableZoom={false}  />
      </Canvas>
          </Right>
  </Container>
  </Section>
  )
}

export default Hero
