import CommentsForm from "./CommentsForm";

const CreateComment = ({post}) => {

    const comment = {
        body: ""
    }

    return (
        <>
        <h2>Comment</h2>
        <CommentsForm
        comment={comment}
        postId={post.id}
        formType = 'Create Comment'
        />
        </>
    )
}

export default CreateComment