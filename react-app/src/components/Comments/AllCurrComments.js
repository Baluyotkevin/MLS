import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { thunkAllCurrComments } from "../../store/comment";
import { thunkAllCurrPosts, thunkAllPosts } from "../../store/post";
import OpenModalButton from "../OpenModalButton";
import EditComment from "./EditComment";
import DeleteComment from "./DeleteComment";

const GetAllCurrComments = () => {
    const dispatch = useDispatch()
    const allComments = useSelector(state => state.comment.currentComments)
    const currUser = useSelector(state => state.session.user)
    const allPosts = useSelector(state => state.post.allPosts)
    const check = Object.values(allComments)
    console.log(check)
    // if (!allComments) return 'No Comments found'

    useEffect(() => {
        dispatch(thunkAllCurrComments())
        dispatch(thunkAllPosts())
    }, [dispatch])

    return (
        <div class='profileCont'>
            <div>
                <img class='profileImg' src={currUser.profile_img} />
            <div>
            <div>Followers</div>
                <div>Favorites</div>
            </div>
            </div>
            <ul>
                <div>
                {currUser.first_name} - Comments
                </div>
                {check.length ? Object.values(allComments).map(comment => {
                    return (
                        <>
                        <OpenModalButton
                        buttonText='Edit'
                        modalComponent={<EditComment comment={comment} />}
                        />
                        <OpenModalButton
                        buttonText='Delete'
                        modalComponent={<DeleteComment comment={comment} />}
                        />
                        <li>
                            <div>{comment.body}</div>
                        </li>
                        <br />
                        </>
                    )
                }) : "No comments yet"}
            </ul>
        </div>
    )
}

export default GetAllCurrComments