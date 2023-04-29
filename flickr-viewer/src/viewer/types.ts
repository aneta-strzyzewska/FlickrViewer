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

export type SearchQuery = {
    text?: string,
    page?: string, 
    per_page?: string
}
