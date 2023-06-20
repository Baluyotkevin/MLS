import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import "./Footer.css"

function Footer({ isLoaded }){
	const sessionUser = useSelector(state => state.session.user);

	return (
		<ul class='footerContainer'>
			{isLoaded && (
                <a href='https://www.linkedin.com/in/kevin-baluyot-2102b5bb/'>
                    LinkedIn
                </a>
			)}
		</ul>
	);
}

export default Footer;