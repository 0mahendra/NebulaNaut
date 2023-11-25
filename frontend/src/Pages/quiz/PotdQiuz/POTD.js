import React from "react";
import Heading from "../../Other/Heading";
import { Box, Button, Center, Text, useBreakpoint } from "@chakra-ui/react";
// import {Cover} from "@chakra-ui/react"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { spaceTechQuestions } from "../qiuz1";

const POTD = ()=>{

  const isMobile = useBreakpoint({ base: true, md: false });
    const date = Date.now();
    const  history = useHistory();
     const mainquiz = ()=>{
        history.push("/Quiz1");
     }

     const handleClick = ( QuestionQuiz)=>{
   
       localStorage.setItem("QuizQuestion",JSON.stringify(QuestionQuiz));
             history.push("/Quiz1");
      }
    return (
        <>
          {isMobile =="base" ?(
          <Box
          bgImage={"url('https://cdn.pixabay.com/photo/2016/07/02/12/21/eclipse-1492818_1280.jpg')"}
          bgPos={"center"}
          bgSize={"cover"}
          //  bgRepeat={"repeat"}
          width={"100vw"}
          height={"100vh"}
          >

             <Heading/>
             <Center>
           <Box
           margin={"1%"}
            // width={"50vw"}
            height={"92vh"}
            borderWidth={"3px"}
            borderRadius={"lg"}
             >

             <Text marginTop={"1%"} color={"white"} fontSize={"30px"}> Quiz of the Day</Text>
             <Box display={"flex"} flexDirection={"row"} justifyContent={"space-between"}>
               <Text marginTop={"1%"} color={"white"} fontSize={"23px"} >quiz {date}</Text>
               <Button  marginTop={"1%"} color={"white"}  variant={"ghost"} fontSize={"2xl"} borderWidth={"lg"} onClick= { ()=>{handleClick(spaceTechQuestions)}} > Click Here </Button>
              
             </Box>
             <Text animation={"ease-in"} marginTop={"10%"} color={"white"} fontSize={"2xl"}> This Quiz contain question related to space technoloy around  
                   current space news problem .Basically it is mixture of all the question related to interstellar space ,planetry news ,solar system etc </Text>
           
           <Box  borderWidth={"2px"} display={"flex"}  marginTop={"2.7%"} borderRadius={"2px"}> 
             <Text fontSize={"3xl"} color={"white"}>Level = Easy </Text>
            </Box>

            </Box>

           </Center>

            
            </Box>
          ):(

            <Box  
         bgImage={"url('https://cdn.pixabay.com/photo/2016/07/02/12/21/eclipse-1492818_1280.jpg')"}
     bgPos={"center"}
     bgSize={"cover"}
    //  bgRepeat={"repeat"}
     width={"100vw"}
     height={"100vh"}
        >
           <Heading/>
           
           <Center>
           <Box
           margin={"1%"}
            width={"50vw"}
            height={"50vh"}
            borderWidth={"3px"}
            borderRadius={"lg"}
             >

             <Text marginTop={"1%"} color={"white"} fontSize={"3xl"}> Quiz of the Day</Text>
             <Box display={"flex"} flexDirection={"row"} justifyContent={"space-between"}>
               <Text marginTop={"1%"} color={"white"} fontSize={"3xl"} >quiz {date}</Text>
               <Button  marginTop={"1%"} color={"white"}  variant={"ghost"} fontSize={"3xl"} borderWidth={"lg"} onClick= { ()=>{handleClick(spaceTechQuestions)}} > Click Here </Button>
              
             </Box>
             <Text animation={"ease-in"} marginTop={"10%"} color={"white"} fontSize={"2xl"}> This Quiz contain question related to space technoloy around  
                   current space news problem .Basically it is mixture of all the question related to interstellar space ,planetry news ,solar system etc </Text>
           
           <Box  borderWidth={"2px"} display={"flex"} flexDirection={"row"} justifyContent={"center"} marginTop={"2.7%"} borderRadius={"2px"}> 
             <Text fontSize={"3xl"} color={"white"}>Level = Easy </Text>
            </Box>

            </Box>

           </Center>
           </Box>
          )}

        
       
        </>
    );
}
export default POTD;