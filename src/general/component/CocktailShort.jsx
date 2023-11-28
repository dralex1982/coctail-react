import React from 'react';
import {useNavigate} from "react-router-dom";

//rsf
function CocktailShort(props) {
    const navigate = useNavigate();
    return (
        <div className='col-3 p-2'>
            <div role='button' className='card ' onClick={() => {
                navigate('/cocktail?id=' + props.data.id)
            }}>
                <img src={props.data.thumb} className='card-img-top'/>
                <div className='card-body'>
                    <span className='card-text'>{props.data.name}</span>
                </div>
            </div>
        </div>
    );
}

export default CocktailShort;