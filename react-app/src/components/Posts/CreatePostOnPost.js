import PostOnPostForm from "./PostOnPostForm";

const CreatePostOnPost = ({postId}) => {

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