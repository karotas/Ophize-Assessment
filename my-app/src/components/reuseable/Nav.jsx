import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
let sx={
AppBar:{
    height:60,
    width:"100%"
}
}
function Nav() {
  return (
   <AppBar variant='outlined' position="fixed" sx={sx.AppBar} color="inherit"/>
    

  )
}

export default Nav