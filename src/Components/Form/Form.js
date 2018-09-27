import React from 'react';
// import './ImageForm.css';

const Form = ({onInput, onClick, onKey}) =>{
	return(
		<div className="">

			<div className='center '>
				<div className='form gradient-pattern center pa4 mw8'>
					<input type='text' placeholder='Enter URL here' 
					className='mv1 f6 f5-l input-reset bn fl black-80 bg-white pa3 lh-solid w-100 w-75-m w-80-l br2-ns br--left-ns' 
					onKeyPress={onKey} 
					onChange={onInput} />
					<button onClick={onClick} className='mv1 f6 f5-l button-reset fl pv3 tc bn bg-animate hover-bg-dark-gray hover-gold pointer w-100 w-25-m w-20-l br2-ns br--right-ns dark-gray bg-gold'>Trim</button>
				</div>
			</div>
		</div>		
	);
}
export default Form;