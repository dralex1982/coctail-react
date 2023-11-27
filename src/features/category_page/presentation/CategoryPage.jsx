import React, {useContext} from 'react';
import style from './CategoryPage.module.css';
import {H1} from "../../../general/style/components/buttons";
import {NavCategoryItem} from "../../../general/style/components/items";
import CocktailShort from "../../../general/component/CocktailShort";
import {AppContext} from "../../../general/context/context";

const CategoryPage = (props) => {
    const context = useContext(AppContext);
    const categoryCocktails = context.categoryCocktails;
    return (
        <div className='container'>
            <H1>Select category</H1>
            <div className='row'>
                <nav className='navbar navbar-expand-lg bg-body-tertiary'>
                    <ul className='navbar-nav'>
                        {
                            context.categories.map((category) => {
                                return <li className='nav-item'> role='button'
                                    <a className='nav-link'>
                                        <NavCategoryItem
                                            key={category}
                                            onClick={() => {
                                                context.getByCategory(category)
                                            }}>
                                            {category}
                                        </NavCategoryItem>
                                    </a>
                                </li>;
                            })
                        }
                    </ul>
                </nav>
            </div>
            <div className={'row'}>
                {
                    context.categoryCocktails.map((cocktailShort, index) => {
                        return <CocktailShort
                            key={index}
                            data={cocktailShort}
                        />
                    })
                }
            </div>
        </div>
    )
}


export default CategoryPage;