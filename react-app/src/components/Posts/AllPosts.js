import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { thunkAllPosts } from "../../store/post";
import OpenModalButton from "../OpenModalButton";
import CreateComment from "../Comments/CreateComment";

const GetAllPosts = () => {
    const dispatch = useDispatch()
    const allPosts = useSelector(state => state.post.allPosts)
    const currUser = useSelector(state => state.session.user)


    useEffect(() => {
        dispatch(thunkAllPosts())
    }, [dispatch])

    return (
        <div>
            <ul>
            {Object.values(allPosts).map(post => {
                return (
                    <li>
                        <div>
                            {post.title}
                        </div>
                        <br />
                        <div>
                            {post.body}
                        </div>
                            {currUser ? currUser.id !== post.user_id ?
                            <OpenModalButton 
                            buttonText='Comment'
                            modalComponent={<CreateComment post={post} />}/>
                            : null : null}
                        <div>
                            View Comments
                            {/* <NavLink></NavLink> */}
                        </div>
                        <div>
                            View More Posts
                        </div>
                        <br />
                    </li>
                )
            })}
            </ul>
        </div>
    )
}

export default GetAllPosts