import { useEffect, useState } from "react";

import type { PageContext, ResponseContext } from "./types";

const useFlickr = (query?: string) => {
    const [result, setResult] = useState<PageContext>();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<any>();

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch(`https://www.flickr.com/services/rest/?${getSearchParams(query)}`)
                response.json().then((data: ResponseContext) => setResult(data.photos));
            } catch (error) {
                setError(error)
            }
            setLoading(false);
        }
        fetchData();
    }, [query])

    return { result, loading, error }
}

const getSearchParams = (query?: string): URLSearchParams => {
    return new URLSearchParams({
        method: 'flickr.photos.search',
        //unsafe, but fine for a low-stakes project and a disposable key, 
        api_key: 'c68c1cf1fa4cf0c7669dbe65fc9446fa',
        format: 'json',
        nojsoncallback: 'true',
        text: query ?? '',
        page: '1',
        per_page: '20'
    })
} 

export default useFlickr;