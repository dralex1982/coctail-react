import {Cocktail} from "../../domain/model/Cocktail";
import convertCategoryArray from "../../domain/use_cases/convertCategoryArray";
import {getByCategory, getCategories, getCocktail, getRandomCocktail} from "../../data/server/api";
import CocktailShort from "../../domain/model/CocktailShort";
import {createAsyncThunk} from "@reduxjs/toolkit";

export const getRandomCocktailAction = createAsyncThunk(
    'cocktail/getRandom', async () => {
        const result = await getRandomCocktail();
        console.log(result);
        const resObj = JSON.parse(result);
        return new Cocktail(resObj.drinks[0]);
    }
);
export const getCategoriesAction = createAsyncThunk(
    'cocktail/getCategories', async ()=>{
        const result = await getCategories();
        const resObj = JSON.parse(result);
        return convertCategoryArray(resObj.drinks);
    }
);
export const getByCategoryAction = createAsyncThunk(
    'cocktail/getByCategory', async (categoryName)=>{
        const result = await getByCategory(categoryName);
        const resObj = JSON.parse(result);
        return resObj.drinks.map(item => new CocktailShort(item));
    }
);
export const getCocktailByIdAction = createAsyncThunk(
    'cocktail/getById', async (id)=>{
        const result = await getCocktail(id);
        const resObj = JSON.parse(result);
        return new Cocktail(resObj.drinks[0]);
    }
);

