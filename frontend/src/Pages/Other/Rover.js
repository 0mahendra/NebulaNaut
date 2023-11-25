import React from 'react';
import {  Button, Menu, MenuButton, MenuList, MenuItem, extendTheme, useBreakpoint } from "@chakra-ui/react";
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import Rovermini from './Rovermini';


const theme = extendTheme({
  components: {
    Button: {
      variants: {
        "with-dropdown": {
          borderRadius: "0",
          // borderBottom: "2px solid",
          borderColor: "gray.200",
        },
      },
    },
  },
});

function Rover() {

  const isMobile = useBreakpoint({ base: true, md: false });

  const history = useHistory();

  const Perservnace = ()=>{
       history.push("/perservance");
  }

  const spirit  = ()=>{
    history.push("/spirit");
  }
  const curiosity = ()=>{
    history.push("/curiosity")
  }

  return (
    <>
     {isMobile == "base" ?(
      <Rovermini/>

     ):(
      <Menu>
        <MenuButton as={Button} variant="with-dropdown">Rover's</MenuButton>
        <MenuList>
          <MenuItem><Button onClick={Perservnace} width={"100%"}>Perservance</Button></MenuItem>
          {/* <MenuItem><Button onClick={spirit}  width={"100%"}>spirit</Button></MenuItem>
          <MenuItem><Button onClick={curiosity}  width={"100%"}>curiosity</Button></MenuItem> */}
        </MenuList>
      </Menu>
     )}
    
      

      </>
   
  );
}

export default Rover;