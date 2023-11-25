import { Box, Center, Image, Text } from "@chakra-ui/react";
import React  from "react";
import Headings from "../Other/Heading";

const IssAchives = ()=>{
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
                    <Text fontSize={"2xl"} fontWeight={"bold"}   color={"white"} marginBottom={"3%"} borderBottomWidth={"1px"}> DISCOVERY OF STEADILY BURNING COOL FLAMES </Text>
                    
                   <Text  fontSize={"1xl"} fontWeight={"bold"}   color={"white"}>When scientists burned fuel droplets in the Flame Extinguishing Experiment (FLEX) study, something unexpected occurred. A heptane fuel droplet appeared to extinguish but actually continued to burn without a visible flame. The fire went out twice — once with and once without a visible flame. This is the first time scientists observed large droplets of heptane fuel that had dual modes of combustion and extinction. The second stage was sustained by what is known as cool flame chemical heat release. When we think about fire, we typically think about heat but special flames created aboard the ISS keep things a bit cooler.</Text>
                   <Center>
                   <Image align={"center"}
                src={"https://res.cloudinary.com/tbmg/c_scale,w_800,f_auto,q_auto/v1606971092/tb/articles/2020/features/TB-1220-p16_fig1.jpg"}
               alt={`Image `}
                 boxSize="80vh"


              objectFit="cover"
            />
            

                   
            </Center>
          

                    
                </Box> 
        
       <Box  display={"flex"} flexDirection={"column"} width={"200vh"}  borderRadius={"3xl"} borderWidth={"1px"}  margin={"2%"} > 
                    <Text fontSize={"2xl"} fontWeight={"bold"}   color={"white"} marginBottom={"3%"} borderBottomWidth={"1px"}> NEW WATER PURIFICATION SYSTEMS</Text>
                   <Text fontSize={"2xl"} fontWeight={"bold"}   color={"white"}>
                   Efficiently recycling wastewater on the space station reduces the need to provide water through resupply missions. As we travel deeper into space, resupply would be unachievable, making these systems a necessity. The JEM Water Recovery System (JWRS) generates potable water from urine. In the past on manned spacecraft, urine and wastewater were collected and stored, or vented overboard. For long-term space missions, however, water supply could become a limiting factor.
                   </Text> 
                
                   <Center>
                   <Image align={"center"}
                src={"https://res.cloudinary.com/tbmg/c_scale,w_800,f_auto,q_auto/v1606971092/tb/articles/2020/features/TB-1220-p16_fig2.jpg"}
               alt={`Image `}
                 boxSize="80vh"


              objectFit="cover"
            />
            

                   
            </Center>
          

                    
                </Box> 

                <Box  display={"flex"} flexDirection={"column"} width={"200vh"}  borderRadius={"3xl"} borderWidth={"1px"}  margin={"2%"} > 
                    <Text fontSize={"2xl"} fontWeight={"bold"}   color={"white"} marginBottom={"3%"} borderBottomWidth={"1px"}>COMBATTING MUSCLE ATROPHY AND BONE LOSS</Text>
                   <Text fontSize={"2xl"} fontWeight={"bold"}   color={"white"}>
                   Space studies have contributed greatly to our knowledge of bone and muscle loss in astronauts — and how to mitigate those effects. The knowledge gained also applies to people on Earth dealing with diseases such as osteoporosis. The effect of microgravity on bones and muscles provides unique opportunities for research. Scientists have developed an exercise routine and diet regimen that significantly reduce the bone and muscle loss astronauts otherwise would experience during their stays on station.
                   </Text> 
                
                   <Center>
                   <Image align={"center"}
                src={"https://res.cloudinary.com/tbmg/c_scale,w_800,f_auto,q_auto/v1606971092/tb/articles/2020/features/TB-1220-p18_fig1.jpg"}
               alt={`Image `}
                 boxSize="80vh"


              objectFit="cover"
            />
            

                   
            </Center>
          

                    
                </Box> 
                <Box  display={"flex"} flexDirection={"column"} width={"200vh"}  borderRadius={"3xl"} borderWidth={"1px"}   > 
                    <Text fontSize={"2xl"} fontWeight={"bold"}   color={"white"} marginBottom={"3%"} borderBottomWidth={"1px"}>UNDERSTANDING HOW THE BODY CHANGES IN MICROGRAVITY</Text>
                   <Text fontSize={"2xl"} fontWeight={"bold"}   color={"white"}>
                   When humans head to Mars, we need to know what challenges we face. Long-term stays aboard the space station have uncovered unexpected ways that the human body changes in microgravity. Some astronauts, for example, unexpectedly developed vision changes, now known as Spaceflight-Associated Neuro-Ocular Syndrome (SANS). After helping discover the issue, space station research has served as a platform to better understand SANS.
                   </Text> 
                
                   <Center>
                   <Image align={"center"}
                src={"https://res.cloudinary.com/tbmg/c_scale,w_800,f_auto,q_auto/v1606971092/tb/articles/2020/features/TB-1220-p18_fig2.jpg"}
               alt={`Image `}
                 boxSize="80vh"


              objectFit="cover"
            />
            

                   
            </Center>
          

                    
                </Box>                 
        
                <Box  display={"flex"} flexDirection={"column"} width={"200vh"}  borderRadius={"3xl"} borderWidth={"1px"}   > 
                    <Text fontSize={"2xl"} fontWeight={"bold"}   color={"white"} marginBottom={"3%"} borderBottomWidth={"1px"}>GROWING FOOD IN MICROGRAVITY</Text>
                   <Text fontSize={"2xl"} fontWeight={"bold"}   color={"white"}>
                   The ability to grow supplemental food can help humans explore farther from Earth. Many techniques for growing plants have been explored aboard the space station to prepare for these missions. On August 10, 2015, astronauts sampled their first space-grown salad and astronauts now are growing radishes in space. Eight types of leafy greens have been grown in the Veggie facility for astronauts to eat, fine tuning the best techniques.
                   </Text> 
                
                   <Center>
                   <Image align={"center"}
                src={"https://res.cloudinary.com/tbmg/c_scale,w_800,f_auto,q_auto/v1606971092/tb/articles/2020/features/TB-1220-p18_fig2.jpg"}
               alt={`Image `}
                 boxSize="80vh"


              objectFit="cover"
            />
            

                   
            </Center>
          

                    
                </Box>        
                
                <Box  display={"flex"} flexDirection={"column"} width={"200vh"}  borderRadius={"3xl"} borderWidth={"1px"}   > 
                    <Text fontSize={"2xl"} fontWeight={"bold"}   color={"white"} marginBottom={"3%"} borderBottomWidth={"1px"}>3D PRINTING IN MICROGRAVITY</Text>
                   <Text fontSize={"2xl"} fontWeight={"bold"}   color={"white"}>
                   The ability to grow supplemental food can help humans explore farther from Earth. Many techniques for growing plants have been explored aboard the space station to prepare for these missions. On August 10, 2015, astronauts sampled their first space-grown salad and astronauts now are growing radishes in space. Eight types of leafy greens have been grown in the Veggie facility for astronauts to eat, fine tuning the best techniques.
                   </Text> 
                
                   <Center>
                   <Image align={"center"}
                src={"https://3dprint.com/wp-content/uploads/2014/09/madespace3.jpg"}
               alt={`Image `}
                 boxSize="80vh"


              objectFit="cover"
            />
            

                   
            </Center>
          

                    
                </Box>        
        
                <Box  display={"flex"} flexDirection={"column"} width={"200vh"}  borderRadius={"3xl"} borderWidth={"1px"}   > 
                    <Text fontSize={"2xl"} fontWeight={"bold"}   color={"white"} marginBottom={"3%"} borderBottomWidth={"1px"}>RESPONDING TO NATURAL DISASTERS</Text>
                   <Text fontSize={"2xl"} fontWeight={"bold"}   color={"white"}>
                   With crew handheld camera imagery as a core component, the station has become an active participant in orbital data collection to support disaster response activities both within the US and abroad. Astronauts snap images of disasters such as storms and fires throughout their progression, documenting cloud cover, flooding, and changes to the land. The Lightning Imaging Sensor mounted on the ISS also detects the distribution and variability of lightning in order to improve severe weather forecasting. These data allow for more informed responses to disasters from a perspective that cannot be obtained on Earth.
                   </Text> 
                
                   <Center>
                   <Image align={"center"}
                src={"https://www.arcgis.com/sharing/rest/content/items/947eb734e811465cb0425947b16b62b3/info/thumbnail/ago_downloaded.jpg?w=800"}
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

export default IssAchives;