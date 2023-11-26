import React, {useContext} from 'react';
import {Button, H1} from "../../../general/style/components/buttons";
import {AppContext} from "../../../general/context/context";
import * as Icons from "react-bootstrap-icons";

const HomePage = (props) => {
    const {getRandomCocktail, cocktail} = useContext(AppContext);
    if(cocktail)
    return (
        <>
            <H1>Home page</H1>
            <Button className={'btn btn-success'} onClick={getRandomCocktail}>
              <Icons.ArrowClockwise size={20}/>Get random cocktail
            </Button>
            <h3>{cocktail.name}</h3>
            <img src={cocktail.imageURL + '/preview'}/></>
    )
    else
        return <h3>Loading</h3>
}

export default HomePage;

//rsi