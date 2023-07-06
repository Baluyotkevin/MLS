import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { thunkAllPosts } from "../../store/post";
import { thunkAllUsers } from "../../store/user";
import Post from "./Posts"
import Loading from "../Loading/loading";
import './Post.css'
import CarouselImages from "../Carousel/Carousel";

const GetAllPosts = () => {
    const dispatch = useDispatch()
    const allPosts = useSelector(state => state.post.allPosts)
    const [isLoading, setIsLoading] = useState(true)

    console.log(allPosts)
    useEffect(() => {
        dispatch(thunkAllPosts())
        dispatch(thunkAllUsers())
        setTimeout(() => {
            setIsLoading(false)
        }, 500);
    }, [dispatch])

    if (isLoading === true) return <Loading />

    return (
        <>
{/*
        <div className='storyHead'>
            <h1>All Love Stories</h1>
            <h1>Let These Stories Inspire Your Love Story!</h1>
        </div>
        <div className='postBody'>
            <div className='carouselImgCont'>
                <CarouselImages />
            </div>
            <ul className='postCont'>
            {Object.values(allPosts).map(post => {
                if (post.root_post_id === null) {
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
                            <div className='viewComm'>
                                <NavLink to={`/post/${post.id}/comments`}><i class="fa-regular fa-comment"></i> View Comments</NavLink>
                            </div>
                            
                            <div className='viewPost'>
                                <NavLink to={`/postPage/${post.id}`}>View more Posts</NavLink>
                            </div>
                                </div>
                            <br />
                        </li>
                    )
                } else {
                    return null
                }
            })}
            </ul>
        </div>
        </> */}

        <div className='storyHead'>
            <h1>All Love Stories</h1>
            <h1>Let These Stories Inspire Your Love Story!</h1>
        </div>
        <div className='postBody'>
            <div className='carouselImgCont'>
                <CarouselImages />
            </div>
            <ul className='postCont'>
                { allPosts && Object.values(allPosts).map(post => (
                    <Post key={ post.id } postData={post} />
                ))
                }
            </ul>
        </div>
    </>
    )
}

export default GetAllPosts