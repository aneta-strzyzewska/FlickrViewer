import PhotoView from "./PhotoView";
import useFlickr from "./useFlickr"
import './style.css';

type ResultParams = {
    query?: string
}

const Results = ({ query }: ResultParams) => {
    const { result } = useFlickr(query);

    return (<div className="photo-container">{
        result?.photo.map((photo, index) => 
            <PhotoView key={index} photo={photo} />
        )
    }</div>)
}

export default Results;