import {useDispatch} from "react-redux";
import {setCategories, setRandomCocktail} from "./actions";
import {getRandomCocktail} from "../../data/fake/fakeApi";
import {Cocktail} from "../../domain/model/Cocktail";
import convertCategoryArray from "../../domain/use_cases/convertCategoryArray";
import {getCategories} from "../../data/fake/fakeApi";

export const getRandomCocktailAction = (dispatch) =>{
    const newCocktail = getRandomCocktail();
    const cocktailObj = new Cocktail(newCocktail.drinks[0]);
    dispatch(setRandomCocktail(cocktailObj));
};

export const getCategoriesAction = (dispatch) =>{
    const resObj = getCategories();
    const categoriesArr = convertCategoryArray(resObj.drinks);
    dispatch(setCategories(categoriesArr));
}