import React from "react";
import { Box, Button, Center, Image, Text } from "@chakra-ui/react";
import Headings from "../Heading";

const RoverArchives = ()=>{
    return (
        <>
        <Box
        
        bgImage={"url('https://cdn.pixabay.com/photo/2016/07/02/12/21/eclipse-1492818_1280.jpg')"}
     bgPos={"center"}
     bgSize={"contain"}
     w="100vw"
      h="auto"
      >
      <Headings/>
      

      <Text fontSize={"4xl"} fontWeight={"bold"}   color={"white"}> " Achivement of Mars Rover's"</Text>

      <Box  display={"flex"} flexDirection={"column"} width={"200vh"}  borderRadius={"3xl"} borderWidth={"1px"}  margin={"2%"} > 
                    <Text fontSize={"2xl"} fontWeight={"bold"}   color={"white"} marginBottom={"3%"} borderBottomWidth={"1px"}> Sticking the Landing</Text>
                   
                   <Text  fontSize={"2xl"} fontWeight={"bold"}   color={"white"}>Curiosity's touchdown on the night of Aug. 5 was a big deal, both for the rover's mission and the future of Mars exploration.

In a maneuver that had never been tried before on another planet, a rocket-powered sky crane lowered Curiosity to the Martian surface on cables, then flew off and crash-landed intentionally a safe distance away. NASA officials say this technique should help land other big payloads in the future, helping pave the way for human outposts on the Red Planet.

Curiosity also landed with unprecedented precision, thanks to a new guided entry system that will aid future missions as well. The rover touched down within a target ellipse that measured just 12 miles long by 4 miles wide (20 by 7 kilometers) — a huge improvement from the 2004 landing of NASA's twin Spirit and Opportunity rovers, whose ellipses spanned 93 miles by 12 miles (150 by 20 km).</Text>
                   <Center>
                   <Image align={"center"}
                src={"https://cdn.mos.cms.futurecdn.net/PcLU6egSpZx5gzRURPfWhj-1200-80.jpg"}
               alt={`Image `}
                 boxSize="80vh"


              objectFit="cover"
            />
            

                   
            </Center>
          

                    
                </Box> 
        
       <Box  display={"flex"} flexDirection={"column"} width={"200vh"}  borderRadius={"3xl"} borderWidth={"1px"}  margin={"2%"} > 
                    <Text fontSize={"2xl"} fontWeight={"bold"}   color={"white"} marginBottom={"3%"} borderBottomWidth={"1px"}>Measuring Red Planet Radiation</Text>
                   <Text fontSize={"2xl"} fontWeight={"bold"}   color={"white"}>
                   Curiosity has been assessing the Martian radiation environment, helping scientists better understand the hazards radiation may pose both to potential indigenous microbes and human visitors to the Red Planet.

The news so far is encouraging, at least on the colonization front. Curiosity's measurements — the first of their kind ever taken on the surface of another planet — suggest that Martian radiation levels are comparable to those experienced by astronauts aboard the International Space Station.

Curiosity observed substantially higher radiation levels during its eight-month cruise through deep space. But overall, rover scientists say, the early numbers suggest that astronauts could endure a long-term, roundtrip Mars mission without accumulating a worryingly high dose (though a few big Mars-directed solar eruptions could complicate things considerably).
                   </Text> 
                
                   <Center>
                   <Image align={"center"}
                src={"https://cdn.mos.cms.futurecdn.net/sWfFopEhAtGHkGggQv4sCe-1200-80.jpg"}
               alt={`Image `}
                 boxSize="80vh"


              objectFit="cover"
            />
            

                   
            </Center>
          

                    
                </Box> 

                <Box  display={"flex"} flexDirection={"column"} width={"200vh"}  borderRadius={"3xl"} borderWidth={"1px"}  margin={"2%"} > 
                    <Text fontSize={"2xl"} fontWeight={"bold"}   color={"white"} marginBottom={"3%"} borderBottomWidth={"1px"}>Finding an Ancient Streambed</Text>
                   <Text fontSize={"2xl"} fontWeight={"bold"}   color={"white"}>
                   Just seven weeks after Curiosity touched down, mission scientists announced that the rover had found an ancient streambed where water once flowed roughly knee-deep for thousands of years at a time.

                    The discovery suggests that at least some parts of Mars may have been habitable billions of years ago, since life here on Earth thrives pretty much anywhere liquid water is found.
                   </Text> 
                
                   <Center>
                   <Image align={"center"}
                src={"https://cdn.mos.cms.futurecdn.net/PtkT8LKgNpRHm34JFgoV5e-1200-80.jpg"}
               alt={`Image `}
                 boxSize="80vh"


              objectFit="cover"
            />
            

                   
            </Center>
          

                    
                </Box> 
                <Box  display={"flex"} flexDirection={"column"} width={"200vh"}  borderRadius={"3xl"} borderWidth={"1px"}   > 
                    <Text fontSize={"2xl"} fontWeight={"bold"}   color={"white"} marginBottom={"3%"} borderBottomWidth={"1px"}>Drilling into a Martian Rock</Text>
                   <Text fontSize={"2xl"} fontWeight={"bold"}   color={"white"}>
                   In February, Curiosity used its hammering drill to bore 2.5 inches (6.4 centimeters) into a Red Planet outcrop called "John Klein," marking the first time any rover had ever drilled into a rock to collect samples on another world.

Going so deep beneath the Martian surface allowed Curiosity to study the Martian environment as it existed billions of years ago, leading to perhaps the rover's biggest scientific discovery to date (see next item). 
                   </Text> 
                
                   <Center>
                   <Image align={"center"}
                src={"https://cdn.mos.cms.futurecdn.net/Qn2YU8x2ZXyyD3FSiJi49W-1200-80.jpg"}
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

export default RoverArchives;