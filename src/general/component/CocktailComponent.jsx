import React from 'react';
import * as Icons from "react-bootstrap-icons";
import style from "./CocktailComponent.module.css"

function CocktailComponent(props) {
    return (
        <div className={'container'}>
            <div className={'row'}>
                <h3>{props.cocktail.name}</h3>
                <div className={'col-12 text-center'}>
                    <img src={props.cocktail.imageURL}
                         className={style.cocktail_img}
                         loading={"lazy"}/>
                </div>
                <h5 className={'pt-3'}>
                    {
                        (props.cocktail.alcoholic.toLowerCase() === 'alcoholic') ?
                            <Icons.SlashCircle size={'20px'} color={'red'}/> :
                            <></>
                    }
                    Category - {props.cocktail.category}
                    <p>
                        {props.cocktail.instructions}
                    </p>
                    <em>
                        Glass type - {props.cocktail.glassType}
                    </em>

                </h5>
            </div>
        </div>
    );
}

export default CocktailComponent;