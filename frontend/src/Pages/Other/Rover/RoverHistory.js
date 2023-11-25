import React from "react";
import { Box, Button, Center, Image, Text } from "@chakra-ui/react";
import Headings from "../Heading";

const RoverHistory = ()=>{
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
      

      <Text fontSize={"4xl"} fontWeight={"bold"}   color={"white"}> "History of ISS (International Space Station)"</Text>

      <Box  display={"flex"} flexDirection={"column"} width={"200vh"}  borderRadius={"3xl"} borderWidth={"1px"}  margin={"2%"} > 
                    <Text fontSize={"2xl"} fontWeight={"bold"}   color={"white"} marginBottom={"3%"} borderBottomWidth={"1px"}>Sojourner</Text>
                   <Text fontSize={"2xl"} fontWeight={"bold"}   color={"white"}>
                   The first Mars rover was Sojourner, named for abolitionist and early women's rights activist Sojourner Truth. It arrived on Mars on July 4, 1997, with NASA's Pathfinder mission, the first probe to touch down on the Martian surface since the Viking landers of 1976. Pathfinder landed in an area called Ares Vallis, a large, ancient flood plain that was chosen so that Sojourner would be able to easily rove around and analyze rocks. 
                   Compared to later explorers, Sojourner was tiny. NASA described it as a "microrover" and gives its dimensions as 26 inches (66 centimeters) long, 19 inches (48 cm) wide and 12 inches (30 cm) tall — roughly the size of a filing cabinet drawer. It roved on six 5-inch (13 cm) wheels that could each move independently, so that if one got stuck in Mars' soft sands, the others could work to power the robot forward. Sojourner's top speed, according to NASA, was 0.015 miles per hour (0.024 kilometers per hour). 
                   </Text> 
                  
                   <Center>
                   <Image align={"center"}
                src={"https://cdn.mos.cms.futurecdn.net/PXV8Jb4Qeo8fzSR2G7WzGc-1200-80.jpg.webp"}
               alt={`Image `}
                 boxSize="80vh"


              objectFit="cover"
            />
            

                   
            </Center>
          

                    
                </Box> 
        
       <Box  display={"flex"} flexDirection={"column"} width={"200vh"}  borderRadius={"3xl"} borderWidth={"1px"}  margin={"2%"} > 
                    <Text fontSize={"2xl"} fontWeight={"bold"}   color={"white"} marginBottom={"3%"} borderBottomWidth={"1px"}> Spirit and Opportunity</Text>
                   <Text fontSize={"2xl"} fontWeight={"bold"}   color={"white"}>
                   The next Mars rovers were the golf-cart-size twins, Spirit and Opportunity. They landed a few weeks apart in January 2004 and soon began searching for signs of past water activity on the Red Planet. The solar-powered rovers towered over their predecessor Sojourner, standing 4.9 feet (1.m) high and weighing 400 lbs. (180 kilograms).
                   Spirit touched down at a location called Gusev Crater, which was suspected of being a lake at some point in the past. The rover found ample evidence of rocks that had formed through interaction with water. In 2005, Spirit scaled a mountain the height of the Statue of Liberty, and for the first time recorded Martian dust devils as they formed, which NASA later made into movie clips.

                   </Text> 
                
                   <Center>
                   <Image align={"center"}
                src={"https://cdn.mos.cms.futurecdn.net/Ct67BVKiUT8VfAnm3iaUxQ-1200-80.jpg.webp"}
               alt={`Image `}
                 boxSize="80vh"


              objectFit="cover"
            />
            

                   
            </Center>
          

                    
                </Box> 

                <Box  display={"flex"} flexDirection={"column"} width={"200vh"}  borderRadius={"3xl"} borderWidth={"1px"}  margin={"2%"} > 
                    <Text fontSize={"2xl"} fontWeight={"bold"}   color={"white"} marginBottom={"3%"} borderBottomWidth={"1px"}> Curiosity</Text>
                   <Text fontSize={"2xl"} fontWeight={"bold"}   color={"white"}>
                   The most recent rover to touch down on Mars is Curiosity, which landed on Aug. 6, 2012. The 1-ton, SUV-size machine is the largest vehicle to reach the Martian surface, requiring an elaborate sky-crane mechanism to lower it down to the ground following an infamous "seven minutes of terror," during which NASA engineers couldn't contact the robot. Curiosity is the first rover that's not solar-powered; instead, it relies on a nuclear radioisotope thermoelectric generator, which produces electricity from the heat of plutonium-238's radioactive decay. It can travel about 660 feet (200 m) per day. 

                   </Text> 
                
                   <Center>
                   <Image align={"center"}
                src={"https://cdn.mos.cms.futurecdn.net/cSJMe9nCnJKK3W3XyNCjA-1200-80.jpg.webp"}
               alt={`Image `}
                 boxSize="80vh"


              objectFit="cover"
            />
            

                   
            </Center>
          

                    
                </Box> 
                <Box  display={"flex"} flexDirection={"column"} width={"200vh"}  borderRadius={"3xl"} borderWidth={"1px"}   > 
                    <Text fontSize={"2xl"} fontWeight={"bold"}   color={"white"} marginBottom={"3%"} borderBottomWidth={"1px"}> Perseverance</Text>
                   <Text fontSize={"2xl"} fontWeight={"bold"}   color={"white"}>
                   NASA's newest Mars rover, Perseverance, was named and launched in the midst of the COVID-19 pandemic on July 30, 2020 from Cape Canaveral, Florida. The rover, which arrived successfully at the Red Planet on Feb. 18, 2021, will hunt for signs of habitable environments on Mars while searching for signs of past microbial life. The robotic traveler will also cache a series of samples that can be returned to Earth by a future campaign.
                   Perseverance has an initial mission duration of at least one Martian year, or 687 Earth-days. If it looks familiar, that's because the robotic explorer is largely a twin of Curiosity. Roughly 85% of the new rover's mass is "heritage hardware," saving time, expense and risk in the rover's design. 

The new stuff is mostly a suite of cutting-edge instruments added to the 10 feet long rover. At 2,314 lbs. (1,050 kilograms), Perseverance weighs less than a compact car. But it packs a lot into that frame. Using an X-ray spectrometer and an ultraviolet laser, Perseverance will seek out biosignatures from the past on a microbial scale. A ground-penetrating radar will be the first rover instrument to look under the surface of Mars, mapping layers of rock, water and ice up to 33 feet (10 m) deep.
                   </Text> 
                
                   <Center>
                   <Image align={"center"}
                src={"https://i.insider.com/5f2112b058c24d19ce45a215?width=700"}
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

export default RoverHistory;