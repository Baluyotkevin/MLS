import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { thunkAllCurrComments } from "../../store/comment";
import { thunkAllPosts } from "../../store/post";
import { NavLink } from "react-router-dom";
import OpenModalButton from "../OpenModalButton";
import EditComment from "./EditComment";
import DeleteComment from "./DeleteComment";
import Loading from "../Loading/loading";
import ProfileForm from '../ProfilePage/EditProfilePage'

const GetAllCurrComments = () => {
    const dispatch = useDispatch()
    const allComments = useSelector(state => state.comment.currentComments)
    const currUser = useSelector(state => state.session.user)
    const check = Object.values(allComments)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        dispatch(thunkAllCurrComments())
        dispatch(thunkAllPosts())
        setTimeout(() => {
            setIsLoading(false)
        }, 500);
    }, [dispatch])

    if (isLoading === true) return <Loading />

    return (
        <div class='profileCont'>
            <div>
                <img className='profileImg' src={currUser.profile_img} />
                <div className='editCont'>
                    <OpenModalButton
                    buttonText='Edit Profile'
                    modalComponent={<ProfileForm user={currUser} />}
                    />

                </div>
            </div>
            <ul class='postCont'>
                <h3 className='profileHeader'>
                {currUser.first_name} - Comments
                </h3>
                <br />
                {check.length ? Object.values(allComments).map(comment => {
                    return (
                        <li className='singlePostCont'>
                        <div className='modalCont'>
                        <OpenModalButton
                        buttonText='Edit'
                        modalComponent={<EditComment comment={comment} />}
                        />
                        <OpenModalButton
                        buttonText='Delete'
                        modalComponent={<DeleteComment comment={comment} />}
                        />

                        </div>

                            <div>
                                {comment.post.title} - {comment.post.user.first_name}
                            </div>

                            <div>
                                {comment.body}
                            </div>
                            <div>
                                {comment.created_at.slice(0, 16)}
                            </div>
                            <div className='viewPost'>
                                <NavLink to={`/postPage/${comment.post.id}`}>View Post</NavLink>
                            </div>
                        <br />
                        </li>
                    )
                }) : <div className='none'>No comments yet!</div>}
            </ul>
        </div>
    )
}

export default GetAllCurrComments