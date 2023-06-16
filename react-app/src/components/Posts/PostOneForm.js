import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom';
import { thunkCreatePost, thunkAllCurrPosts, thunkEditPost } from "../../store/post";
import OpenModalButton from "../OpenModalButton";
import { useModal } from "../../context/Modal";

const PostForm = ({post, formType}) => {
    const dispatch = useDispatch()
    const history = useHistory()
    const [body, setBody] = useState(post?.body)
    const [title, setTitle] = useState(post?.title)
    const [category, setCategory] = useState(post?.category)
    const [anonymous, setAnonymous] = useState(post?.anonymous)
    const [validationErrors, setValidationErrors] = useState("")
    const { closeModal } = useModal()
    
    const handleSubmit = async (e) => {
        e.preventDefault()

        let errors = {}

        // if (!category) return 'this is not a category'

        post = {
            ...post,
            title,
            body,
            category,
            anonymous
        }

        if (formType === 'Create Post') {
            await dispatch(thunkCreatePost(post))
            .then(closeModal)
            dispatch(thunkAllCurrPosts())
            // history.push('/')
        }

        if (formType === 'Edit Post') {
            await dispatch(thunkEditPost(post))
            .then(closeModal)
            dispatch(thunkAllCurrPosts())
            // history.push('/')
        }
    }

    return (
        <div>
        <form onSubmit={handleSubmit}>
            <div>
                <div>Title</div>
                <input
                type='text'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                />
            </div>

            <div>
                <div>Body</div>
                <textarea
                type='text'
                value={body}
                onChange={(e) => setBody(e.target.value)}
                />
            </div>

        <div class='selectPost'>
            {formType === 'Edit Post' ? null : 
            <>
            <select onChange={(e) => setCategory(e.target.value)}>
                <option value="">--Select Category--</option>
                <option value = "Beautiful" > Beautiful </option>
                <option value = "Horrible" > Horrible </option>
            </select>
            <select onChange={(e) => setAnonymous(e.target.value)}>
                    <option value = "">--Anonymous?--</option>
                    <option value = {true}> Yes </option>
                    <option value = {false}> No </option>
            </select>
            </>
            }
            </div>
            <div className='submitButtCont'>

            <button type='submit'> Submit </button>
            </div>
        </form>
        </div>
    )

}

export default PostForm