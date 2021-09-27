import React, { useEffect, useState } from 'react';
import Budget from '../Budget/Budget';
import Cast from '../Cast/Cast';
import './Movie.css'

const Movie = () => {
    const [casts,setCasts] = useState([]);
    useEffect(()=>{
        fetch('./movie.JSON')
        .then(res => res.json())
        .then(data => setCasts(data));
    },[]);

    const [budget,setBudget] = useState([]);
    const handleBtn = (casts) =>{
        const newCast = [...budget,casts];
        setBudget(newCast);
        // console.log('fuck you');
    }
    // console.log(budget);
    
   
    return (
        <div className="Movie-container">
            <div className="actors-container">

            {
                 casts.map(cast => <Cast 
                    key={cast.key}
                     movie={cast}
                     handleBtn={handleBtn}
                     ></Cast> ) 
             }
                 
            </div>


            <div className="budget-container">
                <Budget budget = {budget}></Budget>
            </div>
        </div>
    );
};

export default Movie;