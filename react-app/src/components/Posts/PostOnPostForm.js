import { useDispatch } from "react-redux";
import { useState } from "react";
import { useHistory } from 'react-router-dom';
import { thunkCreatePostonPost, thunkEditPost, thunkAllCurrPosts } from "../../store/post";
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
        if(title.length > 20) errors.title = "You cannot exceed 20 characters"
        if(body.length < 10) errors.body = "Please enter 10 characters or more"
        if(body.length > 355) errors.body = "You cannot exceed 355 characters"

        post = {
            ...post,
            title,
            body
        }
        console.log(post)

        if (formType === 'Create Post') {
            await dispatch(thunkCreatePostonPost(post, postId))
            .then(closeModal)
            dispatch(thunkAllCurrPosts())
        }

        if (formType === 'Edit Post') {
            await dispatch(thunkEditPost(post))
            history.push('/')
        }
    }

    return (
        <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Title
                <input
                type='text'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                />
                </label>
            </div>

            <div>
                <label>Body
                <textarea
                type='text'
                value={body}
                onChange={(e) => setBody(e.target.value)}
                />
                </label>
            </div>

            {/* <div>
                <select onChange={(e) => setAnonymous(e.target.value)}>
                    <option value = "" >--Anonymous?--</option>
                    <option value = {true}> Yes </option>
                    <option value = {false}> No </option>
                </select>
            </div> */}
            <button type='submit'> Submit </button>
        </form>
        </div>
    )

}

export default PostOnPostForm
