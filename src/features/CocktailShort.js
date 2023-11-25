import React from 'react';
//rsf
function CocktailShort(props) {
    return (
        <div>
            <img src={props.thumb} style={{width:'50ps', height:'50px'}}/>
            <span>{props.name}</span>
        </div>
    );
}

export default CocktailShort;