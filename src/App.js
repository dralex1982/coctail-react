import React, {Component} from 'react';
import Router from "./general/navigation/router";
import Navigation from "./general/navigation/Navigation";
import AppContexWrapper from "./general/context/AppContexWrapper";

class App extends Component {
    render() {
        return (
            <AppContexWrapper>
                <Navigation/>
                <Router/>
            </AppContexWrapper>
        );
    }
}
export default App;


