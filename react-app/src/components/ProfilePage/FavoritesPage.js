import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { thunkAllFavPosts } from "../../store/post";
import { NavLink } from "react-router-dom";
import Loading from "../Loading/loading";
import OpenModalButton from "../OpenModalButton";
import ProfileForm from "./EditProfilePage";

const FavoritesPage = () => {
    const dispatch = useDispatch()
    const [isLoading, setIsLoading] = useState(true)
    const allFavPosts = useSelector(state => state.post.currentUserFav)
    const currUser = useSelector(state => state.session.user)
    const check = Object.values(allFavPosts)
     useEffect(() => {
        dispatch(thunkAllFavPosts())
        setTimeout(() => {
            setIsLoading(false)
        }, 500);
    }, [dispatch])

    if (isLoading === true) return <Loading />

    return (
        <div className='profileCont'>
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
                    {currUser.first_name} - Favorites
                </h3>
            {check.length ? Object.values(allFavPosts).map(post => {
                return (
                    <li className='singlePostCont' key={post.id}>
                        <div className='homePostTitle'>
                            {post.title}
                        </div>
        
                        <div>
                            {post.category}
                        </div>
        
                        <br />
                        <div className='postBodyCont'>
                                {post.body.slice(0, 100) + "..."}
                        </div>
                            <div>
                                {post.anonymous ? 'Anonymous' : post.user.first_name} - {post?.created_at.slice(0, 16)}
                            </div>
                            
                            <div className='viewCont'>
                        <div className='viewPost'>
                            <NavLink to={`/postPage/${post.id}`}>View more Posts</NavLink>
                        </div>
                            </div>
                        <br />
                    </li>
                )
            }) : <div className='none'>You Have No Favorites Yet!</div> }
            </ul>
        </div>
    )
}

export default FavoritesPage