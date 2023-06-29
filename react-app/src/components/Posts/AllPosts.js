import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { thunkAllPosts, thunkCreateLove, thunkDeleteLove, thunkOnePost } from "../../store/post";
// import OpenModalButton from "../OpenModalButton";
// import CreateComment from "../Comments/CreateComment";
import { thunkAllUsers } from "../../store/user";
import Post from "./Posts"

const GetAllPosts = () => {
    const dispatch = useDispatch()
    const allPosts = useSelector(state => state.post.allPosts)   
    const currUser = useSelector(state => state.session.user)
    const [post, setPost] = useState()
    useEffect(() => {
        dispatch(thunkAllPosts())
    }, [dispatch])
    

    return (
        <>
            <div className='postBody'>
        <div className='storyHead'>All Love Stories</div>
            { allPosts && Object.values(allPosts).map(post => (
                <Post key={ post.id } postData={post} />
            ))
            }
        </div>
    </>
    )
}

export default GetAllPosts