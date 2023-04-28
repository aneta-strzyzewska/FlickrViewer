import type { Photo } from "./types"
import './style.css'; 

type PhotoParams = {
    photo: Photo
}

const getFlickrImageUrl = (photo: Photo) => (
    `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`
) 

const PhotoView = ({photo}: PhotoParams) => {
    return <img className="photo-view" src={getFlickrImageUrl(photo)} />
}

export default PhotoView;