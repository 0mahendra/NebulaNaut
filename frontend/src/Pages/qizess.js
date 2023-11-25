import React from "react";
import {Box,Button,Center,Text, useBreakpoint} from "@chakra-ui/react"
import Heading from "./Other/Heading";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Quiz = ()=>{

    const history = useHistory();
    // var history = useHistory();

    const isMobile = useBreakpoint({ base: true, md: false });
    console.log(isMobile);
    const  quiz1 = ()=>{
      history.push("/POTD");
    }


    const marsQuiz = ()=>{
      history.push("/marsQuiz");
    }
    const exoQuiz = ()=>{
      history.push("/marsQuiz");
    }
    const issQuiz = ()=>{
      history.push("/marsQuiz");
    }
    const planetaryQuiz = ()=>{
      history.push("/planetryQuiz");
    }
    return (
        <>

         {isMobile == "base" ?(
          <Box
           bgImage={"url('https://cdn.pixabay.com/photo/2016/07/02/12/21/eclipse-1492818_1280.jpg')"}
     bgPos={"center"}
     bgSize={"cover"}
     bgRepeat={"repeat"}
     
     w="100vw"
      h="100vh"
          >
          <Heading/>
          <Box 
           marginTop={"7%"}> 
             <Text fontSize={"2xl"} color={"white"} margin={"2%"}>Welcome to The QUIZ Section ||</Text>
             <Text fontSize={"2xl"} color={"white"} borderTopWidth={"1px"} borderRadius={"lg"}> You will get your perforance batch as per as your perforance in quiz</Text>
             <Center marginTop={"10%"}>
              <Button  onClick={quiz1} fontSize={"3xl"} variant={"ghost"} borderWidth={"1px"} color={"white"}>Quiz of the day</Button>
              </Center>
              <Box marginTop={"10%"} display={"flex"} flexDirection={"column"} justifyContent={"space-around"}>
                <Button fontSize={"3xl"}  marginTop ={"10%"}variant={"ghost"} borderWidth={"1px"} color={"white"} onClick={planetaryQuiz} >planetary quiz</Button>
                <Button fontSize={"3xl"}   marginTop ={"10%"} variant={"ghost"} borderWidth={"1px"} color={"white"}  onClick={marsQuiz} >mar's quiz</Button>
                <Button fontSize={"3xl"}   marginTop ={"10%"} variant={"ghost"} borderWidth={"1px"} color={"white"} onClick={issQuiz} >ISS quiz</Button>
                <Button fontSize={"3xl"}   marginTop ={"10%"} variant={"ghost"} borderWidth={"1px"} color={"white"} onClick={exoQuiz} >Exo planetary Quiz</Button>

              </Box>
              
           </Box>
          </Box>

         ):(
          <Box
           bgImage={"url('https://cdn.pixabay.com/photo/2016/07/02/12/21/eclipse-1492818_1280.jpg')"}
     bgPos={"center"}
     bgSize={"cover"}
     bgRepeat={"repeat"}
     
     w="100vw"
      h="100vh"
          >
          <Heading/>
          <Box 
           marginTop={"7%"}> 
             <Text fontSize={"5xl"} color={"white"}>Welcome to The Quiz Section ||</Text>
             <Text fontSize={"3xl"} color={"white"}> You will get your perforance batch as per as your perforance in quiz</Text>

              <Box marginTop={"15%"} display={"flex"} flexDirection={"row"} justifyContent={"space-around"}>
                <Button fontSize={"3xl"} variant={"ghost"} borderWidth={"1px"} color={"white"} onClick={planetaryQuiz} >planetary quiz</Button>
                <Button fontSize={"3xl"} variant={"ghost"} borderWidth={"1px"} color={"white"} onClick={marsQuiz}>mar's quiz</Button>
                <Button fontSize={"3xl"} variant={"ghost"} borderWidth={"1px"} color={"white"} onClick={issQuiz}>ISS quiz</Button>
                <Button fontSize={"3xl"} variant={"ghost"} borderWidth={"1px"} color={"white"} onClick={exoQuiz}>Exo planetary Quiz</Button>

              </Box>
              <Center marginTop={"3%"}>
              <Button  onClick={quiz1} fontSize={"3xl"} variant={"ghost"} borderWidth={"1px"} color={"white"}>Quiz of the day</Button>
              </Center>
           </Box>
          </Box>
         )}
         
        </>
    );
}

export default Quiz;