import React from "react";
import { Box,Text,Button } from "@chakra-ui/react";
import Heading from "./Heading";

const spirit = ()=>{
    return (
        <>
          <Heading/>
        <Box 
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"space-around"}>
        <Box width={"70%"} marginRight={"0px"}>
 <Text fontSize={"2xl"} textAlign={"left"}> NASA's Mars Perseverance rover mission to the Red Planet</Text>
                <img src="https://cdn.mos.cms.futurecdn.net/sZT7omw34h7RShHAPSdAtK.jpg"  width={"100%"} />
                
                
<Text fontSize={"2xl"} textAlign={"left"}>A year in the life of NASA's Mars Perseverance rover</Text>
                <img src="https://www.cnet.com/a/img/resize/ef259c4703baf72d39ced156e33d1fa4f6b02cc2/hub/2021/07/17/4754e438-2fa2-4098-b03d-dd40b5359125/yt-mars-2.jpg?auto=webp&fit=cover&height=482&width=856" width={"100%"} />
                
<Text fontSize={"2xl"} textAlign={"left"}> NASA’s Mars rover Landing</Text>
                <img src="https://cdn-sfo.socy.cloud/PRAS/v1/_20/202206/upload/generado_1655828887_qscsdllz_h_nf7kml_7q1420dl0cv6.jpg"  width={"100%"} />
               
                

            </Box>
            <Box display={"flex"}
              flexDirection={"column"}
             
              >
             <Button marginTop={"3%"}  height={"100px"} fontSize={"2xl"}> history </Button>
             <Button  marginTop={"3%"}  fontSize={"2xl"} height={"100px"} >it's achivement</Button>
             <Button  marginTop={"3%"}  fontSize={"2xl"} height={"100px"} > it's Image's</Button>
            </Box>

            </Box>
            
        </>
    );
}
export default spirit;