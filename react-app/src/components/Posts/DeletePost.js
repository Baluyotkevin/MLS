import React from 'react';
import { useDispatch } from 'react-redux';
import { useModal } from "../../context/Modal";
import { thunkDeletePost, thunkOnePost } from '../../store/post';


const DeletePost = ({post, root}) => {
    const dispatch = useDispatch()
    const { closeModal } = useModal()

    const handleDelete = e => {
        e.preventDefault()
        
        dispatch(thunkDeletePost(post.id))
        .then(closeModal)
        if (root) {
            setTimeout(() => {
                dispatch(thunkOnePost(root.id))
            }, 100)
        } else {
            dispatch(thunkOnePost(post.id))
        }
    }

    return (
        <div>
        <h2 className='createPostTitle'>Confirm Delete</h2>
            <button onClick={handleDelete}>Delete</button>
        </div>
    )

}

export default DeletePost