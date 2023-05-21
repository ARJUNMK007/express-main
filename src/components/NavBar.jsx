import { Avatar } from '@mui/material';
import React from 'react'
import styled from 'styled-components';

const NavBar = () => {
    const Navbar= styled.div`
    width: 100%;
     display:flex;
     background-color:#333029;
     
     @media and screen only (max-width: 768px) {
       {
        width:100%;
       }
    }
   `;
   const Containers=styled.div`
   width:100%;
   display:flex;
   
   align-items:center;
   padding:10px 0px; 
  
   @media only screen and (max-width: 768px) {
     {
      width:100%;
      
     }
    }

  
   `;
 
   const Links=styled.div`
   display:flex;
   gap:280px;
   align-items:center;
   
 
    `;
   const Logo= styled.img`
   height:50px;

 `;
 const List= styled.ul`
display:flex;
gap:80px;
list-style:none;
cursor:pointer;
padding:20px;
@media only screen and (max-width: 769px){
  {
    display:none;
  }
}
`;
const Listitem= styled.li`

`;
const Icons=styled.div`
display:flex;
   gap:20px;
   cursor:pointer;
   padding:10px 0px;
   
 @media only screen and(max-width:768px){
  {
  width:100%;
  }
 }
`;
const Icon=styled.img`
width:20px;
height:20px;
padding:10px 0px;

`;
const Button=styled.button`
width:100px;
height:30px;
margin-left:140px;
background-color:#ffa600;
color:white;
border-radius:20px;
cursor:pointer;
border:none;
margin-top:5px;
`;
  return (
    <Navbar>
        <Containers>
        <Links>
      <Logo src='' alt='express-vr'/>
      <List>
        <Listitem>Home</Listitem>
        <Listitem>Product</Listitem>
        <Listitem>Pricing</Listitem>
        <Listitem>AboutUs</Listitem>
        <Listitem>Support&Service</Listitem>
      </List>
      </Links>
      <Icons>
        <Button>Free-Trial</Button>
        <Avatar></Avatar>
      </Icons>
      </Containers>
    </Navbar>
  )
}

export default NavBar
