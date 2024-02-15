import React, { useContext } from 'react'
import Snackbar from '@mui/material/Snackbar'
import IconButton from '@mui/material/IconButton'
import Close from '@mui/icons-material/Close'
import {Alert} from "@mui/material"
import { Context } from '../../App'
function SnackBars() {
    let { snackMsg,
        
        setSnackOpen,
        snackOpen,
        isSnackErr,
        }=useContext(Context)

        let close=(_,e)=>{
         if(e==="timeout"){
            setSnackOpen(false)
         }

        }
  return (
   <Snackbar
   open={snackOpen}
   onClose={close}
   autoHideDuration={2000}
     anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
     sx={
        {
            height:40,
            width:{
                md:250,
                xs:"70%"
            }
        }
     }

     action={
       <IconButton size="small" aria-label="close" color="inherit" onClick={()=>setSnackOpen(false)} >
         <Close fontSize="small" />
       </IconButton>
     }
   >
    <Alert
    sx={{
        height:"100%",
        width:"100%"
    }}
    color={isSnackErr?"error":"success"}
    >{snackMsg}</Alert>
   </Snackbar>
  )
}

export default SnackBars