import { Box, Button, Text } from "@chakra-ui/react";
import React from "react";
import axios from "axios";

import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useToast } from "@chakra-ui/react";

const QuizResult = (props)=>{
 
     const history = useHistory();
     const toast =useToast();
     const perScore = (props.score * 100) /props.totalScore;

     const user1 = localStorage.getItem("userInfo");
     const user = JSON.parse(user1);
     let rating  = user.currentRating;
     let batch ;
     let quizA = user.QuizAttempted;
     let email = user.email;

     const updation = async()=>{
          if(perScore >= 80 ){
            rating = rating +100;

          }
          else{
            rating = rating -100;
          }

          if(rating <=500){
            batch = "Nooby";
          }
          else if(rating >500 && rating <=1000){
            batch = "cadiet";
          }
          else if(rating >1000 && rating<= 1500){
            batch = "master Cadiet";
          }
          else if(rating >1500 && rating <2000){
             batch = "pro Cadiet";
          }
          else{
            batch = "pro master Cadiet";
          }

       quizA = quizA+1;

       const updateData  = {
            Batch : batch,
            currentRating :rating,
            QuizAttempted :quizA

       }
       
       console.log(perScore);
       console.log(batch);
       console.log(rating);

       try{
        const config = {
          header:{
              "Content-type":"application/json",
          },
        };
        const data = await axios.put(
          "/api/user/update",
          { email, updateData},
           config
          ); 
          console.log(data.data);
          toast({
              title:"Test Successful",
              status:"warning",
              duration:5000,
              isClosable:true,
              position:"bottom",
  
          });
          localStorage.setItem("userInfo",JSON.stringify(data));
  
        //   setLoading(false);
        //   history.push("/Home");
  
       }
       catch(error){
          toast({
              title:"error occured this is err",
              status:"error",
              duration:5000,
              isClosable:true,
              position:"bottom",
  
          });
        //   setLoading(false);
       }


     }

     const GoBack = ()=>{
        updation();

        
        localStorage.removeItem("QuizQuestion");
        history.push("/quiz");

     }
    
     
    return (
        <Box>
            <Text  marginTop={"1%"} color={"white"} fontSize={"3xl"}  borderBottomWidth={"1px"}> Your Score :{props.score}</Text>
            <Text marginTop={"1%"} color={"white"} fontSize={"3xl"}  borderBottomWidth={"1px"}> Total Score :{props.totalScore}</Text>
            
            
            




            <Button width={"40%"} borderWidth={"1px"} variant={"ghost"} marginTop={"1%"} marginBottom={"1%"} color={"white"} onClick={GoBack}> Go Back </Button>
        </Box>
    )

}

export default QuizResult;