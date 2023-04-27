import useFlickr from "./useFlickr"

type ResultParams = {
    query?: string
}

const Results = ({ query }: ResultParams) => {
    const { result, loading, error } = useFlickr(query);

    return <></>
}

export default Results;