"use client"

import React, { useState } from 'react'
import styles from "./footer.module.css"
import {
    Container,
    FormControl,
    FormLabel,
    Heading,
    Input,
    FormErrorMessage,
    Button,
    Textarea,
  } from '@chakra-ui/react'

  const initValues = {name: "", 
    email: "", 
    message: ""
}

  const initState = {values: initValues}

const FormFooter = () => {
    const [state, setState] = useState(initState)
    const [touched, setTouched] = useState({})
    
    const {values, isLoading} = state

    const onBlur = ({target}) => setTouched((prev) => ({
        ...prev,
       [target.name]: true
    }))

    const handleChange = ({target}) => setState((prev) => ({
        ...prev,
        values: {
            ...prev.values,
            [target.name]: target.value
        }
    }))

    const onSubmit = async () =>{
        setState((prev) => ({
            ...prev,
            isLoading: true
        }))
    }

  return (
    <Container>
      <Heading>Contact</Heading>
    <FormControl isRequired isInvalid={touched.name && !values.name}>
    <Input
          type='text'
          name='name'
          backgroundColor="grey" 
          color="#000" 
          errorBorderColor='red'
          value= {values.name}
          onChange={handleChange}
          onBlur={onBlur}
        />
        <FormErrorMessage>Required</FormErrorMessage>
  </FormControl>
    <FormControl isRequired isInvalid={touched.email && !values.email}>
    <Input
          type='email'
          name='email'
          backgroundColor="grey" 
          color="#000" 
          errorBorderColor='red'
          value= {values.email}
          onChange={handleChange}
          onBlur={onBlur}
        />
     <FormErrorMessage>Required</FormErrorMessage>
  </FormControl>
    <FormControl isRequired isInvalid={touched.message && !values.message}>
    <Textarea
          type='text'
          name='message'
          rows={2}
          backgroundColor="grey" 
          color="#000" 
          errorBorderColor='red'
          value= {values.message}
          onChange={handleChange}
          onBlur={onBlur}
        />
     <FormErrorMessage>Required</FormErrorMessage>
  </FormControl>
  <Button
  className={`btn ${styles.contactBtn}`}
  backgroundColor="grey" 
  color="#fff" 
  marginTop="10px"
  padding="9px 30px"
  variant="outline"
  colorScheme='blue'
  isLoading={isLoading}
  disabled={!values.name || !values.email || !values.subject || !values.message}
  onClick={onSubmit}>
   Submit
  </Button>
    </Container>
  )
}

export default FormFooter