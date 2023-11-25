
import React, { useEffect } from "react";
import {
    Container,
    Box,
    Text ,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
    useHighlight} from '@chakra-ui/react';

import Signup from "../signUp";
import Login from "../Login";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import "./Home.css";
// import { urlencoded } from "express";
const Homepage = ()=>{

  const history = useHistory();
  // useEffect (()=>{
  //   const user = JSON.parse(localStorage.getItem("userInfo"));
  //   if(user) history.push("/Home");
  // },[history]);
 
    return <Box 
    
    
    
     bgImage={"url('https://cdn.pixabay.com/photo/2016/07/02/12/21/eclipse-1492818_1280.jpg')"}
     bgPos={"center"}
     bgSize={"cover"}
     w="100vw"
      h="100vh"
      d="flex">
    <Container maxW={"xl"} centerContent>
    <Box 
    d="flex"
    justifyContent="center"
     p={3}
     
     w="100%"
     m="40px 0 15px 0"
    
     >
        <Text fontSize={"4xl"} fontFamily={"Work sans"} color="white">NebulaNaut -By Tiny coder</Text>
    </Box>
    <Box  color={"white"} w ="100%" p={4} >
    <Tabs variant='soft-rounded' colorScheme='green'>
  <TabList>
    <Tab width={"50%"}>login </Tab>
    <Tab width={"50%"}>Sign Up</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
      <Login></Login>
    </TabPanel>
    <TabPanel>
      <Signup></Signup>
    </TabPanel>
  </TabPanels>
</Tabs>
    </Box>
    </Container>
      
    </Box>

};
export default Homepage;

