import React from "react";

import {  Box, Text ,Button,  Input, useToast} from "@chakra-ui/react";
import  { useState } from "react";


import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";
import Headings from "./Other/Heading";
const ContactUs = ()=>{
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [data,setData] = useState("");
    const [loading,setLoading]  = useState(false);
    const user1 = localStorage.getItem("userInfo");
    const user = JSON.parse(user1);

    
    const history =useHistory();
    const toast = useToast();
 
      
     
   const handleSubmit = async(e)=>{
      e.preventDefault();

       if(user.name === "Guest"){
         history.push("/");


       }

      // const username  = name
      // console.log(email);
      // console.log(data);

     
      if(!data){
        toast({
            title:"please put some data!",
            status:"warning",
            duration:5000,
            isClosable:true,
            position:"top",

        });
        return;
      }
      setLoading(true);
       try{
       const config = {
         header:{
             "Content-type":"application/json",
         },
       };
       const username = `${name}${Date.now()}`;


       
      
           
      const {dataVal} = await axios.post(

         "/api/datavalue",
         {username,email,data},
          config
         ); 
      

         toast({
                   title:"Your problem is Successful Registered",
                   status:"warning",
                   duration:5000,
                   isClosable:true,
                   position:"bottom",
       
               });
               
              
               history.push("/");
      
      }
      catch(e){
         console.log(e);
      }
     
     
 
    
   }
    return <>
          
            <Box
              bgImage={"url('https://cdn.pixabay.com/photo/2016/07/02/12/21/eclipse-1492818_1280.jpg')"}
     bgPos={"center"}
     bgSize={"cover"}
     w="100vw"
      h="auto"
             
             >
             <Headings/>
            <Box w={"100%"}
               height={"94.5vh"} 
               marginTop={"3%"}
               
                display={"flex"}
                justifyContent={"center"}
                >
               <Box 
                  width={"800px"}
                  height={"95vh"}
                  borderWidth={"3.5px"}
                  borderRadius={"20px"}
                //    bgColor={"lightgray"}
                  display={"flex"}
                  flexDirection={"column"}
                  alignItems={"center"}
                  justifyContent={"space-evenly"}
                  >
                 <Text fontSize={"27px" } color={"white"}>Sorry for disappointment .we will solve your problem very early </Text>
                <form  onSubmit={handleSubmit}>
                   <Input type="Text" placeholder="write your name"   color={"white"}onChange={(e)=>setName(e.target.value)}/>
                   <Input type="Text" placeholder="write  your email id"  color={"white"} onChange={(e)=>setEmail(e.target.value)}/>
                   <Box 
                    marginTop={"5px"}>
                   <Input height= {"300px"} type="Text" color={"white"} placeholder="wrtie your complain here"  onChange={(e)=>setData(e.target.value)}/>
                   </Box>
                   <Button type="submit" width={"100%"} bgColor={"black"} color={"white"} 
                   borderRadius={"10px"}
                    > submit</Button>
                   
                   

                </form>
               </Box>

            </Box>

</Box>
    </>

}

export default ContactUs;