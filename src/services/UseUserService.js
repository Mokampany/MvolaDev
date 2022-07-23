import { useEffect, useNavigate, useState } from "react"
import { UseFetch } from "./UseFetch"


export const useCheckId = (id) => {
    const [idUser,setIdUser] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [err, setErr] = useState(null)
    useEffect(() => {
        const url = `${process.env.REACT_APP_NODE_URL}/api/v1/utilisateur/${id}`
        fetch(url, {
            method: "GET"
        }).then(res => {
            return res.json()
        }).then(data => {
            if (data.error) {
                setIdUser(null)
            }
            else{
                setIdUser(data._id)
            }
            setIsLoading(false)
        }).catch(err => {
            setErr(err)
            setIdUser(null)
        }).finally(()=>{
            setIsLoading(false)
        })
    }, [id])
    return {idUser, isLoading, err}
}