import { thunkAllCurrPosts } from "../../store/post"
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from "react";
import './ProfilePage.css'
import OpenModalButton from "../OpenModalButton";
import EditPost from '../Posts/EditPost';
import DeletePost from "../Posts/DeletePost";
import { NavLink } from "react-router-dom";
import ProfileForm from "./EditProfilePage";
import Loading from "../Loading/loading";



const ProfilePage = () => {
    const dispatch = useDispatch()
    const allCurrPosts = useSelector(state => state.post.currentUserPosts)
    const currUser = useSelector(state => state.session.user)
    const check = Object.values(allCurrPosts)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        dispatch(thunkAllCurrPosts())
        setTimeout(() => {
            setIsLoading(false)
        }, 500);
    }, [dispatch])
    if (isLoading === true) return <Loading />

    return (
        <div class='profileCont'>
            <div>
                
                <img className='profileImg' src={currUser.profile_img} />
            <div className='editCont'>
                <OpenModalButton
                buttonText='Edit Profile'
                modalComponent={<ProfileForm user={currUser} />}
                />
            </div>
            </div>
            <ul class='postCont'>
                <h3 className='profileHeader'>
                    {currUser.first_name} - Posts
                </h3>
                {check.length ? Object.values(allCurrPosts).map(post => {
                    if (post.root_post_id === null) {
                        return (
                            <li className='singlePostCont'>
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
                                    <NavLink to={`/postPage/${post.id}`}>View Your Post</NavLink>
                                </div>
                                <br />
                                </>
                            </li>
                        )

                    } else {
                        return null
                    }
                }) : <div className='none' >You Haven't Posted Your Love Story Yet!</div> } 
            </ul>
        </div>
    )
}

export default ProfilePage