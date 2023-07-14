import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { thunkAllFavPosts } from "../../store/post";
import { NavLink } from "react-router-dom";
import Loading from "../Loading/loading";
import OpenModalButton from "../OpenModalButton";
import ProfileForm from "./EditProfilePage";
import FavoritesPost from "./FavoritesPost";

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
    }, [dispatch, allFavPosts.length])

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
            {Object.values(allFavPosts).map(post => (
                <FavoritesPost key={post.id} post={post} />
            ))}
            </ul>
        </div>
    )
}

export default FavoritesPage