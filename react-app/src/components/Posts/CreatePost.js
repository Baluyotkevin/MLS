import PostForm from "./PostOneForm";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, Fragment } from "react";
import { useHistory } from "react-router-dom";

const CreatePost = () => {
    const post = {
        title: "",
        body: "",
        category: "",
        anonymous: ""
    }

    return (
        <>
        <PostForm
        post = {post}
        formType = 'Create Post'
        />
        </>
    )
}

export default CreatePost