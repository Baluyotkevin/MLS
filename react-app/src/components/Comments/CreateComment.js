import CommentsForm from "./CommentsForm";
import './Comments.css'
const CreateComment = ({post}) => {
    // console.log(post)
    const comment = {
        body: ""
    }
    console.log('do i even geti n here')
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