import HomePage from "../../features/home_page/presentation/HomePage";
import CategoryPage from "../../features/category_page/presentation/CategoryPage";
import ErrorPage from "../../features/ErrorPage";
import React from "react";
import {Route, Switch} from "react-router-dom";
import CocktailPage from "../../features/cocktailPage/presentation/CocktailPage";

//home, category, error_page
export const HOME = 'home';
export const CATEGORY = 'category';
export const COCKTAIL = 'cocktail'
export const ERROR = 'error_page';
// /cocktail?=11007

//changePage(pageName)
function Router() {
return(
    <Switch>
        <Route path={['/', `/${HOME}`]} component={HomePage} exact/>
        <Route path={`/${CATEGORY}`} component={CategoryPage}/>
        <Route path={`/${COCKTAIL}`} component={CocktailPage}/>
        <Route component={ErrorPage}/>
    </Switch>
)

}

export default Router;