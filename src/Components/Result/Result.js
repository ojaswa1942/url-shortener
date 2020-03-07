import React from 'react';

const Result = ({result}) =>{

	const showPrompt = () => {
        navigator.clipboard.writeText(result);
        document.querySelector("#dummyIP").style.color = "#F4F4F4";
        setTimeout(()=> {
        	document.querySelector("#dummyIP").style.color = "#AAAAAA"
        }, 2000)
	}

	return(
		<div className="sans-serif near-white dib v-mid f5">
			<br />
			Your trimmed link is: <br />
			<a onClick = {(e) =>{e.preventDefault(); showPrompt();}} className="link underline white pointer db" href={result} > {result} </a>
			<div className="light-silver pa2" id="dummyIP"> Copied to clipboard! </div>
  		</div>
	);
}
export default Result;