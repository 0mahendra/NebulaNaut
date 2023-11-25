import React from "react";
import SpaceNewsArticles from "./SpaceNewsArticles";
import { Box, Flex } from "@chakra-ui/react";
import Heading from "../Other/Heading";

const MainSpaceNews = ()=>{
   return(
    <>
       
       <Box
           bgImage={"url('https://cdn.pixabay.com/photo/2016/07/02/12/21/eclipse-1492818_1280.jpg')"}
     bgPos={"center"}
     bgSize={"contain"}
     w="100vw"
     display={"flex"} flexDirection={"column"} justifyContent={"space-between"}>
         <Heading/>
        <SpaceNewsArticles/>
        </Box>
    </>
   )
}

export default MainSpaceNews;