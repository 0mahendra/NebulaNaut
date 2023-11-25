import React from "react";
import { Box, Button, IconButton, useBreakpoint} from '@chakra-ui/react'
import { useToast } from "@chakra-ui/react";
// import Homepage from "../Homepage";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Rover from "./Rover";
import { Menu,MenuButton,Avatar,MenuDivider,
          MenuItem ,MenuList,Text} from "@chakra-ui/react";
          import{ChevronDownIcon} from "@chakra-ui/icons";
          import {FaBars} from "react-icons/fa";
import ProfileModal from "./ProfileModel";
import Footer from "./Footer";
const Headings = ()=>{
     const toast = useToast();

     const isMobile = useBreakpoint({ base: true, md: false });

    //  console.log(isMobile);

    const user1 = localStorage.getItem("userInfo");
    const user = JSON.parse(user1);
    console.log(user);
   const history = useHistory();
    const Homepage = ()=>{
      history.push("/Home");
    }
    const logoutHandler = ()=>{
        localStorage.removeItem("userInfo");
        history.push("/");
     };
    const IssNews =()=>{
        history.push("/ISS");
    }
    const SpaceNews = ()=>{
        history.push("/SpaceNews");
    }
    const quiz = ()=>{
        console.log(user.email);
        if(user.email  ==="guest@gmail.com"){
            toast({
                title:"error occured",
                status:"error",
                duration:5000,
                isClosable:true,
                position:"bottom",
    
            });
            localStorage.removeItem("userInfo");
            history.push("/");
        }
         if( user.email !== "guest@gmail.com")
            history.push("/quiz");
        
    }
    return(
        <>
                {isMobile === "base"? (
                    <>
                    <Box display={"flex "} flexDirection={"row"} justifyContent={"space-between"} borderBottomWidth={"1px" } borderRadius={"lg"}>
                    < Text color= {"white"} margin={"1%"} fontSize={"3xl"} fontWeight={"bold"}>NebulaNaut</Text>
                    <Menu>
      <MenuButton margin={"1%"} as={Button} rightIcon="" variant={"ghost"}>
       <IconButton  icon={<FaBars/>}></IconButton>
      </MenuButton>
      <MenuList variant ={"ghost"}>
        <MenuItem variant = {"ghost"}>
        <Button color={"black"}
                 variant={"ghost"}
                 onClick={Homepage}>Home</Button>  
          
        </MenuItem>
        <MenuItem>
        <Button color={"black"}
                 variant={"ghost"}
                onClick={IssNews} > ISS  </Button>
       
        </MenuItem>
        <MenuItem>
                <Button color={"black"}
                 variant={"ghost"}><Rover/></Button>
        </MenuItem>
        <MenuItem>
        <Button color={"black"}
                 variant={"ghost"} onClick={quiz}>quiz</Button>
               

          </MenuItem>

          <MenuItem>
          <Button color={"balck"}
                 variant={"ghost"} onClick={SpaceNews}>SpaceNews </Button>
          </MenuItem>

          
      </MenuList>
                 </Menu> 


                 <div>
                <Menu variant={"ghost"}>
                    <MenuButton variant={"ghost"} p={1}>
                       
                    </MenuButton>
                   
               </Menu>
                <Menu variant={"ghost"}>
                    <MenuButton margin={"auto"} as={Button} variant={"ghost"}  rightIcon={<ChevronDownIcon/>}>
                       <Avatar size={"sm"} cursor={"pointer"} name={user.name} src={user.pic}></Avatar>
                    </MenuButton>
                    <MenuList variant={"ghost"}  >
                         <ProfileModal user={user}>
                         <MenuItem  variant={"ghost"} color={"black"}>My Profile</MenuItem>
                         </ProfileModal>
                       
                        <MenuDivider></MenuDivider>
                        <MenuItem  variant ={"ghost"}color={"black"} onClick={logoutHandler}>Logout</MenuItem>
                    </MenuList>
                </Menu>
            </div>
     
                     
                    </Box>
                    </>

                    
                   

                   
           
      ) : (
       

         
        <Box  w='100%' p={4} color='white'
              display={"flex"}
               flexDirection={"row"}
                justifyContent={"space-between"}
                
                borderRadius={"lg"}
                borderWidth={"1px"} >
                <Box color={"white"}
                  
                 variant={"ghost"} display={"flex"} flexDirection={"row"}  > 
               
                 <Text fontSize={"2xl"} fontWeight={"bold"}> NebulaNaut -By Tiny Coder</Text></Box>

                <Box display={"flex"}
                 flexDirection={"row"}
                 justifyContent={"space-between"}>
                 <Button color={"white"}
                 variant={"ghost"}
                 onClick={Homepage}>Home</Button>  
                <Button color={"white"}
                 variant={"ghost"}
                onClick={IssNews} > ISS  </Button>
                <Button color={"white"}
                 variant={"ghost"}> <Rover/></Button>
                <Button color={"white"}
                 variant={"ghost"} onClick={quiz}>quiz</Button>
                <Button color={"white"}
                 variant={"ghost"} onClick={SpaceNews}>SpaceNews </Button>
                <div>
                <Menu variant={"ghost"}>
                    <MenuButton variant={"ghost"} p={1}>
                       
                    </MenuButton>
                   
               </Menu>
                <Menu variant={"ghost"}>
                    <MenuButton as={Button} variant={"ghost"}  rightIcon={<ChevronDownIcon/>}>
                       <Avatar size={"sm"} cursor={"pointer"} name={user.name} src={user.pic}></Avatar>
                    </MenuButton>
                    <MenuList variant={"ghost"}  >
                         <ProfileModal user={user}>
                         <MenuItem  variant={"ghost"} color={"black"}>My Profile</MenuItem>
                         </ProfileModal>
                       
                        <MenuDivider></MenuDivider>
                        <MenuItem  variant ={"ghost"}color={"black"} onClick={logoutHandler}>Logout</MenuItem>
                    </MenuList>
                </Menu>
            </div>
                </Box>
            </Box>
       
        
      )}
            
        </>
    );
}
export default Headings;