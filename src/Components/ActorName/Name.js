import React from 'react';

const Name = (props) => {
    const {actorName}= props
    return (
        <div>
             
            <p>{actorName.name}</p>
        </div>
    );
};

export default Name;