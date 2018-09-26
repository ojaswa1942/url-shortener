import React from 'react';
// import './ImageForm.css';

const Form = ({onInput, onClick, onKey}) =>{
	return(
		<div className="">

			<div className='center pv6'>
				<div className='form gradient-pattern center pa4 br3 shadow-2 w-60'>
					<input type='text' placeholder='Enter URL here' 
					className='f4 pa2 w-70 center' 
					onKeyPress={onKey} 
					onChange={onInput} />
					<button onClick={onClick} className='w-30 grow f4 link ph3 pv2 dib dark-gray bg-gold'>Detect</button>
				</div>
			</div>
		</div>		
	);
}
export default Form;