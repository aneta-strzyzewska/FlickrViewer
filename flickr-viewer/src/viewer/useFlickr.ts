import { useEffect, useState } from "react";

import type { PageContext, ResponseContext } from "./types";

const useFlickr = (query?: string, page?: number, perPage?: number) => {
    const [result, setResult] = useState<PageContext>();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<any>();

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch(`https://www.flickr.com/services/rest/?${getSearchParams(query, page, perPage)}`)
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

const getSearchParams = (query?: string, page?: number, perPage?: number): URLSearchParams => {
    return new URLSearchParams({
        method: 'flickr.photos.search',
        api_key: process.env.REACT_APP_FLICKR_API_KEY ?? '',
        format: 'json',
        nojsoncallback: 'true',
        text: query ?? '',
        page: page?.toString() ?? '1',
        per_page: perPage?.toString() ?? '10',
    })
} 

export default useFlickr;