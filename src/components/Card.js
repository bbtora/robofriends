import React from 'react';

const Card = ({ name, email, id }) => {
    // const { name, email, id } = props;
    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            {/* For width and height, we use ? followed by widthxheight in the robohash link */}
            <img src={`https://robohash.org/${id}?size=200x200`} alt="robots"/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;