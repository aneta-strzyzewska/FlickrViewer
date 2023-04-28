import PhotoView from "./PhotoView";
import useFlickr from "./useFlickr"

type ResultParams = {
    query?: string
}

const Results = ({ query }: ResultParams) => {
    const { result } = useFlickr(query);

    return (<>{
        result?.photo.map((photo, index) => 
            <div className="photo-view">
                <PhotoView 
                    key={index} 
                    photo={photo} />
            </div>)
    }</>)
}

export default Results;