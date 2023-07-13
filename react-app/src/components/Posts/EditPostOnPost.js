import PostOnPostForm from "./PostOnPostForm"



const EditPostOnPost = ({ post }) => {

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