import { useState } from "react";

import useFlickr from "./useFlickr"
import '../styles.css';
import { getFlickrImageUrl } from "./viewerFunctions";
import type { Photo } from "./types";
import PhotoDetail from "./PhotoDetail";

type ResultParams = {
    query?: string
}

const Results = ({ query }: ResultParams) => {
    const { result } = useFlickr(query);
    const [ details, setDetails ] = useState<Photo>()

    return (
        <div className="photo-container">
            {
                result?.photo.map((photo, index) => 
                    <img key={index} 
                        alt={photo.title}
                        className="photo-view" 
                        src={getFlickrImageUrl(photo)} 
                        onClick={() => setDetails(photo)}
                    />
            )}
            { details && 
                <PhotoDetail 
                    photo={details} 
                    onClose={() => setDetails(undefined)}  /> 
            }
        </div>
    )
}

export default Results;