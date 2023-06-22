import CommentsForm from "./CommentsForm";
import './Comments.css'

const CreateComment = ({post}) => {
    // console.log(post)
    const comment = {
        body: ""
    }
    return (
        <div className='createComm'>
            <h2 className='h2Comment'>Post Your Comment!</h2>
            <CommentsForm
                comment={comment}
                postId={post?.id}
                formType = 'Create Comment'
            />
        </div>
    )
}

export default CreateComment