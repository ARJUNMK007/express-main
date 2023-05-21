import React  from 'react'
import styled from 'styled-components';
import { useState } from 'react';
import WebDevolepment from './WebDevolepment';
import UiDesign from './UiDesign';
import LogoCreation from './LogoCreation';
import ThreeDdesign from './ThreeDdesign';

function Work() {

  const data=["WEB DEVOLEPMENT",
  "UI DESIGN",
  "LOGO CREATION",
"3D WEB DESIGN"];

    const Section= styled.div`
    height:100vh;
    scroll-snap-align:center;
    display:flex;
    justify-center:center;
   `;
   const Container= styled.div`
    width:1000px;
    display:flex;
    justify-center:space-between;
    margin:auto;
    height:100vh;
   `;
   const List= styled.ul`
   list-style:none;
   display:flex;
   flex-direction:column;
   gap:60px;
   
  
   
   `;
   const ListItem= styled.li`
   font-size:40px;
   font-weight:bold;
   color:transparent;
   cursor:pointer;
   -webkit-text-stroke:1px white;
   position: relative;

   ::after{
    content:"${(props)=>props.text}";
    top:0;
    left:0;
   position:absolute;
  
   }
   &:hover{
    ::after{
      color:#e607cc;
    }
   }
   `;
   const Left= styled.div`
   flex:1;
   display:flex;
   align-items:center;
   justify-content:center;
   
   `;
   const Right= styled.div`
   flex:1;
   `;
 const [work, setwork] = useState("WEB DEVOLEPMENT")
  return (
    <Section>
     <Container>
      <Left>
        <List>
          {
            data.map((item)=>(
            <ListItem key={item} text={item}  onClick={()=>setwork(item)}>{item}</ListItem>))
            }
           
        </List>
      </Left>
      <Right>
       {work==="WEB DEVOLEPMENT"?(<WebDevolepment/>):work==="UI DESIGN"?
       (<UiDesign/>):work==="LOGO CREATION"?(<LogoCreation/>):(<ThreeDdesign/>)}
      </Right>
     </Container>
    </Section>
  )
}

export default Work
