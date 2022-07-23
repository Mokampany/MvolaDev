import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const useTestAuth = () => {
    const[idUser, setIdUser] = useState(null)
    const[isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const getId = localStorage.getItem("id") != null ? localStorage.getItem("id") : null
        if (getId) {
            console.log("hello")
            setIdUser(getId)
            setIsLoading(false)
        }else{
            setIsLoading(false)
            // setIdUser(null)
        }
    },[])

    return { idUser,isLoading }
}

export default useTestAuth;