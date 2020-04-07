import React from 'react';

function ArtCard({ art }) {
    return (
        <div>
            <h2>{art.title}</h2>
            <h3>{art.artist}</h3>
            <p>{art.creation_date}</p>
            <p>{art.type}; {art.medium_support}</p>
            <p>{art.credit_line}</p>
            <h4>{art.description}</h4>
            {/* <p>{art.accession_number}</p> */}
        </div>
    );
}

export default ArtCard;