import { thunkAllCurrPosts } from "../../store/post"
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from "react";
import './ProfilePage.css'
import { NavLink } from "react-router-dom";



const ProfilePage = () => {
    const dispatch = useDispatch()
    const allCurrPosts = useSelector(state => state.post.currUserPosts)
    const currUser = useSelector(state => state.session.user)
    console.log('hello', currUser.profile_img)

    useEffect(() => {
        dispatch(thunkAllCurrPosts())
    }, [dispatch])

    if (!allCurrPosts) return 'hi'

    return (
        <div class='profileCont'>
            <div>
                <img class='profileImg' src={currUser.profile_img} />
            <div>
                <div>Followers</div>
                <div>Favorites</div>
                <NavLink to='/comments/current'>Your Comments</NavLink>
            </div>
            </div>
            <ul>
                {!allCurrPosts.length ? Object.values(allCurrPosts).map(post => {
                    return (
                        <li>
                            <div class='title'>
                                {post.title}
                            </div>

                            <br />

                            <div class='body'>
                                {post.body}
                            </div>
                        
                            <br />
                        </li>
                    )
                }) : "You Haven't Posted Your Love Story Yet!" } 
            </ul>
        </div>
    )
}

export default ProfilePage