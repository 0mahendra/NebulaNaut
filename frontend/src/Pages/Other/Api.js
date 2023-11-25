import React from "react";
import  { useState, useEffect } from 'react';
import { Box,Text, useBreakpoint } from "@chakra-ui/react";
// import "./Api.css";
function Api() {

   const isMobile = useBreakpoint({ base: true, md: false });
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const [data2,setData2] =useState([]);
   
    useEffect(() => {
      fetch('https://api.nasa.gov/planetary/apod?api_key=zykW4KvffClQz7IVHFRvL6pvseBIY7vgwsJMmUKf') // Replace with your API URL
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
  
     
    
   
    
    useEffect(()=>{
      fetch(`https://api.nasa.gov/planetary/apod?date=2023-11-09&api_key=zykW4KvffClQz7IVHFRvL6pvseBIY7vgwsJMmUKf`)
      .then((response)=>response.json())
      .then((data2)=>{
        setData2(data2);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });

    },[]);
    if (loading) {
      return <div>Loading...</div>;
    }
    
   
    const arrdata = [data];
    console.log(data);
    // console.log(d);
     const vari  = arrdata[0].url;
     const date  = arrdata[0].date;
     const explanation = arrdata[0].explanation;

     const arrdata2 = [data2];
     console.log(data2);
      const vari2  = arrdata2[0].url;
      const date2  = arrdata2[0].date;
      const explanation2 = arrdata2[0].explanation;
    return (

      <>
          
         {isMobile =="base" ?(
          <Box 
         
         display={"flex"}
         flexDirection={"column"}
         justifyContent={"center"}
         alignContent={"center"}
 
             >
         {/* <img src=`${vari}`  /> */}
         <Text fontSize={"2xs"} color={"white"} textAlign={"center"}  margin={"2%"}>Astronomy picture of the day  </Text>
         <Box display={"flex"}
          justifyContent={"center"}  height={"50vh"} marginLeft={"1%"} marginRight={"1%"}>
         <img src={vari}  height={'auto' }   ></img>
         </Box>
         {/* <img src={vari}  height={'1vh'}  ></img> */}
 
         <Text fontSize={"2xs"} color={"white"}  textAlign={"center"} margin={"2%"}>{explanation}</Text>
 
        
         <Box display={"flex"}
          justifyContent={"center"}
          height={"50vh"}
         >
         <img src={vari2}    ></img>
         </Box>
         <Text fontSize={"2xs"} color={"white"} textAlign={"center"} margin={"3%"}>{explanation2}</Text>
 
 
         </Box>
         ):(
          <Box 
         
         display={"flex"}
         flexDirection={"column"}
         justifyContent={"center"}
         alignContent={"center"}
 
             >
         {/* <img src=`${vari}`  /> */}
         <Text fontSize={"2xl"} color={"white"} textAlign={"center"}  margin={"3%"}>Astronomy picture of the day  </Text>
         <Box display={"flex"}
          justifyContent={"center"}  height={"100vh"}>
         <img src={vari}  height={'10px'}  ></img>
         </Box>
         {/* <img src={vari}  height={'1vh'}  ></img> */}
 
         <Text fontSize={"2xl"} color={"white"}  textAlign={"center"} margin={"3%"}>{explanation}</Text>
 
        
         <Box display={"flex"}
          justifyContent={"center"}
          height={"100vh"}
         >
         <img src={vari2}    ></img>
         </Box>
         <Text fontSize={"2xl"} color={"white"} textAlign={"center"} margin={"3%"}>{explanation2}</Text>
 
 
         </Box>
         )}        
        </>    

    );
  }
  
  export default Api;
  