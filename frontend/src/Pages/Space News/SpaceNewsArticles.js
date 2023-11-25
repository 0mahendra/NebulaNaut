import {  Button, Center, Flex, Image, Text, useBreakpoint } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

const SpaceNewsArticles = ()=>{

    const [data, setData] =useState([]);
    const [loading, setLoading] = useState(true);
    const [url ,setUrl] = useState('');

    const isMobile = useBreakpoint({ base: true, md: false });

   
   
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

  //   const Moreinfo = () => {
  //   // Replace 'www.google.com' with the desired website URL

  //   if (url) {
  //     window.open(url, '_blank');
  //   } else {
  //     alert('Please provide a website link.');
  //   }
    
  
   
    
  // };

  

    
    return (
        <>

      

        
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
            

             <Button width={"70%"} borderWidth={"1px"} variant={"ghost"} marginTop={"1%"} marginBottom={"1%"} color={"white"}  > <a href={`${Rdata.url}` }> click here for more detail's </a></Button>
             </Center>
                   

                    
                </Flex> 
                  

               

                 ):(
                  <Flex key={Rdata.id} display={"flex"} flexDirection={"column"} width={"200vh"}  borderRadius={"3xl"} borderWidth={"1px"}  margin={"2%"} > 
                   <Text fontSize={"5xl"} fontWeight={"bold"}   color={"white"}>Title : {Rdata.title}</Text>
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
            
           
        </>
    )
}
export default SpaceNewsArticles;

