import HomePage from "../../cocktails/presentation/pages/home_page/HomePage";
import CategoryPage from "../../cocktails/presentation/pages/category_page/CategoryPage";
import ErrorPage from "../../cocktails/presentation/pages/ErrorPage";
import React from "react";
import CocktailPage from "../../cocktails/presentation/pages/cocktailPage/CocktailPage";
import {Route, Routes} from "react-router-dom";

//home, category, error_page
export const HOME = 'home';
export const CATEGORY = 'category';
export const COCKTAIL = 'cocktail'
export const ERROR = 'error_page';
// /cocktail?=11007

function Router() {
return(
    <Routes>
            <Route path={'/'} element={<HomePage/>}/>
            <Route path={`/${HOME}` } element={<HomePage/>}/>
            <Route path={`/${CATEGORY}`} element={<CategoryPage/>}/>
            <Route path={`/${CATEGORY}/:category_slug`} element={<CategoryPage/>}/>
            <Route path={`/${COCKTAIL}`} element={<CocktailPage/>}/>
            <Route path={'*'} element={<ErrorPage/>}/>
    </Routes>
)
}

export default Router;