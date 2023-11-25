import { Center, Text, useBreakpoint } from "@chakra-ui/react";
import { color } from "framer-motion";
import React from "react";
import  { Component, useState, useEffect } from 'react';
const DailyQuotes = ()=>{

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const isMobile = useBreakpoint({ base: true, md: false });

    const [data2,setData2] =useState([]);
    var d = new Date(); d. setDate(d. getDate() - 1);
    const y_date = d;
    useEffect(() => {
      fetch('https://api.quotable.io/quotes/random?tags=technology,famous-quotes') // Replace with your API URL
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

    if (loading) {
        return <div>Loading...</div>;
      }
      
     
      const arrdata = [data];
      console.log(arrdata[0][0].author);
    //   console.log(d);
    //   const date = arrdata[0];
      const quote  = arrdata[0][0].content;
    //   console.log(date);
      

    return (
        <>

         {isMobile =="base " ?(
             <Center>
             <Text fontSize={"2xs"}
           fontWeight={"normal"}>{quote}</Text> 
             </Center>
         ):(

          <Text fontSize={"4xl" } color={"white"}
           fontWeight={"bold"}>{quote}</Text> 

         )}


          
        </>
    )
}
export default DailyQuotes;