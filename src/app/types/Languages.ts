export interface Languages {
    id: string
    language: string,
    code: string,
    enabled: boolean,
    image: string
}

export interface ResponseLanguages {
    items: Languages[]
}