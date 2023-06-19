import React, { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useModal } from "../../context/Modal";
import { thunkAllCurrComments, thunkDeleteComment } from '../../store/comment';

const DeleteComment = ({comment}) => {
    const dispatch = useDispatch()
    const { closeModal } = useModal()

    const handleDelete = e => {
        e.preventDefault()

        dispatch(thunkDeleteComment(comment.id))
        .then(closeModal)
        dispatch(thunkAllCurrComments)
    }

    return (
        <>
            <h2 className='createPostTitle'>Confirm Delete</h2>
            <button onClick={handleDelete}>Delete</button>
        </>
    )

}

export default DeleteComment