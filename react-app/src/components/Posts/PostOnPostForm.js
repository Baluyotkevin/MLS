import { useDispatch } from "react-redux";
import { useState } from "react";
import { useHistory } from 'react-router-dom';
import { thunkCreatePostonPost, thunkOnePost, thunkEditPostOnPost } from "../../store/post";
import { useModal } from "../../context/Modal";

const PostOnPostForm = ({ postId, post, formType }) => {
    const dispatch = useDispatch()
    const history = useHistory()
    const [body, setBody] = useState(post?.body)
    const [title, setTitle] = useState(post?.title)
    const [anonymous, setAnonymous] = useState(post?.anonymous)
    const [validationErrors, setValidationErrors] = useState({})
    const { closeModal } = useModal()

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        let errors = {}

        if(title.length < 5) errors.title = "Please enter 5 characters or more"
        if(title.length > 30) errors.title = "You cannot exceed 30 characters"
        if(body.length < 10) errors.body = "Please enter 10 characters or more"
        if(body.length > 1300) errors.body = "You cannot exceed 1300 characters"
        // const check = dispatch(thunkOnePost(postId + 1))
        // if(check.children) errors.check = "You've already created a post"
        setValidationErrors(errors)
        if(Object.keys(errors).length) return

        post = {
            ...post,
            title,
            body
        }
        console.log(post)

        if (formType === 'Create Post') {
            await dispatch(thunkCreatePostonPost(post, postId))
            .then(closeModal)
            // history.push(`/postPage/${postId}`)
            dispatch(thunkOnePost(postId))
        }

        if (formType === 'Edit Post') {
            await dispatch(thunkEditPostOnPost(post))
            .then(closeModal)
            // dispatch(thunkOnePost(postId))
            // dispatch(thunkAllPosts())
        }
    }

    return (
        <div>
        <form onSubmit={handleSubmit}>
            <div className='errors'>
            {validationErrors.title}
            </div>
            <div>
            <div className='createPostTitle'>Title</div>
                <input
                type='text'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div className='errors'>
            {validationErrors.body}
            </div>
            <div>
            <div className='createPostBody'>Body</div>
                <textarea
                type='text'
                value={body}
                onChange={(e) => setBody(e.target.value)}
                />
            </div>
            <button type='submit'> Submit </button>
        </form>
        </div>
    )

}

export default PostOnPostForm
