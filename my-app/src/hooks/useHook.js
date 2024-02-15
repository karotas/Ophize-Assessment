import axios from "axios"
import { useContext } from "react"
import { Context } from "../App"
import { useNavigate } from "react-router-dom";
import Cookie from "js-cookie"
let backendUrl = "http://localhost:4000"


function useHook() {
    let {
        setSnackMsg,
        setSnackOpen,

        setIsSnackErr } = useContext(Context)
    const navigate = useNavigate();
    let callApi = async (data, url) => {

        let response = await axios({
            method: "post",
            data: data,
            url: backendUrl + url
        })
     
        if (response.data.error) {
            setSnackOpen(true)
            setIsSnackErr(true)
            setSnackMsg(response.data.message)
            return
        }
        setSnackOpen(true)
        setIsSnackErr(false)
        setSnackMsg(response.data.message)
        if (url === "/login") {
            Cookie.set("jwt", response.data.jwt)
        }
        setTimeout(() => {
            url === "/login" ? navigate("/") : navigate("/login")
        }, 2500);
    }

    return { callApi }
}

export default useHook