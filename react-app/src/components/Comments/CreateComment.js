import CommentsForm from "./CommentsForm";
import './Comments.css'
const CreateComment = ({post}) => {

    const comment = {
        body: ""
    }

    return (
        <>
        <h2 className='h2Comment'>Comment</h2>
        <CommentsForm
        comment={comment}
        postId={post.id}
        formType = 'Create Comment'
        />
        </>
    )
}

export default CreateComment