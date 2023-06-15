import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import PostForm from '../Posts/PostOneForm';
import OpenModalButton from '../OpenModalButton';

function Navigation({ isLoaded }){
	const sessionUser = useSelector(state => state.session.user);

	return (
		<ul class='navContainer'>
			<li>
				<NavLink exact to="/">Home</NavLink>
			</li>
			{isLoaded && (
				<div class='navLiCont'>
				<li>
					{sessionUser ? <OpenModalButton
					buttonText="Post Your Love Story!"
					 modalComponent={<PostForm />}
					 /> 
					 : null}
				</li>
				<li>
					<ProfileButton user={sessionUser} />
				</li>
				</div>
			)}
		</ul>
	);
}

export default Navigation;