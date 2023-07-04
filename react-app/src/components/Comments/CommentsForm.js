import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom';
import { thunkCreatePostonPost, thunkEditPost } from "../../store/post";
import { useParams } from "react-router-dom";
import { thunkAllCurrComments, thunkCreateComment, thunkEditComment } from "../../store/comment";
import { useModal } from "../../context/Modal";
import './Comments.css'

const CommentsForm = ({ postId, formType, comment }) => {
    const dispatch = useDispatch()
    const history = useHistory()
    const [body, setBody] = useState(comment?.body)
    const [validationErrors, setValidationErrors] = useState({})
    const { closeModal } = useModal()

    const handleSubmit = async (e) => {
        e.preventDefault()
        let errors = {}

        
        if (body.length < 5) errors.body = "Please enter 5 characters or more"
        if (body.length > 80) errors.body = "You cannot exceed 80 characters"
        setValidationErrors(errors)
        if(Object.keys(errors).length) return

        comment = {
            ...comment,
            body
        }

        if (formType === 'Create Comment') {
            await dispatch(thunkCreateComment(comment, postId))
            .then(closeModal)
            await dispatch(thunkAllCurrComments())
        }

        if (formType === 'Edit Comment') {
            await dispatch(thunkEditComment(comment))
            .then(closeModal)
            await dispatch(thunkAllCurrComments())
        }

    }

    return (
        <div>
            <form onSubmit ={handleSubmit}>
                <div className='errors'>
                    {validationErrors.body}
                </div>
                <div>
                    <textarea
                    type='text'
                    value={body}
                    className='commentText'
                    onChange={(e) => setBody(e.target.value)}
                    />
                </div>
                <div> 
                    <button type='submit'> Submit </button>
                </div>
            </form>
        </div>
    )

}

export default CommentsForm