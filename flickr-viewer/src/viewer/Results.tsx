import PhotoView from "./PhotoView";
import useFlickr from "./useFlickr"

type ResultParams = {
    query?: string
}

const Results = ({ query }: ResultParams) => {
    const { result, loading, error } = useFlickr(query);

    return (<>{
        result?.photo.map(photo => 
            <div>
                <PhotoView photo={photo} />
            </div>)
    }</>)
}

export default Results;