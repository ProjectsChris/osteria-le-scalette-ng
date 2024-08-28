export interface Languages {
    id: string
    lang: string,
    code: string,
    enabled: boolean,
    image: string
}

export interface ResponseLanguages {
    items: Languages[]
}