import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const useTestAuth = () => {
    const navigate = useNavigate()
    useEffect(() => {
        const test = localStorage.getItem("id") == null ? false : true
        if (!test) {
            navigate("/authentification")
        }
    },[navigate])
}

export default useTestAuth;