import '../styles.css';
import { getFlickrImageUrl } from "./viewerFunctions";
import type { Photo } from "./types";

type PhotoDetailParams = {
    photo: Photo,
    onClose: () => void
}

const PhotoDetail = ({ photo, onClose }: PhotoDetailParams) => (
    <div className='blocking-layer'>
        <div className="photo-detail-modal">
            <label>{photo.title}</label>
            <img 
                className='photo-detail' 
                alt={photo.title} 
                src={getFlickrImageUrl(photo)} 
            />
            <button className='photo-detail-close' onClick={onClose}>Close</button>
        </div>
    </div>
)

export default PhotoDetail;