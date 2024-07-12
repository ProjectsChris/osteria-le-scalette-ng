export interface ResDishes {
    items: {
        categoria_menu: string, // id category menu
		nome: string,
		tipologia: string,
    }[]
}

export interface CategoryMenu {
    id: string
    name: string,
}

export interface Dish {
    idCategory: string
    typeDish: string
    name: string,
}