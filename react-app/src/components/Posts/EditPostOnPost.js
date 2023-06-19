import PostOnPostForm from "./PostOnPostForm"
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { thunkAllCurrPosts, thunkAllPosts, thunkOnePost } from "../../store/post";

const EditPostOnPost = ({ post }) => {
    
    const dispatch = useDispatch()
    // const { postId } = useParams()
    // const post = useSelector(state => state.post.singlePost[postEdit.id])
    // console.log(post)
    // useEffect(() => {
    //     dispatch(thunkOnePost(post))
    //     dispatch(thunkAllCurrPosts())
    // }, [dispatch])

    return (
        <>

        <PostOnPostForm
        post = {post}
        // postId = {postEdit}
        formType = 'Edit Post'
        />
        </>
    )
}

export default EditPostOnPost