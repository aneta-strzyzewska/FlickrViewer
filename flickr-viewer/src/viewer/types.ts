export type Photo = {
    id: string,
    owner: string,
    secret: string,
    server: string,
    farm: number,
    title: string,
    ispublic: boolean,
    isfriend: boolean,
    isfamily: boolean
}

export type PhotoInfo = {
    urls: {
        url: {
            type: string,
            _content: string
        }[]
    }
}

export type PageContext = {
    page: number,
    pages: number,
    perpage: number,
    total: number,
    photo: Photo[]
}

export type ResponseContext = {
    photos: PageContext,
    stat: string
}
