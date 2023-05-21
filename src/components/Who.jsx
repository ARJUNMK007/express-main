import React from 'react'
import {OrbitControls} from '@react-three/drei'
import {Canvas} from '@react-three/fiber'
import styled from 'styled-components'
import Cube from './Cube'


function Who() {
    const Sections= styled.div`
    height:100vh;
    width:100%;
    scroll-snap-align:center;
    display:flex;
    justify-content:center;

   `;
   const Container=styled.div`
   height:100vh;
   scroll-snap-align:center;
   display:flex;
   justify-content:space-between;
   `;
   const Left=styled.div` 
   flex:1;
 
   `;
   const Title=styled.h1` 
   `;
   const WeDo=styled.div`
   display:flex;
   align-items:center
   
   `;
   const Img=styled.img` 
   height:5px;
   `;
   const SubTitle=styled.h3`
   gap:10;
   color:#eb34cc;
   font-weight:500;
   `;
   const Desc=styled.p` 
   
   `;
   const Button=styled.button` 
   width:100px;
   height:20px;
   background-color:#eb34cc;
   color:white;
   border-radius:6px;
   cursor:pointer;
   border:none;

   `;

   const Right=styled.div`
   flex:1;
   gap:10px;
   flex-direction:column;
   justify-content:center;
   display:flex;
   `;
   
   
  return (
    <Sections>
    <Container>
        <Left>
        <Canvas camera={{fov:25}}>
        <OrbitControls enableZoom={false} autoRotate />
        <ambientLight intensity={1}/>
        <directionalLight position={[3,2,1]}/>
       <Cube/>
       </Canvas>
        </Left>
        <Right>
        <Title>Hi Iam ARJUN MK</Title>
          <WeDo>
            <Img src='./images/line.png'/>
            <SubTitle>A Passionate React Js Devoleper</SubTitle>
          </WeDo>
          <Desc>publishing and graphic design, Lorem ipsum is a 
               placeholder text commonly used
               to demonstrate the visual form of a document or
               a typeface without relying on meaningful content.</Desc>
             <Button>Learn More</Button>
        </Right>
    </Container>
  </Sections>
  )
}

export default Who
