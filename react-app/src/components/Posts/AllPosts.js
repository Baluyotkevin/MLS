import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { thunkAllPosts } from "../../store/post";
import OpenModalButton from "../OpenModalButton";
import CreateComment from "../Comments/CreateComment";
import { thunkAllUsers } from "../../store/user";
import './Post.css'

const GetAllPosts = () => {
    const dispatch = useDispatch()
    const allPosts = useSelector(state => state.post.allPosts)
    const currUser = useSelector(state => state.session.user)
    const allUsers = useSelector(state => state.users.allUsers)
    // console.log(allUsers)

    useEffect(() => {
        dispatch(thunkAllPosts())
        dispatch(thunkAllUsers())
    }, [dispatch])

    return (
        <div>
            <ul class='postCont'>
            {Object.values(allPosts).map(post => {
                return (
                    <li className='singlePostCont'>
                        <div>
                            {post.title}
                        </div>

                        <div>
                            {post.category}
                        </div>
                        <br />
                        <div>
                            {post.body}
                        </div>
                        <div>
                            {currUser ? currUser.id !== post.user_id ?
                            <OpenModalButton 
                            buttonText='Comment'
                            modalComponent={<CreateComment post={post} />}/>
                            : null : null}
                        </div>
                            <div>
                                {post.anonymous ? Object.values(allUsers).map(user => {
                                    return (
                                        <>
                                        <div>
                                            {post.user_id === user.id ? user.first_name : null} 
                                        </div>
                                        </>
                                    )
                                }) : 'Anonymous'}
                            </div>
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