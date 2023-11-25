import React from "react";

import Heading from "./Other/Heading";
import Footer from "./Other/Footer";
import { Button,Box, Center, useBreakpoint } from "@chakra-ui/react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import DailyQuotes from "./Other/DailyQuotes";
import Slider from "./Other/Slider";

const Home = ()=>{

    const isMobile  = useBreakpoint({ base: true, md: false });

    const history = useHistory();
   const HomePage = ()=>{
     history.push('/Homepage');
   }
    
    return (
    <> 

    <Box
     
     bgImage={"url('https://cdn.pixabay.com/photo/2016/07/02/12/21/eclipse-1492818_1280.jpg')"}
     bgPos={"center"}
     bgSize={"cover"}
     w="100vw"
      h="auto"
    
    >
    <Heading/>
    <Box display={"flex"} flexDirection={{ base: 'column', md: 'row' }} justifyContent={"space-between"}>
    <Box width={isMobile == "base"?("100%"):("50vw") }>
    <Center display={"flex"}
     flexDirection={"column"}
     alignContent={"space-around"}
     marginTop={"10%"}
     >
    <DailyQuotes/>
    <Button
    marginTop={"10%"}
    width={"auto"}
     onClick={HomePage}
     >
        Homepage
    </Button>
    </Center>
    
    </Box>
    <Box  >
      <Slider/>
    </Box>
    </Box>
    </Box>
    </>
    );
}
export default Home;