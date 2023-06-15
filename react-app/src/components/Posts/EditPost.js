import PostOnPostForm from "./PostOneForm"
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { thunkOnePost } from "../../store/post";

const EditPost = () => {
    const dispatch = useDispatch()
    const { postId } = useParams()
    const post = useSelector(state => state.post.singlePost[postId])

    useEffect(() => {
        dispatch(thunkOnePost(post))
    }, [dispatch])

    return (
        <>
        <PostOnPostForm 
        post = {post}
        formType = 'Edit Post'
        />
        </>
    )
}

export default EditPost