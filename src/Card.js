import React from 'react';
import 'tachyons'

const Card = (params) => {
    const { id,name,email,username } = params.user;
    return (
        <div className='bg-light-green dib br3 pa3 ma2 grow  shadow-5' id={id}>
            <img src={`https://robohash.org/${username}}?set=set2`} alt='Robo Face'></img>
            <h3>{name}</h3>
            <h4><em>{email}</em></h4>
        </div>
    );
}
export default Card;
