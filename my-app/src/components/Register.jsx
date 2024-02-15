import React from 'react'
import Nav from './reuseable/Nav'
import Typography from '@mui/material/Typography'
import { Stack, Paper, TextField, Button } from "@mui/material"
import { useForm } from "react-hook-form"
import { Link } from 'react-router-dom'
import useHook from "../hooks/useHook"
import SnackBar from './reuseable/SnackBar'
let sx = {
    TextField: {
        width: {
            md: "70%",
            xs: "90%",
        },
        mt: 1
    },
    Button: {
        width: {
            md: "70%",
            xs: "90%",
        },
        mt: 2,
        height: 40,
        borderRadius: 5

    },
    paper: {
        width: {
            md: 600,
            xs: "90%",
        },
        mt: 5,
        height: "auto",
        pb: 2,
        alignItems: "center",
        display: "flex",
        pt: 1,
        flexDirection: "column"
    }
}
function Register() {
let {callApi}=useHook()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const onSubmit = (data) => {
        callApi(data,"/register")
    }

    return (
        <>
            <Nav />
            <Stack
                mt={8}

                alignItems={"center"}

            >
                <Paper
                    variant='outlined'
                    component={"form"}
                    sx={
                        sx.paper
                    }
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <Typography variant="h4" color="initial">
                        register


                    </Typography>

                    <TextField
                        focused
                        {...register("username", { required: true, })}
                        label="username"
                        sx={sx.TextField
                        }
                        color={errors.username && errors.username.type === "required" ? "error" : "primary"}
                        helperText={errors.username && errors.username.type === "required" && <Typography variant="body1" color="error">field is required</Typography>}

                    />

                    <TextField
                        focused
                        {...register("email", {
                            required: true, pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,

                            }
                        })}
                 
                        label="email"
                        sx={sx.TextField}
                        color={(errors.email && errors.email.type === "required" || errors.email && errors.email.type === "pattern") ? "error" : "primary"}
                        helperText={(errors.email && errors.email.type === "required" || errors.email && errors.email.type === "pattern") &&
                            <Typography variant="body1" color="error">{
                                errors.email.type === "pattern" ? "Please Enter A Valid Email!" : "field is required"


                            }</Typography>}


                    />

                    <TextField
                
                        focused
                        {...register("password", { required: true, minLength: 6 })}
                        label="password"
                        type='password'
                        sx={sx.TextField}
                        color={(errors.password && errors.password.type === "required" || errors.password && errors.password.type === "minLength") ? "error" : "primary"}
                        helperText={(errors.password && errors.password.type === "required" || errors.password && errors.password.type === "minLength") &&
                            <Typography variant="body1" color="error">
                                {
                                    errors.password.type === "minLength" ? "password must be more than 5 letters" : "this field is required"
                                }
                            </Typography>}

                    />
                    <Button
                        sx={sx.Button}
                        variant="contained"
                        type='submit'
                        color="info">
                        <Typography


                            variant="body1" color="inherit">
                            submit
                        </Typography>
                    </Button>
           <Stack
           mt={1}
           >
           <Link
                    to="/login"
                    >already have an account</Link>
           </Stack>
                </Paper>
            </Stack>
            <SnackBar/>
        </>
    )
}

export default Register