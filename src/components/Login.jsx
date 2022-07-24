import { Button, Divider, HStack, Input, Spacer, Stack, Text, useToast, VStack } from '@chakra-ui/react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Signuppage from './Signuppage'
import styles from "../Styles/Login.module.css"
import { HandleAuthaction } from '../Redux/Action'
import { useNavigate } from 'react-router-dom'
// 
const Login = () => {
  const toast=useToast()
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const {user,Auth}=useSelector((state)=>state)
  console.log("auth",Auth)
  
  const handleclick=()=>{
    toast({
      title: 'Login Successful.',
      description: "Welcome to Millap website.",
      status: 'success',
      duration: 4000,
      isClosable: true,
    })
    
   let id=setTimeout(()=>{
    HandleAuthaction(dispatch)
    navigate("/paymentpage")
   },[5000])
    
  }
  return (
    <div className={styles.main}>
    <div className={styles.mainbox} >
      <div className={styles.millap}>
        <div>
        <div className={styles.millapimg}>
          <img src="https://images.squarespace-cdn.com/content/v1/5c47de21a2772cff2c0212be/1549742325480-RMHFKANMOTV5JVFU80FI/Milaap+Logo-08.jpg?format=1000w"/>
        </div>
        <p style={{fontSize:"30px",color:"grey"}}>Welcome to Millap,</p>
        <p style={{fontSize:"15px"}}>India's largest crowdfunding site</p>
        </div>
      </div>
      <div className={styles.loginpage}>{
        user ? <div>
          <div>
            <VStack>
              <Spacer/>
              <Text>Quickly login using</Text>
              <Spacer/>
              <HStack>
                <Button bgColor="blue.600" color="white">Facebook</Button>
                <Button bgColor="orange.100">Google</Button>
              </HStack>
              <Spacer/>
              <HStack><Divider orientation='horizontal' /> <Text>or</Text><Divider orientation='horizontal' /></HStack>
              <Spacer/>
            <Input variant="flushed" type="email" placeholder='Enter your Email Id'></Input>
            <Spacer/>
            <Input variant="flushed" type="password" placeholder='Enter your Password'></Input>
            <Spacer/>
            <Spacer/>
            <Button onClick={handleclick}>Login</Button>
            </VStack>
          </div>
        </div>:<div><Signuppage/></div>
}</div>
    </div>
  
  </div>)
}

export default Login