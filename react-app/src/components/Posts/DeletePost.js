import React, { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useModal } from "../../context/Modal";
import { thunkAllCurrPosts, thunkDeletePost, thunkOnePost } from '../../store/post';


const DeletePost = ({post}) => {
    const dispatch = useDispatch()
    const { closeModal } = useModal()

    const handleDelete = e => {
        e.preventDefault()
        
        dispatch(thunkDeletePost(post.id))
        .then(closeModal)
        dispatch(thunkAllCurrPosts())
        dispatch(thunkOnePost(post.id))
    }

    return (
        <div>
        <h2 className='createPostTitle'>Confirm Delete</h2>
            <button onClick={handleDelete}>Delete</button>
        </div>
    )

}

export default DeletePost