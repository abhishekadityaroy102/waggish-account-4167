import { Button, Divider, HStack, Input, Spacer, Spinner, Text, useToast, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'

const Paymentpage = () => {
    const [state,setstate]=useState(false)
    const toast=useToast()
    const handlepayment=()=>{
        setstate(true)
      
      let id=setTimeout(()=>{
        toast({
            title: 'Payment accepted.',
            description: "Thank you for Help !",
            status: 'success',
            duration: 7000,
            isClosable: true,
          })
          setstate(false)
      },[8000])
    }
  return (
    <div>
        <div>
            PAYMENT PAGE 
        </div>
       <div>{
state ? <Spinner
thickness='4px'
speed='0.65s'
emptyColor='gray.200'
color='blue.500'
size='xl'
/>:<p>YOUR PAYMENT SECURITY IS OUR JOB! SO don't Worry</p>
}
</div>
        <div>
            <VStack>
                <Spacer/>
                <Text>Card Number</Text>
                <Input placeholder='Enter Card Number' w="420px"></Input>
               <Divider orientation='horizontal' ></Divider>
                <HStack>
                    <VStack>
                        <Text>
                            Expiry
                        </Text>
                        <Input type="month"></Input>
                    </VStack>
                        
                    <VStack>
                    <Text>CVV</Text>
                        <Input placeholder="CVV"></Input>
                    </VStack>
                </HStack>
                <Button onClick={handlepayment}>Proceed to Pay</Button>
            </VStack>
        </div>
    </div>
  )
}

export default Paymentpage