import PostForm from "./PostOneForm";
import { useDispatch } from "react-redux";
const EditPost = ({ post }) => {
    
    const dispatch = useDispatch()

    return (
        <>
        <PostForm 
        post = {post}
        formType = 'Edit Post'
        />
        </>
    )
}

export default EditPost