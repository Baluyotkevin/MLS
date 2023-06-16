import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { thunkAllPosts, thunkOnePost } from "../../store/post";
import { useParams } from "react-router-dom";

const PostPage = () => {
    const dispatch = useDispatch()
    const allPosts = useSelector(state => state.post.allPosts)
    const onePost = useSelector(state => state.post.singlePost)
    const root = onePost.root
    const children = onePost.children
    const { postId } = useParams()
    useEffect(() => {
        dispatch(thunkAllPosts())
        dispatch(thunkOnePost(postId))
    }, [dispatch])

    return (
        <div>
            <ul class='postCont'>
                <li>
                    <div>
                        {root?.title}
                    </div>
                    <div>
                        {root?.category}
                    </div>
                    <div>
                        {root?.body}
                    </div>
                </li>
                {/* <br /> */}
                {children?.length ? Object.values(children).map(post => {
                    return (
                        <li>
                        <div class='title'>
                                {post.title}
                            </div>

                            <div>
                                {post.category}
                            </div>
                            <br />

                            <div class='body'>
                                {post.body}
                            </div>
                        <br />
                        </li>
                        
                    )
                }) : null}
            </ul>
        </div>
    )

}

export default PostPage