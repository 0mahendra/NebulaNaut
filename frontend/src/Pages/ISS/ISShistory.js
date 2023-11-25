import { Box, Center, Image, Text } from "@chakra-ui/react";
import React from "react";
import Headings from "../Other/Heading";

const IssHistory = ()=>{
   return(
    <>
        <Box
        
        bgImage={"url('https://cdn.pixabay.com/photo/2016/07/02/12/21/eclipse-1492818_1280.jpg')"}
     bgPos={"center"}
     bgSize={"contain"}
     w="100vw"
      h="auto"
      >
      <Headings/>
      

      <Text fontSize={"4xl"} fontWeight={"bold"}   color={"white"}> "History of ISS (International Space Station)"</Text>

      <Box  display={"flex"} flexDirection={"column"} width={"200vh"}  borderRadius={"3xl"} borderWidth={"1px"}  margin={"2%"} > 
                    <Text fontSize={"2xl"} fontWeight={"bold"}   color={"white"} marginBottom={"3%"} borderBottomWidth={"1px"}> origin of ISS</Text>
                   <Text fontSize={"2xl"} fontWeight={"bold"}   color={"white"}>The International Space Station (ISS) is a multi-nation construction project that is the largest single structure humans ever put into space.</Text> 
                   <Text  fontSize={"2xl"} fontWeight={"bold"}   color={"white"}>Its main construction was completed between 1998 and 2011, although the station continually evolves to include new missions and experiments. It has been continuously occupied since Nov. 2, 2000.</Text>
                   <Center>
                   <Image align={"center"}
                src={"https://cdn.mos.cms.futurecdn.net/TRRGjScCr4S9ES2uK4aiNY-650-80.jpeg.webp"}
               alt={`Image `}
                 boxSize="80vh"


              objectFit="cover"
            />
            

                   
            </Center>
          

                    
                </Box> 
        
       <Box  display={"flex"} flexDirection={"column"} width={"200vh"}  borderRadius={"3xl"} borderWidth={"1px"}  margin={"2%"} > 
                    <Text fontSize={"2xl"} fontWeight={"bold"}   color={"white"} marginBottom={"3%"} borderBottomWidth={"1px"}> How big is the ISS?</Text>
                   <Text fontSize={"2xl"} fontWeight={"bold"}   color={"white"}>
                   The International Space Station is 356 feet (109 meters) end-to-end with a mass of 925,335 pounds (419,725 kilograms) without visiting vehicles. The solar panels alone cover one acre. There is 13,696 cubic feet of habitable volume for crew members, not including visiting vehicles. The space station has seven sleeping quarters, with the ability to add more during crew handover periods, two bathrooms, a gym, and the cupola — a 360-degree-view bay window of the Earth. 
                   </Text> 
                
                   <Center>
                   <Image align={"center"}
                src={"https://www.heritagedaily.com/wp-content/uploads/2018/05/iss.jpg"}
               alt={`Image `}
                 boxSize="80vh"


              objectFit="cover"
            />
            

                   
            </Center>
          

                    
                </Box> 

                <Box  display={"flex"} flexDirection={"column"} width={"200vh"}  borderRadius={"3xl"} borderWidth={"1px"}  margin={"2%"} > 
                    <Text fontSize={"2xl"} fontWeight={"bold"}   color={"white"} marginBottom={"3%"} borderBottomWidth={"1px"}> Who owns the ISS?</Text>
                   <Text fontSize={"2xl"} fontWeight={"bold"}   color={"white"}>
                   The International Space Station is exactly that — international. It is a partnership of five space agencies from 15 countries who contributed different parts to make up the ISS, which are still owned by the respective partner, and we all help to continuously operate the station 24 hours a day, seven days a week, 365 days a year. The space station is composed of parts provided by the United States, Russia, Japan, Canada, and the countries comprising the European Space Agency.  
                   </Text> 
                
                   <Center>
                   <Image align={"center"}
                src={"https://www.esa.int/var/esa/storage/images/esa_multimedia/images/2021/11/cosmic_pearl/23822292-1-eng-GB/Cosmic_pearl_pillars.jpg"}
               alt={`Image `}
                 boxSize="80vh"


              objectFit="cover"
            />
            

                   
            </Center>
          

                    
                </Box> 
                <Box  display={"flex"} flexDirection={"column"} width={"200vh"}  borderRadius={"3xl"} borderWidth={"1px"}   > 
                    <Text fontSize={"2xl"} fontWeight={"bold"}   color={"white"} marginBottom={"3%"} borderBottomWidth={"1px"}> How high is the ISS?</Text>
                   <Text fontSize={"2xl"} fontWeight={"bold"}   color={"white"}>
                   The space station orbits Earth at an altitude of approximately 250 miles (402 kilometers), with its orbital path taking it over 90 percent of the Earth's population. Thanks to the size of its solar panels, it can be seen with the naked eye at dusk or dawn when flying over a local area. 
                   </Text> 
                
                   <Center>
                   <Image align={"center"}
                src={"https://i.pinimg.com/736x/11/f4/ac/11f4ac6f711e42bf55d4466d1f1b3e50.jpg"}
               alt={`Image `}
                 boxSize="80vh"


              objectFit="cover"
            />
            

                   
            </Center>
          

                    
                </Box>                 

                



        </Box>
    </>
   );
}

export default IssHistory;