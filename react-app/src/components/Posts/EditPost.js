import PostForm from "./PostOneForm";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { thunkAllCurrPosts, thunkAllPosts, thunkOnePost } from "../../store/post";

const EditPost = ({ post }) => {
    
    const dispatch = useDispatch()
    // const { postId } = useParams()
    // const post = useSelector(state => state.post.singlePost[postEdit.id])
    // console.log(post)
    // useEffect(() => {
        // dispatch(thunkOnePost(post))
        // dispatch(thunkAllCurrPosts())
    // }, [dispatch])

    return (
        <>
        <PostForm 
        post = {post}
        // postId = {postEdit.id}
        formType = 'Edit Post'
        />

        </>
    )
}

export default EditPost