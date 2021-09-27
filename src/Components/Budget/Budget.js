import React from 'react';

const Budget = (props) => {
    // console.log(props.budget);
    const {budget} = props;
    
    let total = 0;
    let name ;
    for(const singleCast of budget){
        
        total = total + singleCast.payment;
        name = singleCast.name;
        
    }
    // console.log(singleCast.name);
    return (
        <div>
            <h2>Movie Cast Added: {props.budget.length}</h2>
             <p>Name:{name}</p>
            <h3>Total Budget:{total} Crore</h3>
        </div>
    );
};

export default Budget;