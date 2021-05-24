import React from 'react'
import styled from 'styled-components/macro'

const Form = styled.form`

`

const Heading = styled.h1`

`

const InputUsername = styled.input`

`

const InputPassword = styled.input`

`

const SignInForm = () => {
  return (
    <Form>
      <Heading>
        SIGN IN
      </Heading>
      <InputUsername
        type="text"
      >

      </InputUsername>
      <InputPassword
        type="text"
      ></InputPassword>
    </Form>
  )
}

export default SignInForm