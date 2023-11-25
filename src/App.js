import React, {Component} from 'react';
import {route} from "./general/navigation/router";
import Navigation from "./general/navigation/Navigation";
import {getCategories, getRandomCocktail} from "./features/api";
import {Cocktail} from "./features/Cocktail";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 'home',
            currentCocktail: new Cocktail({}),
            categories: []
        }
    }

    componentDidMount() {
        this.getRandomCocktailApi();
        this.getCategoriesApi();
    }

    getRandomCocktailApi() {
        getRandomCocktail().then((result) => {
            console.log(result);
            const resObj = JSON.parse(result);
            const newCocktail = new Cocktail(resObj.drinks[0]);
            this.setState({...this.state, currentCocktail: newCocktail});
        })
    }

    getCategoriesApi() {
        getCategories().then((result) => {
            console.log(result);
            const resObj = JSON.parse(result);
            const categoriesArr = resObj.drinks.map((item) => item.strCategory);
            this.setState({...this.state, categories: categoriesArr});
        })
    }

    render() {
        return (
            <div>
                <Navigation changePage={(newPage) => {
                    this.setState({...this.state, page: newPage});
                }}/>
                {
                    route(this.state.page, {
                        getRandomCocktail: () => {
                            this.getRandomCocktailApi()
                        }, cocktail: this.state.currentCocktail,
                        categories: this.state.categories
                    })
                }
            </div>
        );
    }
}

export default App;


