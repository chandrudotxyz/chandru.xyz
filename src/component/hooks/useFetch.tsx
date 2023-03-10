import {useEffect, useState} from "react";

export const useFetch = (url: string, requestOptions?: any | null) => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [result, setResult] = useState(null);
    useEffect(() => {
        fetch(url, requestOptions)
            .then(res => res.json())
            .then(
                (result) => {
                    console.log("data loaded success")
                    setIsLoaded(true);
                    setResult(result);
                },
                (error) => {
                    console.log("data loaded with error")

                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])
    return [isLoaded, error, result]
}
