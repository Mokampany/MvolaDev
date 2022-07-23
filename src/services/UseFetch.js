import { useEffect, useState } from "react"

export const UseFetch = (url,method, body, headers) => {
    const [data,setData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [err, setErr] = useState(null)
    useEffect(() => {
        fetch(url, {
            method:method,
            body: JSON.stringify(body),
            headers: headers
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
    }, [body,method,headers,url])

    return {data, isLoading, err}
}