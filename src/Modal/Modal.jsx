import React, { useState } from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Stack,
    HStack,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Spacer,
    InputGroup,
    InputLeftElement,
    Input,
    InputLeftAddon,
    FormControl,
    FormLabel,
    Switch,
    Button,
  } from '@chakra-ui/react'
import { Getupdateamount } from '../Redux/Action'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
const Modalbox = ({el,finalRef,isOpen,onClose}) => {
  const [amount,setamount]=useState(100)
  const dispatch=useDispatch()
  const navigate=useNavigate()
  // if(amount<100){
    
  //   setamount(100)
  // }
  const handleclick=()=>{
    if(amount<100){
      setamount(100)
    }
    else{
      // console.log("modal",el.id)
      navigate("/paymentpage")
      Getupdateamount(el.id,dispatch,Number(el.Total_amount)+Number(amount))

    }
  }
  return (
    <div>
        <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Make a secure donation</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack>
            <HStack>
            <Menu >
  <MenuButton as={Button} >Currency
  </MenuButton>
  <MenuList>
    <MenuItem>IND ₹ </MenuItem>
    
  </MenuList>
</Menu>
<Spacer/>
              <InputGroup>
    <InputLeftElement
      pointerEvents='none'
      color='gray.300'
      fontSize='1.2em'
      children='Rs.'
    />
    <Input type="number" variant="flushed" placeholder='Enter amount' value={amount} onChange={(e)=>setamount(e.target.value)}/>
    
  </InputGroup>
            </HStack>
           { amount<100 ? <p style={{color:"red"}}>Please enter above Rs. 100.00</p>:<p style={{backgroundColor:"yellow",padding:"10px"}}>Your donation can have a BIGGER impact, a sponsor will add an additional 8%.</p>}
            <Spacer/>
            <Spacer/>
            <Stack>
              <Input variant="flushed" type="text" placeholder='Name'></Input>
            <Spacer/>
            <Spacer/>
            <InputGroup variant="flushed">
    <InputLeftAddon children='+91' />
    <Input type='tel' placeholder='phone number' />
  </InputGroup>
  <Spacer/>
  <Spacer/>
           <Input variant="flushed" type="text" placeholder='Email id'></Input>
           </Stack>
           <Spacer/>
           <Spacer/>
           <HStack>
           <FormControl display='flex' alignItems='center'>
  <FormLabel htmlFor='email-alerts' mb='0'>
   Donate anonymously
  </FormLabel>
  <Switch id='email-alerts' />
</FormControl>
           </HStack>
           </Stack>
          </ModalBody>

          <ModalFooter>
            {/* <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button> */}
            <Button variant='ghost' onClick={handleclick}>Contunue to Pay Rs. {amount}.00</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  )
}

export default Modalbox