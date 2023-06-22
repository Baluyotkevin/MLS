import PostOnPostForm from "./PostOnPostForm";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, Fragment } from "react";
import { useHistory } from "react-router-dom";

const CreatePostOnPost = ({postId}) => {
    // const { postId } = useParams()

    const post = {
        title: "",
        body: ""
    }

    return (
        <>
        <PostOnPostForm
        post = {post}
        postId = {postId}
        formType = 'Create Post'
        />
        </>
    )

}

export default CreatePostOnPost