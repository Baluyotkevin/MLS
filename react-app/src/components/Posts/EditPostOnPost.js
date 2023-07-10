import PostOnPostForm from "./PostOnPostForm"
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { thunkAllCurrPosts, thunkAllPosts, thunkOnePost } from "../../store/post";

const EditPostOnPost = ({ post }) => {
    
    const dispatch = useDispatch()


    return (
        <>

        <PostOnPostForm
        post = {post}
        formType = 'Edit Post'
        />
        </>
    )
}

export default EditPostOnPost