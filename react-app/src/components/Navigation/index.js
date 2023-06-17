import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import CreatePost from '../Posts/CreatePost';
import OpenModalButton from '../OpenModalButton';

function Navigation({ isLoaded }){
	const sessionUser = useSelector(state => state.session.user);

	return (
		<ul class='navContainer'>
			<li>
				<NavLink exact to="/"><img className='Logo' src='https://kevinbawsbucket.s3.us-west-1.amazonaws.com/Screenshot+2023-06-16+at+6.29.38+PM.png' /></NavLink>
			</li>
			{isLoaded && (
				<div class='navLiCont'>
				<li className='navPost'>
					{sessionUser ? <OpenModalButton
					buttonText="Post Your Love Story!"
					 modalComponent={<CreatePost />}
					 /> 
					 : null}
				</li>
				<li className='navProfButt'>
					<ProfileButton user={sessionUser} />
				</li>
				</div>
			)}
		</ul>
	);
}

export default Navigation;