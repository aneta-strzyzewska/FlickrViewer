import type { Photo } from "./types"

type PhotoParams = {
    photo: Photo
}

const getFlickrImageUrl = (photo: Photo) => (
    `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`
) 

const PhotoView = ({photo}: PhotoParams) => {
    return <img src={getFlickrImageUrl(photo)} />
}

export default PhotoView;