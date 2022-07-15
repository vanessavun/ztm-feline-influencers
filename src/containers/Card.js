import React from 'react';

// useState, useEffect

const Card = ({ speakBox }) => {
    return (
        <div className='tc bg-purple'>
            {speakBox ? 
                    <img alt='cats' src={`https://cataas.com/cat/says/${speakBox}`} />
                     : <img alt='default cats pic' src={'https://cataas.com/cat/gif'} />
            }
        </div>
    )
}

export default Card;