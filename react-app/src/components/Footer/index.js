import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import "./Footer.css"

function Footer({ isLoaded }){
	const sessionUser = useSelector(state => state.session.user);

	return (
		<ul class='footerContainer'>
			{isLoaded && (
				<div className='footBody'>
                	<a className='footItems' href='https://www.linkedin.com/in/kevin-baluyot-2102b5bb/'>
                    	LinkedIn
                	</a>
					<a className='footItems' href='https://github.com/Baluyotkevin'>GitHub</a>
				</div>
			)}
		</ul>
	);
}

export default Footer;