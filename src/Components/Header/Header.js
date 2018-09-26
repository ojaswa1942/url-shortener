import React from 'react';
// import './ImageForm.css';

const Header = ({onInput, onClick, onKey}) =>{
	return(
		<header className="bg-gold sans-serif">
			<div className="mw9 center pa3 pt5-ns ph7-l pb1">
			  {//<time class="f6 mb2 dib ttu tracked"><small>27 July, 2015</small></time>
			}
			  <h3 className="f2 f1-m f-headline-l measure-narrow lh-title mv0">
			    <span className="bg-black-90 lh-copy white pa1 tracked-tight">
			      Cut the Crap
			    </span>
			  </h3>
			  <h4 className="f3 fw1 georgia i">Shorten those long URLs for convenience.</h4>
			  {//<h5 className="f6 ttu tracked black-80">By Ojaswa Sharma</h5>
			}
			</div>
  		</header>
	);
}
export default Header;