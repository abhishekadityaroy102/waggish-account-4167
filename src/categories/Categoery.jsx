import React from 'react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    Button,
    Box,
    Text,
    Image
  } from '@chakra-ui/react'
  import styles from "../Styles/Categoery.module.css";
  import { FaAmbulance, FaBaby, FaBeer, FaBookReader, FaDog, FaFemale } from 'react-icons/fa';
const Categoery = () => {
  return (
    <div className={styles.categorybox}>
        <Box as={Button} width="150px" h="120px" display="flex" flexWrap="wrap" onClick={()=>alert("hi am ")} boxShadow='dark-lg'  borderRadius='md' bg='white' color='black' px={4}>
            <Image src="https://cimages.milaap.org/milaap/image/upload/v1656419855/Black_flood_1_gvivow.png"></Image>
            <Text>ASSAM</Text>
        </Box>
        <Box as={Button} width="150px" h="120px" display="flex" flexWrap="wrap" onClick={()=>alert("hi am ")} boxShadow='dark-lg'  borderRadius='md' bg='white' color='black' px={4}>
            <Image src="https://assets.milaap.org/assets/home/medical-icon-22eba5bcdf629bb6e4244cdaab2d40c12e2e5fa63b83d27654423737ef4319ca.png"></Image>
            <Text>Medical</Text>
        </Box>
        <Box as={Button} width="150px" h="120px" display="flex" flexWrap="wrap" onClick={()=>alert("hi am ")}  boxShadow='dark-lg'  borderRadius='md' bg='white' color='black' px={4}>
            <Image src="https://assets.milaap.org/assets/home/memorial-icon-d649fd768074bb5124e32420e406bb00b1524ee5d277747db46964e82ad914bb.png"></Image>
            <Text>Memorial</Text>
        </Box>
        
        <div><Menu closeOnSelect={false}>
  <MenuButton as={Button} colorScheme=''
  bg="brown" width="150px" height="120px">
    Others ...
  </MenuButton>
  <MenuList minWidth='240px'>
    
    
    <MenuOptionGroup >
        
      <MenuItemOption value="education" display="flex"> <FaBookReader/>Education</MenuItemOption>
      <MenuItemOption value='Emergency'> <FaAmbulance/>Emergencies</MenuItemOption>
      <MenuItemOption value='children'><FaBaby/>Children</MenuItemOption>
      <MenuItemOption value='animals'><FaDog/>Animals</MenuItemOption>
      <MenuItemOption value='women'><FaFemale/>Women</MenuItemOption>
      <MenuItemOption value='country'>Others...</MenuItemOption>
    </MenuOptionGroup>
  </MenuList>
</Menu></div>
    </div>
  )
}

export default Categoery