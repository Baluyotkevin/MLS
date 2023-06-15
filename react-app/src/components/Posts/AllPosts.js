import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { thunkAllPosts } from "../../store/post";

const GetAllPosts = () => {
    const dispatch = useDispatch()
    const allPosts = useSelector(state => state.post.allPosts)

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

                        <div>
                            {post.body}
                        </div>
                        {/* <div> */}
                            {/* {post.anonymous === true ? } */}
                        {/* </div> */}
                        <br />
                    </li>
                )
            })}
            </ul>
        </div>
    )
}

export default GetAllPosts