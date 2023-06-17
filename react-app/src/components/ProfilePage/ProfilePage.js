import { thunkAllCurrPosts } from "../../store/post"
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from "react";
import './ProfilePage.css'
import OpenModalButton from "../OpenModalButton";
import EditPost from '../Posts/EditPost';
import DeletePost from "../Posts/DeletePost";


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
                <div>Followers</div>
                <div>Favorites</div>
            </div>
            </div>
            <ul>
                <div>
                    {currUser.first_name} - Posts
                </div>
                {!allCurrPosts.length ? Object.values(allCurrPosts).map(post => {
                    // console.log(post.root_user_id)
                    // console.log(post.parent_id)
                    return (
                        <li>
                            {post.parent_id == undefined ? 
                            <>
                            <OpenModalButton
                            buttonText='Edit'
                            modalComponent={<EditPost post={post} />}
                            />
                            <OpenModalButton
                            buttonText='Delete'
                            modalComponent={<DeletePost post={post} />}
                            />
                            <div class='title'>
                                {post.title}
                            </div>

                            <div>
                                {post.category}
                            </div>
                            <br />

                            <div class='body'>
                                {post.body}
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