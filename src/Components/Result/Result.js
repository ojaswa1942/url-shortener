import React from 'react';
// import './ImageForm.css';

const Result = ({result}) =>{
	return(
		<div className="sans-serif near-white dib v-mid f5">
			<br />
			Your trimmed link is: <br />
			<span className="link underline white"> {result} </span>
  		</div>
	);
}
export default Result;