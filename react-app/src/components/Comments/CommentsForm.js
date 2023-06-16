import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom';
import { thunkCreatePostonPost, thunkEditPost } from "../../store/post";
import { useParams } from "react-router-dom";
import { thunkAllCurrComments, thunkCreateComment, thunkEditComment } from "../../store/comment";
import { useModal } from "../../context/Modal";

const CommentsForm = ({ postId, formType, comment }) => {
    const dispatch = useDispatch()
    const history = useHistory()
    const [body, setBody] = useState(comment?.body)
    const [validationErrors, setValidationErrors] = useState({})
    const { closeModal } = useModal()

    const handleSubmit = async (e) => {
        e.preventDefault()
        let errors = {}

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
                <div>
                    <textarea
                    type='text'
                    value={body}
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