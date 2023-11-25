import React from "react";

import Heading from "./Other/Heading";
import Footer from "./Other/Footer";
import { Box } from "@chakra-ui/react";



import Api from "./Other/Api";



const  Homepage = ()=>{
   
    return(
        <>

        <Box
         bgImage={"url('https://cdn.pixabay.com/photo/2016/07/02/12/21/eclipse-1492818_1280.jpg')"}
     bgPos={"center"}
     bgSize={"contain"}
     bgRepeat={"repeat"}
     
     w="100vw"
      h="100%">
                <div className="main" >
         <div className="heading"><Heading/></div>
         
         <div className="body">
        
         <Api/>


         </div>

         <div className="footer"><Footer/></div>
         </div>
         </Box>
        </>

     
        
    );
}

// export default App;
export default Homepage;
