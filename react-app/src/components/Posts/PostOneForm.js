import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom';
import { thunkCreatePost, thunkAllCurrPosts } from "../../store/post";
import OpenModalButton from "../OpenModalButton";
import { useModal } from "../../context/Modal";

const PostForm = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const [body, setBody] = useState("")
    const [title, setTitle] = useState("")
    const [category, setCategory] = useState("")
    const [anonymous, setAnonymous] = useState("")
    const [validationErrors, setValidationErrors] = useState("")
    const { closeModal } = useModal()
    
    const handleSubmit = async (e) => {
        e.preventDefault()

        let errors = {}

        // if (!category) return 'this is not a category'

        const post = {
            title,
            body,
            category,
            anonymous
        }

        await dispatch(thunkCreatePost(post))
        .then(closeModal)
        dispatch(thunkAllCurrPosts())
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
                <select onChange={(e) => setCategory(e.target.value)}>
                    <option value="">--Select Category--</option>
                    <option value = "Beautiful" > Beautiful </option>
                    <option value = "Horrible" > Horrible </option>
                </select>
            </div>

            <div>
                <select onChange={(e) => setAnonymous(e.target.value)}>
                    <option value = "">--Anonymous?--</option>
                    <option value = {true}> Yes </option>
                    <option value = {false}> No </option>
                </select>
            </div>
            <button type='submit'> Submit </button>
        </form>
        </div>
    )

}

export default PostForm