import React, { useRef ,useState} from 'react'
import styled from 'styled-components';
import Map from './Map';
import emailjs from '@emailjs/browser';
import Box from '@mui/material/Box'
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailIcon from '@mui/icons-material/Mail';
import CallIcon from '@mui/icons-material/Call';



function Contact() {
  const Number=7907733627;
  let Email="arjunkasthoori@gmail.com";
    const Section= styled.div`
    height:100vh;
    scroll-snap-align:center;
   `;
   const Container= styled.div`
  width:100%;
  height:100%;
  display:flex;
  justify-content:space-between;
  gap:30px;
  @media only screen and(max-width:768px){
    {
      padding:10px;
      flex-direction:column;
    }
  }
  
  `;
  const Right= styled.div`
 width:100%;
 height:100%;
 flex:2;
 align-items:center;
 justify-content:flex-end;
 padding:10px;
 @media only screen and(max-width:768px){
  {
    display:none;
  }
 }
 `;
 const Form=styled.form`
   display:flex;
   flex-direction:column;
   gap:30px;
   width:400px;
   @media only screen and(max-width:768px){
    {
      width:200px;
    }
   }
 `;
 const Title=styled.h1`
 font-weight:200;
 `;
 const Titles=styled.h3`
 font-weight:200;
 `;

 const Input=styled.input`
   padding:20px;
   border-radius:9px;
   background-color:#dbd5d8;
  `;
 const TextArea=styled.textarea`
 padding:20px;
 border-radius:9px;
 background-color:#dbd5d8;
 `;
 const Button=styled.button`
 background-color:#eb3492;
 color:white;
 border:none;
 cursor:pointer;
 padding:20px;
 border-radius:9px;
 `;
 const Left= styled.div`
 flex:1;
 display:flex;
 align-items:center;
 justify-content:flex-end;

 
`;


const ref=useRef()

const [success, setsuccess] = useState(null)
const handlClick=(e)=>{
  e.preventDefault();
  emailjs.sendForm('service_pbizdtg', 'template_t37xfwu', ref.current, '3Yng2llSuF7rRX3uG')
  .then((result) => {
      console.log(result.text);
      setsuccess(true)
  }, (error) => {
      console.log(error.text);
      setsuccess(true)
  });
};
  return (
    <Section>
      <Container>
        <Left>
        <Form ref={ref} onSubmit={handlClick}>
          <Title>Get-in-Touch</Title>
          <Input placeholder='NAME' name="name"/>
          <Input placeholder='EMAIL' name="email"/>
          <TextArea placeholder='WHATS ON YOUR MIND' rows={10} name="message"/>
          <Button  type='submit' >SUBMIT</Button>
          {success && "i will get back to you soon"}
          </Form>
        </Left>
        <Right>
         <Map/>
          <Box flex={1} sx={{backgroundColor:""}}>
   
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                 <MailIcon sx={{color:"white"}}/>
                </ListItemIcon>
                <ListItemText primary={Email}/>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                <CallIcon sx={{color:"white"}}/>
                </ListItemIcon>
                <ListItemText primary={Number}/>
              </ListItemButton>
            </ListItem>
          </List>
         </Box>
         <Box flex={1}  sx={{backgroundColor:""}}>
          <LinkedInIcon  sx={{width:40,height:40,padding:2,cursor:"pointer"}}/>
          <FacebookIcon sx={{width:40,height:40,padding:2,cursor:"pointer"}}/>
          <InstagramIcon sx={{width:40,height:40,padding:2,cursor:"pointer"}}/>
         </Box>
        </Right>
      </Container>
    </Section>
  )
}

export default Contact
