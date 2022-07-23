import { useEffect,useNavigate, useState } from "react"
import {useCheckId} from './UseUserService'
const useTestAuth = () => {
    const getId = localStorage.getItem("idUser") != null ? localStorage.getItem("idUser") : null
    const {idUser, isLoading, err} = useCheckId(getId)
    useEffect(() => {
        console.log(idUser)
    },[idUser])

    return { idUser,isLoading }
}

export default useTestAuth;