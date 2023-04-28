import { Photo } from "./types";

const getFlickrImageUrl = (photo: Photo) => (
    `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`
) 

export { getFlickrImageUrl }