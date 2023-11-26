import React, {useContext} from 'react';
import style from './CategoryPage.module.css';
import {H1} from "../../../general/style/components/buttons";
import {NavCategoryItem} from "../../../general/style/components/items";
import CocktailShort from "../../CocktailShort";
import {AppContext} from "../../../general/context/context";

const CategoryPage = (props) => {
    const context = useContext(AppContext);
    return (
        <>
            <H1>Category page</H1>
            <div className={style.categories_container}>{
                context.categories.map((category) => {
                    return <NavCategoryItem
                        key={category}
                        onClick={() => {
                            context.getByCategory(category)
                        }}>
                        {category}
                    </NavCategoryItem>;
                })
            }</div>
            <div>
                {
                    context.categoryCocktails.map((cocktailShort) => {
                        return <CocktailShort name={cocktailShort.name}
                                              thumb={cocktailShort.thumb}/>
                    })
                }
            </div>
        </>
    )
}


export default CategoryPage;