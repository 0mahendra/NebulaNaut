import "./index.css"
import React from 'react';
import  App from "./App"
import ReactDom from 'react-dom';
import {BrowserRouter} from "react-router-dom"; 
import { ChakraProvider } from '@chakra-ui/react';
import Homepage from "./Pages/Homepage";
// import ChatProvider from "./Context/ChatProvider";


ReactDom.render(
  <React.StrictMode>
  <BrowserRouter>
   
  <ChakraProvider> 
       
        <App/>
  </ChakraProvider>
 
  </BrowserRouter>
  </React.StrictMode>
  ,
  document.getElementById("root")

  
);

