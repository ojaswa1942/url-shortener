import React from 'react';
import './Form.css';

const Form = ({onInput, onClick, onKey}) =>{
	return(
			<div className='center mv3'>
				<div className='form ma4 center pa4 mw8'>
					<input type='text' placeholder='Enter URL here' 
					className='mv1 f6 f5-l input-reset bn fl black-80 bg-white pa3 lh-solid w-100 w-75-m w-80-l br2-ns br--left-ns' 
					onKeyPress={onKey} 
					onChange={onInput} />
					<button onClick={onClick} className='mv1 f6 f5-l button-reset fl pv3 tc bn bg-animate hover-bg-dark-gray hover-gold pointer w-100 w-25-m w-20-l br2-ns br--right-ns dark-gray bg-gold'>Trim</button>
				</div>
				<div id='error' className='f4 red center hidden v-mid'>Invalid URL </div>
			</div>		
	);
}
export default Form;