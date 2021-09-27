import React from 'react';
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' ;
import { faUser } from '@fortawesome/free-solid-svg-icons';
import './Cast.css';

const Cast = (props) => {
    // console.log(props);
    const {name,age,role,payment,img} = props.movie; 
    return (
        <div className="cast">
            <img src={img} alt="" />
            <h2>Name:{name}</h2>
            <h4>Age:{age}</h4>
            <h4>Role:{role}</h4>
            <h4>Payment:{payment} Crore</h4>
            <button onClick={()=> props.handleBtn(props.movie)}><FontAwesomeIcon icon={faUser}  />Add to Movie</button>
        </div>
    );
};

export default Cast;