import {categoriesFake, cocktail1} from "./fakes";

export const getRandomCocktail = () => {
    return JSON.parse(cocktail1);
}
export const getCategories = () => {
    return JSON.parse(categoriesFake);
}
