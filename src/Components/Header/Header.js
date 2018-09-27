import React from 'react';
// import './ImageForm.css';

const Header = ({onInput, onClick, onKey}) =>{
	return(
		<header className="bg-gold sans-serif">
			<div className="mw9 center pa3 pt5-ns ph7-l pb1">

			  <h3 className="f2 f1-m f-headline-l measure-narrow lh-title mv0">
			    <span className="bg-dark-gray lh-copy white pa1 tracked-tight">
			      Cut the Crap
			    </span>
			  </h3>
			  <h4 className="f3 dark-gray fw1 georgia i">Shorten those long URLs for convenience.</h4>
			</div>
  		</header>
	);
}
export default Header;