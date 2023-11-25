// import React from "react";
import React ,{useEffect, useState} from "react";
import Heading from "../../Other/Heading";
import {spaceTechQuestions ,marsQuiz1} from "../qiuz1";
import { Box, Button, Center, Text, useBreakpoint } from "@chakra-ui/react";
import {  Radio, RadioGroup, Stack } from "@chakra-ui/react";
import { useHistory, useLocation } from "react-router-dom/cjs/react-router-dom.min";

import { useToast } from "@chakra-ui/react";
import QuizResult from "./QuizResult";

const Quiz1= ()=>{

    const isMobile = useBreakpoint({ base: true, md: false });

    const [currentQuestion,setCurrentQuestion] = useState(0);
    const [score,setScore] = useState(0);
    const [clickedOption ,setClickedOption] = useState(0);
    const [showResult,setShowResult] = useState(false);
      var Questionquiz = localStorage.getItem("QuizQuestion");
      var QuestionQuiz = JSON.parse(Questionquiz);
    //    localStorage.removeItem("QuizQuestion");

      console.log(QuestionQuiz);

  
  

    



    const changeQuestion = ()=>{
        updateScore();
        console.log(currentQuestion);
        console.log(score);
        console.log(clickedOption);
        if(currentQuestion < QuestionQuiz.length -1){
        setCurrentQuestion(currentQuestion+1);
        setClickedOption(0);
        }else{

            setShowResult(true);

        }
    }

    const updateScore = ()=>{
        if(clickedOption === QuestionQuiz[currentQuestion].correctAnswer){
            setScore(score+1);
        }
    }

     
    
    return (
        <>

        {isMobile == "base"?(
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
           marginTop={"20%"}
            width={"100vw"}
            height={"auto"}
            borderWidth={"3px"}
            borderRadius={"lg"}

             >

             <Text marginTop={"1%"} color={"white"} fontSize={"2xl"}  borderBottomWidth={"1px"}> Quiz of the Day</Text>

   
           
            {showResult ?(
                <QuizResult score ={score} totalScore = {QuestionQuiz.length} />
            ):(
                <>
                <Box display={"flex"} flexDirection={"row"} justifyContent={"center"} fontSize={"2xl"} color={"white"}>
              <Text >{currentQuestion +1}</Text>
              <Text>{QuestionQuiz[currentQuestion].question} </Text>

              </Box>
          
             {QuestionQuiz[currentQuestion].options.map((options,i)=>{
                 return (
                    <Button 
                    width={"90%"}
                     borderWidth={"1px"}
                      variant={clickedOption == i+1 ? "solid":"ghost"}
                       marginTop={"1%"} 
                       marginBottom={"1%"} 
                       color={"white"} 
                       key={i} 
                       fontSize={"1xs"}
                       onClick={()=>setClickedOption(i+1)}
                       >{options}</Button>
                 );
             })}

             <Button width={"40%"} borderWidth={"1px"} variant={"ghost"} marginTop={"1%"} marginBottom={"1%"} color={"white"} onClick={changeQuestion}> Next</Button>
             </>
            ) }
             
             {/* <Text    margin={"2%"}  fontSize={"3xl"} color={"white"}>Attempted qeustion = xx out of = xx </Text> */}
             
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
            height={"auto"}
            borderWidth={"3px"}
            borderRadius={"lg"}

             >

             <Text marginTop={"1%"} color={"white"} fontSize={"3xl"}  borderBottomWidth={"1px"}> Quiz of the Day</Text>

   
           
            {showResult ?(
                <QuizResult score ={score} totalScore = {QuestionQuiz.length} />
            ):(
                <>
                <Box display={"flex"} flexDirection={"row"} justifyContent={"center"} fontSize={"4xl"} color={"white"}>
              <Text >{currentQuestion +1}</Text>
              <Text>{QuestionQuiz[currentQuestion].question} </Text>

              </Box>
          
             {QuestionQuiz[currentQuestion].options.map((options,i)=>{
                 return (
                    <Button 
                    width={"70%"}
                     borderWidth={"1px"}
                      variant={clickedOption == i+1 ? "solid":"ghost"}
                       marginTop={"1%"} 
                       marginBottom={"1%"} 
                       color={"white"} 
                       key={i} 
                       onClick={()=>setClickedOption(i+1)}
                       >{options}</Button>
                 );
             })}

             <Button width={"40%"} borderWidth={"1px"} variant={"ghost"} marginTop={"1%"} marginBottom={"1%"} color={"white"} onClick={changeQuestion}> Next</Button>
             </>
            ) }
             
             {/* <Text    margin={"2%"}  fontSize={"3xl"} color={"white"}>Attempted qeustion = xx out of = xx </Text> */}
             
            </Box>

           </Center>
           </Box>

        )}
       
        </>
    );
}
export default Quiz1;