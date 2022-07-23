import { useEffect, useState } from "react"

export const UseFetchGet = (url,method, headers) => {
    const [data,setData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [err, setErr] = useState(null)
    useEffect(() => {
        fetch(url, {
            method:method,
            headers: {
                'content-type':'application/json'
            }
        }).then(res => {
            return res.json()
        }).then(data => {
            if (data.error) {
                setData(null)
                setErr('Error')
            }
            else{
                setData(data)
                setErr(null)
            }
        }).catch(err => {
            setErr(err)
            setData(null)
        }).finally(()=>{
            setIsLoading(false)
        })
    }, [method,url])

    return {data, isLoading, err}
}