import { Box ,Button,Center,Flex,Image,Text, useBreakpoint } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Heading from "../Other/Heading";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
const ISS = ()=>{


  const history = useHistory();
    const [data, setData] =useState([]);
    const [loading, setLoading] = useState(true);
    const [url ,setUrl] = useState('');

    const isMobile = useBreakpoint({ base: true, md: false });

    

    const historyIss = ()=>{
      history.push("/IssHistory");
    }

    const Archives = ()=>{
      history.push("/IssArchives")
    }

   
   
    useEffect(() => {
      fetch('https://api.spaceflightnewsapi.net/v3/articles') // Replace with your API URL
        .then((response) => response.json())
        .then((data) => {
          setData(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
          setLoading(false);
        });
    }, []);
    
    const arrdata = [data];
    return (
        <>
            <Box   bgImage={"url('https://cdn.pixabay.com/photo/2016/07/02/12/21/eclipse-1492818_1280.jpg')"}
     bgPos={"center"}
     bgSize={"contain"}
     w="100vw"
      h="auto">
       <Heading/>
          <Center>
              <Text fontSize={"5xl"} color={"white"}> ISS(International SpaceStation)</Text>
              </Center>
           
         <Box display={"flex"}
                 justifyContent={"row"}>
            <Box marginTop={"3%"} marginLeft={"2%"} width={"70vw"}>
                <Text fontSize={"4xl"} color={"white"} textAlign={"left"}>ISS NATIONAL LABORATORY</Text>
                <img src={"https://www.issnationallab.org/wp-content/uploads/2023/05/launch-complex-ksc.jpg"} width={"70%"}></img>

                <Text fontSize={"4xl"} color={"white"} textAlign={"center"} marginTop={"3%"}> ISS News </Text>
                {data.map((Rdata)=>(
            <box key={Rdata.id}>
                 { isMobile === "base" ?(
                    <Flex key={Rdata.id} display={"flex"} flexDirection={"column"} width={"100vw"}  borderRadius={"3xl"} borderWidth={"1px"}   
                     marginTop={"5%"} > 
                   <Text fontSize={"2xl"} fontWeight={"bold"}   color={"white"}>{Rdata.title}</Text>
                   <Center>
                   <Image align={"center"}
                src={Rdata.imageUrl}
               alt={`Image `}
                 boxSize="40vh"


              objectFit="cover"
            />

                   
            </Center>
            <Center display={"flex"} flexDirection={"column"}>
            <Text fontSize={"1xs"} color={"white"} marginBottom={"1%"} >{Rdata.summary}</Text>
            

             <Button width={"70%"} borderWidth={"1px"} variant={"ghost"} marginTop={"1%"} marginBottom={"1%"} color={"white"}   > <a href={`${Rdata.url}` }> click here for more detail's </a></Button>
             </Center>
                   

                    
                </Flex> 
                  

               

                 ):(
                  <Flex key={Rdata.id} display={"flex"} flexDirection={"column"} width={"60vw"}  borderRadius={"3xl"} borderWidth={"1px"}  margin={"2%"} > 
                   <Text fontSize={"5xl"} fontWeight={"bold"}   color={"white"}> {Rdata.title}</Text>
                   <Center>
                   <Image align={"center"}
                src={Rdata.imageUrl}
               alt={`Image `}
                 boxSize="80vh"


              objectFit="cover"
            />

                   
            </Center>
            <Center display={"flex"} flexDirection={"column"}>
            <Text fontSize={"3xl"} color={"white"} marginBottom={"1%"} >{Rdata.summary}</Text>
            

             <Button width={"auto"} borderWidth={"1px"} variant={"ghost"} marginTop={"1%"} marginBottom={"1%"} color={"white"}  > <a href={`${Rdata.url}` }> click here for more detail's </a></Button>
             </Center>
                   

                    
                </Flex> 

                 )}

                 </box>
                
             ))}

            </Box>
            <Box  marginTop={"3%"} marginLeft={"2%"} marginRight={"10%"}  >
             <Center display={"flex"} flexDirection={"column"} justifyContent={"space-around"} position={"fixed"}>
             <video width={"440" }  height={"150"}  autoPlay loop>
            <source src="https://www.gstatic.com/culturalinstitute/searchar/assets/international_space_station/desktop_dark.mp4" type="video/mp4"/>
           </video>
                <Button variant={"ghost"} borderRadius={"lg"} borderWidth={"1px"} fontSize={"3xl"} color={"white"} width={"400px"} marginTop={"5%"} onClick={historyIss} >history</Button>
                <Button variant={"ghost"} borderRadius={"lg"} borderWidth={"1px"} fontSize={"3xl"} color={"white"} width={"400px"}  marginTop={"5%"} onClick={Archives}>Achivement</Button>
                </Center>
                
            </Box>
         </Box> 



            </Box>
        </>
    );
}

export default ISS;