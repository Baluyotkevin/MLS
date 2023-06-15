import React, { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useModal } from "../../context/Modal";
import { thunkDeletePost } from '../../store/post';


const DeletePost = () => {
    const dispatch = useDispatch()
    const { postId } = useParams()
    const history = useHistory()

    const handleDelete = e => {
        e.preventDefault()
        console.log('do i get in it postId', postId)
        dispatch(thunkDeletePost(postId))
        history.push('/')
    }

    return (
        <>
            <button onClick={handleDelete}>delete</button>
        </>
    )

}

export default DeletePost