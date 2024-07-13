export interface CategoryMenu {
    id: string
    name: string,
}

export interface ResponseCategoryMenu {
    id: string;
    name: string;
}

export interface Dish {
    idCategory: string
    typeDish: string
    name: string,
}

export interface ResponseDish {
    categoria_menu: string;
    tipologia: string;
    nome: string;
}