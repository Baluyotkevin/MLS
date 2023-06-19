import { thunkAllCurrPosts } from "../../store/post"
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from "react";
import './ProfilePage.css'
import OpenModalButton from "../OpenModalButton";
import EditPost from '../Posts/EditPost';
import DeletePost from "../Posts/DeletePost";
import { NavLink } from "react-router-dom";
import ProfileForm from "./EditProfilePage";



const ProfilePage = () => {
    const dispatch = useDispatch()
    const allCurrPosts = useSelector(state => state.post.currentUserPosts)
    const currUser = useSelector(state => state.session.user)

    useEffect(() => {
        dispatch(thunkAllCurrPosts())
    }, [dispatch])

    // if (!allCurrPosts) return 'hi'

    return (
        <div class='profileCont'>
            <div>
                
                <img class='profileImg' src={currUser.profile_img} />
            <div>
                <OpenModalButton
                buttonText='Edit Profile'
                modalComponent={<ProfileForm user={currUser} />}
                />
                <div>Followers</div>
                <div>Favorites</div>
            </div>
            </div>
            <ul class='postCont'>
                <h3 className='profileHeader'>
                    {currUser.first_name} - Posts
                </h3>
                {!allCurrPosts.length ? Object.values(allCurrPosts).map(post => {
                    // console.log(post.root_user_id)
                    // console.log(post.parent_id)
                    return (
                        <li className='singlePostCont'>
                            {post.parent_id == undefined ? 
                            <>
                            <div className='modalCont'>
                            <OpenModalButton
                            buttonText='Edit'
                            modalComponent={<EditPost post={post} />}
                            />
                            <OpenModalButton
                            buttonText='Delete'
                            modalComponent={<DeletePost post={post} />}
                            />
                            </div>
                            <div className='homePostTitle'>
                                {post.title}
                            </div>

                            <div>
                                {post.category}
                            </div>
                            <br />

                            <div class='body'>
                                {post.body}
                            </div>
                            <div>
                                {post.anonymous ? 'Anonymous' : post.user.first_name} - {post?.created_at.slice(0, 16)}
                            </div>
                            <div className='viewPost'>
                            <NavLink to={`/postPage/${post.id}`}>View more Posts</NavLink>
                        </div>
                            <br />
                            </>
                            : null}
                        </li>
                    )
                }) : "You Haven't Posted Your Love Story Yet!" } 
            </ul>
        </div>
    )
}

export default ProfilePage