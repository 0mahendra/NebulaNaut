import { ViewIcon } from "@chakra-ui/icons";
import { IconButton, useDisclosure,Modal,ModalContent ,ModalOverlay,ModalHeader,ModalCloseButton ,ModalBody,
    ModalFooter,
    Button,
    Image,
    Text
    } from "@chakra-ui/react";
import React, { useEffect, useState }  from "react";
const ProfileModal = ({user,children})=>{
    const {isOpen,onOpen,onClose} = useDisclosure();

    const [data, setData] = useState(null);

  useEffect(() => {
    // Retrieve data from local storage
    const storedData = localStorage.getItem('userInfo');

    // Parse the JSON data if it exists
    if (storedData) {
      setData(JSON.parse(storedData));
    }
  }, []);

   const ArrData = [data];
  // console.log(ArrData[0].Batch);
    return <>
        {
            children?<span onClick={onOpen}> {children}</span>:(
                <IconButton d={{base:"flex"}}
                icon={<ViewIcon></ViewIcon>}
                 onClick={onOpen}
                />
            )
        }
        <Modal  size="lg" variant={"ghost"} isOpen={isOpen} onClose={onClose} isCentered >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader
          fontSize={"40px"}
          fontFamily={"work sans"}
          d="flex"

          justifyContent={"center"}>{user.name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody 
          d="flex"
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"space-between"}
          
          >
          <Image borderRadius={"full"} boxSize={"150px"} src={user.pic} alt = {user.name} />

          <Text fontSize={{base:"28px" ,md:"24px"}}
             fontFamily="work snas">
                Email:{user.email}
             </Text>

             <Text fontSize={"30px"}> Your batch : {user.Batch}</Text>
             <Text fontSize={"30px"}> Your Current :{user.currentRating}</Text>
             <Text fontSize={"30px"}> No.of quiz Attempted : {user.QuizAttempted}</Text>
            
             
           
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>

};

export default ProfileModal;