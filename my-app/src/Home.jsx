import React from 'react'
import Nav from './components/reuseable/Nav'
import {Typography,Stack} from '@mui/material'

function Home() {
  return (
  <>
  <Nav/>

  <Stack

  alignItems={"center"}
  justifyContent={"center"}
  height={"100vh"}
  >
    <Typography  textAlign={"center"} variant="h4" color="initial">
welcome to the home screen

    </Typography>
  </Stack>
  </>
  )
}

export default Home