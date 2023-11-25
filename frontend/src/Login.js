import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack ,useToast} from "@chakra-ui/react";
import React ,{useState} from "react";
import axios from "axios";
import {useHistory} from "react-router-dom"


const Login =  () =>{
    
    const[email,setEmail] = useState();
    const[password,setPassword] = useState();
    const[show,setShow] = useState(false);
    const[loading,setLoading]= useState(false);
    const toast =useToast();
    const history= useHistory();



    const handleClick= () =>{
        setShow(!show);
    }
  
    const submitHandler = async() =>{
        setLoading(true);
        if( !email|| !password ){
           toast({
               title:"sarri field fill karo yrr!",
               status:"warning",
               duration:5000,
               isClosable:true,
               position:"bottom",
   
           });
           setLoading(false);
           return; 
        }
       
        try{
         const config = {
           header:{
               "Content-type":"application/json",
           },
         };
         const {data} = await axios.post(
           "/api/user/login",
           {email,password},
            config
           ); 
           toast({
               title:"Registration Successful",
               status:"warning",
               duration:5000,
               isClosable:true,
               position:"bottom",
   
           });
           localStorage.setItem("userInfo",JSON.stringify(data));
   
           setLoading(false);
           history.push("/Home");
   
        }
        catch(error){
           toast({
               title:"error occured",
               status:"error",
               duration:5000,
               isClosable:true,
               position:"bottom",
   
           });
           setLoading(false);
        }
       };
 return (
    <VStack spacing={"5px"} color={"white"}>
   
    <FormControl id='email' isRequired>
        <FormLabel>Email</FormLabel>
        <Input
            placeholder="Enter Your Email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
        />
    </FormControl>
    <FormControl id='password' isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup>
         <Input
         type={show ? "text" :"password"}
            placeholder="Enter Your Paasowrd"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
        />
        <InputRightElement width={"4.5rem"}>
            <Button h= "1.75rem" size={"sm"} onClick={handleClick}>
                {show ?"Hide" :"Show"}
            </Button>
        </InputRightElement>
        </InputGroup>
       
    </FormControl>
   
   
    <Button
       
        // colorScheme="blue"
        width= "100%"
        style ={{marginTop:15}}
        onClick = {submitHandler}
        isLoading={loading}
        >
        Login
    </Button>
    <Button
    //  colorScheme="red"
        width= "100%"
        style ={{marginTop:15}}
        onClick ={() => {
            setEmail("guest@gmail.com");
            setPassword("Guest");   
        }
        }
        >
        Get Guest User Credentials

    </Button>
   
    </VStack>
 );
};
export default Login;