import { Input } from '@chakra-ui/react';
import React from 'react'
import { FcSearch } from 'react-icons/fc';
import styles from "../Styles/Search.module.css"
const Search = () => {
  return (
    <div className={styles.box} >
      
      <Input  isInvalid
    errorBorderColor='red.300' type="search" placeholder='search by name, place or location'></Input>
   <FcSearch style={{fontSize:"35px"}}/>
    </div>
  )
}

export default Search