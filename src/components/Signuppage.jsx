import { Button, Input, Spacer, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Handleloginaction } from '../Redux/Action'
import { useToast } from '@chakra-ui/react'
const Signuppage = () => {
   const dispatch=useDispatch()
   const toast = useToast()
    const handleclick=()=>{
        toast({
            title: 'Account created.',
            description: "We've created your account for you.",
            status: 'success',
            duration: 4000,
            isClosable: true,
          })
          
    let id=setTimeout(()=>{
        Handleloginaction(dispatch)
    },[5000])
    }
  return (
    <div>
        <div>
            <VStack>
                <Spacer/>
                <Spacer/>
                <Text>Sign up & manage fundraisers,</Text>
                <Text>
                    donations & more
                </Text>
                <Spacer/>
                <Spacer/>
            <Input variant="flushed" type="text" placeholder='Enter your Full name'></Input>
            <Spacer/>
        <Input variant="flushed" type="email" placeholder='Enter your Email Id'></Input>
        <Spacer/>
        <Input variant="flushed" type="text" placeholder='Enter 6-20 digit mixed(a-z & 1-9) letter'></Input>
        <Spacer/>
            <Input variant="flushed" type="password" placeholder='Enter Password Again'></Input>
            <Spacer/>
            <Spacer/>
            <Button onClick={handleclick}>Register Your Data</Button>
            </VStack>
        </div>
    </div>
  )
}

export default Signuppage