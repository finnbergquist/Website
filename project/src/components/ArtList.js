import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import ArtCard from './ArtCard';

function ArtList() {

    // initial state of art data 
    const [art, setArt] = useState([])
    
    useEffect(() => {
        const getArtData = () => {
            axios
                .get('https://artmuseumdraft.herokuapp.com/art/all')
                .then(response => {
                    // successful 
                    console.log("Art data response", response.data)

                    // save art data to state 
                    setArt(response.data)
                })
                .catch(error => {
                    // failure 
                    console.error("The API is currently down.", error)
                })
        }
        // call function to get data 
        getArtData(); 

    }, []); 
    

    return (
        <section>
            {art.map(artwork => {   
                // create a art card for each artwork 
                return <ArtCard art = {artwork} key = {art.id}/>
            })}
        </section>
    );
}

export default ArtList;