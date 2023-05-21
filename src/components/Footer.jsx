import React from 'react'
import styled from 'styled-components';

function Footer() {
   
    const Section= styled.div`
    height:10vh;
    scroll-snap-align:center;
    display:flex;
    justify-content:center;
    

   `;
   const Container= styled.div`
   display:flex;
   jusify-content:space-between;
   align-items:center;
   gap:50px;

  `;
  const Child= styled.div`
  flex:1;
  width:600px;
  height:100%;
  gap:10px;
  flex-direction:column;
  justify-content:center;
  display:flex;
  margin:auto;
  align-items:center;
 `;
 const Title=styled.h3`
   font-weight:100px;
   font-family:"Times New Roman", Times, serif;
 `;





  return (
    <Section>
       <Container>
      <Child>
        <Title>copyright@2023..Created by Arjun MK</Title>
      </Child>
       </Container>
    </Section>
  )
}

export default Footer
