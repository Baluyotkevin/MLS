import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom';
import { thunkCreatePostonPost, thunkEditPost } from "../../store/post";
import { useParams } from "react-router-dom";

const PostOnPostForm = ({ postId, post, formType }) => {
    const dispatch = useDispatch()
    const history = useHistory()
    const [body, setBody] = useState(post?.body)
    const [title, setTitle] = useState(post?.title)
    const [anonymous, setAnonymous] = useState(post?.anonymous)
    const [validationErrors, setValidationErrors] = useState({})

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        let errors = {}

        post = {
            ...post,
            title,
            body
        }
        console.log(post)

        if (formType === 'Create Post') {
            await dispatch(thunkCreatePostonPost(post, postId))
            // history.push('/')
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

            <div>
                <select onChange={(e) => setAnonymous(e.target.value)}>
                    <option value = "" >--Anonymous?--</option>
                    <option value = {true}> Yes </option>
                    <option value = {false}> No </option>
                </select>
            </div>
            <button type='submit'> Submit </button>
        </form>
        </div>
    )

}

export default PostOnPostForm
