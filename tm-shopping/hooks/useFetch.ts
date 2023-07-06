import axios, {AxiosError} from "axios";
import { useEffect, useState } from "react";

type Request = {
    endpoint: string,
    query?: Object
}

const useFetch = <T>(request: Request) => {

    const [data, setData] = useState<T>();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<AxiosError | null>()

    const options = {
        method: "GET",
        url: `https://dummyjson.com/${request.endpoint}`,
    }

    const fetchData = async () => {
        try {
            setIsLoading(true)

            const response = await axios.request(options)
            setData(response.data)
        } catch (error) {
            setError(error as AxiosError)
        } finally{
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    return {data, isLoading, error};

}

export default useFetch