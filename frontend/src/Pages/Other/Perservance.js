import React from "react";
import { Box, Button, Center, Image, Text } from "@chakra-ui/react";
import Heading from "./Heading";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Perservnace = ()=>{

    const history = useHistory();


    const RoverHistory = ()=>{
        history.push("/RoverHistory");
    }
    const RoverArchives = ()=>{
        history.push("/RoverArchives");
    }
    const  RoverImg = ()=>{
        history.push("/RoverImg");
    }
    return (
        <>
        <Box
         bgImage={"url('https://cdn.pixabay.com/photo/2016/07/02/12/21/eclipse-1492818_1280.jpg')"}
     bgPos={"center"}
     bgSize={"contain"}
        >
        <Heading/>
        {/* <Box 
        display={"flex"}
        // flexDirection={"row"}
        justifyContent={"row"} 
        // position={"fixed"}
        >
        <Box width={"70%"} marginRight={"0px"} >
 <Text fontSize={"2xl"} textAlign={"left"} color={"white"}> NASA's Mars Perseverance rover mission to the Red Planet</Text>
                <img src="https://cdn.mos.cms.futurecdn.net/sZT7omw34h7RShHAPSdAtK.jpg"  width={"100%"} />
                
                
<Text fontSize={"2xl"} textAlign={"left"} color={"white"}>A year in the life of NASA's Mars Perseverance rover</Text>
                <img src="https://www.cnet.com/a/img/resize/ef259c4703baf72d39ced156e33d1fa4f6b02cc2/hub/2021/07/17/4754e438-2fa2-4098-b03d-dd40b5359125/yt-mars-2.jpg?auto=webp&fit=cover&height=482&width=856" width={"100%"} />
                
<Text fontSize={"2xl"} textAlign={"left"} color={"white"}> NASA’s Mars rover Landing</Text>
                <img src="https://cdn-sfo.socy.cloud/PRAS/v1/_20/202206/upload/generado_1655828887_qscsdllz_h_nf7kml_7q1420dl0cv6.jpg"  width={"100%"} />
               
                

            </Box>
            <Box display={"flex"}
              flexDirection={"column"}
               position={"fixed"}
             
              >
              
            
            </Box>

            </Box> */}

            <Box display={"flex"}
                 justifyContent={"row"}>
            <Box marginTop={"3%"} marginLeft={"2%"} width={"70vw"}>
              
                <img src={"https://www.issnationallab.org/wp-content/uploads/2023/05/launch-complex-ksc.jpg"} width={"70%"}></img>
                <Text fontSize={"4xl"} textAlign={"left"} color={"white"}> NASA's Mars Perseverance rover mission to the Red Planet</Text>
                <img src="https://cdn.mos.cms.futurecdn.net/sZT7omw34h7RShHAPSdAtK.jpg"  width={"100%"} />
                
                
<Text fontSize={"4xl"} textAlign={"left"} color={"white"}>A year in the life of NASA's Mars Perseverance rover</Text>
                <img src="https://www.cnet.com/a/img/resize/ef259c4703baf72d39ced156e33d1fa4f6b02cc2/hub/2021/07/17/4754e438-2fa2-4098-b03d-dd40b5359125/yt-mars-2.jpg?auto=webp&fit=cover&height=482&width=856" width={"100%"} />
                
<Text fontSize={"4xl"} textAlign={"left"} color={"white"}> NASA’s Mars rover Landing</Text>
                <img src="https://cdn-sfo.socy.cloud/PRAS/v1/_20/202206/upload/generado_1655828887_qscsdllz_h_nf7kml_7q1420dl0cv6.jpg"  width={"100%"} />

               
               

            </Box>
            <Box  marginTop={"3%"} marginLeft={"2%"} marginRight={"10%"}  >
             <Center display={"flex"} flexDirection={"column"} justifyContent={"space-around"} position={"fixed"}>
             <Button marginTop={"3%"} width={"400px"}  borderWidth={"1px"} height={"100px"} fontSize={"2xl"} variant={"ghost"} color={"white"} onClick={ RoverHistory}> history </Button>
             <Button  marginTop={"3%"}  width={"400px"}  borderWidth={"1px"} fontSize={"2xl"} height={"100px"} variant={"ghost"} color={"white"} onClick={RoverArchives} >it's achivement</Button>
             <Button  marginTop={"3%"}  width={"400px"}  borderWidth={"1px"} fontSize={"2xl"} height={"100px"}  variant={"ghost"} color={"white"} onClick={RoverImg}> it's Image's</Button>
              
                </Center>
                
            </Box>
         </Box> 
            
            </Box>
        </>
    );
}

export default Perservnace;