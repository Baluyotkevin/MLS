import PostForm from "./PostOneForm";

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