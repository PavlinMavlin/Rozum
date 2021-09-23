import React from 'react';


export const BirthDate = (props) => {
    const birth = new Date(props.birthDate);
    const year = birth.getFullYear();
    const month = birth.getMonth().toString().padStart(2, 0);
    const date = birth.getDate().toString().padStart(2, 0);
    const turning = `${date}.${month}.${year}`;

    return (
        <div>{turning}</div>
    );
};