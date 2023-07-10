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
    const allPostsArr = Object.values(allPosts)

    useEffect(() => {
        dispatch(thunkAllPosts())
        dispatch(thunkAllUsers())
        setTimeout(() => {
            setIsLoading(false)
        }, 500);
    }, [dispatch])

    // const handleSort = async (e) => {
    //     allPostsArr.sort((a,b) => new Date(b.created_at) - new Date(a.created_at))
    // }

    if (isLoading === true) return <Loading />

    return (
        <>
        <div className='storyHead'>
            <h1>All Love Stories</h1>
            <h1>Let These Stories Inspire Your Love Story!</h1>
        </div>
            {/* <button onClick={handleSort}>Newest</button> */}
        <div className='postBody'>
            <div className='carouselImgCont'>
                <CarouselImages />
            </div>
            <ul className='postCont'>
                {allPostsArr && allPostsArr?.map(post => (
                    <Post key={ post.id } postData={post} />
                ))
                }
            </ul>
        </div>
    </>
    )
}

export default GetAllPosts