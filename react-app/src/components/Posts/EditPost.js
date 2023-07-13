import PostForm from "./PostOneForm";
const EditPost = ({ post }) => {
    
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