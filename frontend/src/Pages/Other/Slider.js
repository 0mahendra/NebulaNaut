



  


      import React, { useState, useEffect } from 'react';
      import { Box, Flex, Image ,Text} from '@chakra-ui/react';
import { color } from 'framer-motion';
      
   
      const Slider = () => {
        const [currentIndex, setCurrentIndex] = useState(0);

        const [data, setData] = useState([]);
        const [loading, setLoading] = useState(true);
    
        // const [data2,setData2] =useState([]);
       
        useEffect(() => {
          fetch('https://api.spaceflightnewsapi.net/v3/blogs') // Replace with your API URL
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
        const images = [
          'https://imgs.search.brave.com/l72oMa0_0zmmd2xEjKvLLkMmIUas_2tqIDzn7l_F04s/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNTMw/NTMxOTA2L3Bob3Rv/L2ludGVybmF0aW9u/YWwtc3BhY2Utc3Rh/dGlvbi1hbmQtc2h1/dHRsZS1hcnR3b3Jr/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz1zQjZGaG5jWC01/NGhzX1ZtdUJSWm1h/YkQzT0ExcGN6eUJx/MVpvaS0tTC1JPQ',
          'https://imgs.search.brave.com/YteVqaehd2QlqAreptDfzqJZbwrdUn4R2rm1w6vv8qg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxOS8w/NC8wNi8wNi80NC9h/c3Ryb25hdXQtNDEw/Njc2Nl82NDAuanBn',
          'https://imgs.search.brave.com/iPAUiBvlyDRnLQh8xuvJMYNEEEXSyGAjylcvPEaerFI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxMi8x/MS8yOC8wOS8wOC9t/YXJzLTY3NTIyXzEy/ODAuanBn',
          'https://imgs.search.brave.com/TxhWMdbEXbrxP9D3DIQ7HYg57QAfxDyCzu5hX3vEQFo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9hcGku/dGltZS5jb20vd3At/Y29udGVudC91cGxv/YWRzLzIwMjIvMDkv/RXhvcGxhbmV0LTEu/anBnP3F1YWxpdHk9/ODUmdz0xMDI0',
          'https://www.shutterstock.com/shutterstock/photos/2052894734/display_1500/stock-vector-quiz-and-question-marks-trivia-night-quiz-symbol-neon-sign-night-online-game-with-questions-2052894734.jpg',
          'https://c8.alamy.com/comp/KFTRGD/cartoon-astronaut-character-in-white-space-suit-is-performing-a-space-KFTRGD.jpg'
        ];
        const textion =[
            "ISS(International Space Station)",
            "Space Astronaut's",
            "Our Mar's Rover's",
            "Beautiful Outer Space",
            "Quiz and many more",
            "Beautiful and exploring exoplanets",
           
            "Our Planet from Outer Space"
        ]
        
       
      
        useEffect(() => {
          const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
          }, 3000); 
      
          return () => clearInterval(intervalId);
        }, []);

        
        
        console.log(currentIndex);

      
        return (
          <Box height={"100vh" } margin={"1%"}>
           <Image src={images[currentIndex]} alt={`Image ${currentIndex + 1}`}  boxSize="85vh" 
        objectFit="cover" />
          </Box>
       )
       };
      
      export default Slider;
      