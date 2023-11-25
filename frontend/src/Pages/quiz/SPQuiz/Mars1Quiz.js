import { Box, Button, Center, Text } from "@chakra-ui/react";
import React from "react";
import Headings from "../../Other/Heading";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { marsQuiz1,marsQuiz2,marsQuiz3 } from "./marsQuizquestions";
const Mars1Quiz = ()=>{

    const history = useHistory();

    
    const handleClick = ( QuestionQuiz)=>{

      localStorage.setItem("QuizQuestion",JSON.stringify(QuestionQuiz));

          
            history.push("/Quiz1");
                

     }

    return(
        <>


        <Box
     bgImage={"url('https://cdn.pixabay.com/photo/2016/07/02/12/21/eclipse-1492818_1280.jpg')"}
     bgPos={"center"}
     bgSize={"cover"}
     w="100vw"
      h="100vh"
      >
      <Headings/>
      <Center>
      <Text fontSize={"3xl"} color={"white"}> Current  availabile Quiz on Mars</Text>
      <Box marginTop={"10%"} display={"flex"} flexDirection={"column"} justifyContent={"space-around"}>
                <Button fontSize={"3xl"}  marginTop ={"10%"}variant={"ghost"} borderWidth={"1px"} color={"white"} onClick= { ()=>{handleClick(marsQuiz1)}}>Quiz 1</Button>
                <Button fontSize={"3xl"}   marginTop ={"10%"} variant={"ghost"} borderWidth={"1px"} color={"white"} onClick= { ()=>{handleClick(marsQuiz2)}} >Quiz 2</Button>
                <Button fontSize={"3xl"}   marginTop ={"10%"} variant={"ghost"} borderWidth={"1px"} color={"white"} onClick= { ()=>{handleClick(marsQuiz3)}} >IQuiz 3</Button>
               

              </Box>
      </Center>


      </Box> 
        </>
    )
}
export default Mars1Quiz;