import React from 'react'
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    PopoverAnchor,
    Button,
    Center,
    Divider,
    Text,
    HStack,
    useDisclosure,
  } from '@chakra-ui/react'
import { FaRegUserCircle } from 'react-icons/fa'
import { Handleloginaction, Handleregisteraction } from '../Redux/Action'
import { useDispatch } from 'react-redux'
//   const { onOpen, onClose, isOpen } = useDisclosure()
const User = () => {
    const dispatch=useDispatch()
    const handleloginpage=()=>{
    //  alert("HI i am login text")
   Handleloginaction(dispatch)
    }
    const handleregisterpage=()=>{
    //    alert('hi  I AM REGISTER TEXT')
    Handleregisteraction(dispatch)
    }
//    alert("i am user page")
  return (
    <div style={{display:"flex",justifyContent:"right"}}><Popover placement="bottom-end">
    <PopoverTrigger>
      <Button variant="ghost" marginRight="30px"size="md"><FaRegUserCircle style={{fontSize:"40px"}}/></Button>
    </PopoverTrigger>
    <PopoverContent>
      <PopoverArrow />
      <PopoverCloseButton />
      <PopoverBody bgColor="burlywood" color="whitesmoke">
        <HStack>
        <Text onClick={handleloginpage}>Login</Text>
        <Center height='50px'>
  <Divider orientation='vertical' />
</Center>
        <Text onClick={handleregisterpage}>Register</Text>
        </HStack>
      </PopoverBody>
    </PopoverContent>
  </Popover></div>
  )
}

export default User