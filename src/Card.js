import React from 'react';
import 'tachyons'

const Card = (params) => {
    const { id, firstName, lastName, quote, roboCode } = params.friend;
    return (
        <div className='bg-light-green dib br3 pa3 ma2 grow  shadow-5' id={id}>
            <img src={`https://robohash.org/${roboCode}}?200x200`} alt='Robo Face'></img>
            <h3>{`${firstName} ${lastName}`}</h3>
            <h4><em>{`"${quote}"`}</em></h4>
        </div>
    );
}
export default Card;
