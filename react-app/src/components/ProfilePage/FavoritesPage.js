import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { thunkAllFavPosts } from "../../store/post";
import { NavLink } from "react-router-dom";
import Loading from "../Loading/loading";

const FavoritesPage = () => {
    const dispatch = useDispatch()
    const [isLoading, setIsLoading] = useState(true)
    const allFavPosts = useSelector(state => state.post.currentUserFav)
    const currUser = useSelector(state => state.session.user)
     useEffect(() => {
        dispatch(thunkAllFavPosts())
        setTimeout(() => {
            setIsLoading(false)
        }, 500);
    }, [dispatch])

    if (isLoading === true) return <Loading />

    return (
        <div className='postCont'>
            {allFavPosts && Object.values(allFavPosts).map(post => {
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
            })}
        </div>
    )
}

export default FavoritesPage