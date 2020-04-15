import React, { useState } from 'react';
import axios from 'axios';

function AddArt(props) {
	console.log(props)
	const [art, setArt] = useState({
		artist: "",
		title: "",
		type: "",
		medium_support: "",
		desciption: "",
		creation_date: "",
		credit_line: "",
		accession_number: ""
	}); 

	const handleChange = event => setArt({...art, [event.target.name]: event.target.value})

	const handleSubmit = event => {
		event.preventDefault(); 
		axios
			.post(`https://artmuseumdraft.herokuapp.com/art`, art)
			.then(response => {
				console.log(response);
				// props.history.push('/Admin')
			})
			.catch(error => {
				console.log(error.response)
			})
	}

	return (
		<form onSubmit={handleSubmit} id="art-form">
			<input type="text"
					name="artist"
					placeholder="artist"
					value={art.artist}
					className="art-input"
					onChange={handleChange} />
			<input type="text"
					name="title"
					placeholder="title"
					value={art.title}
					className="art-input"
					onChange={handleChange} />
			<input type="text"
					name="type"
					placeholder="type"
					value={art.type}
					className="art-input"
					onChange={handleChange} />
			<input type="text"
					name="medium_support"
					placeholder="medium_support"
					value={art.medium_support}
					className="art-input"
					onChange={handleChange} />
			<input type="text"
					name="description"
					placeholder="description"
					value={art.description}
					className="art-input"
					onChange={handleChange} />
			<input type="text"
					name="creation_date"
					placeholder="creation_date"
					value={art.creation_date}
					className="art-input"
					onChange={handleChange} />
            <input type="text"
					name="credit_line"
					placeholder="credit_line"
					value={art.credit_line}
					className="art-input"
					onChange={handleChange} />
			<input type="text"
					name="accession_number"
					placeholder="accession_number"
					value={art.accession_number}
					className="art-input"
					onChange={handleChange} />
			
			<button type="submit">Add Artwork</button>
	    </form>
	);
}

export default AddArt;

