import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { thunkAllPosts, thunkOnePost } from "../../store/post";
import { useParams } from "react-router-dom";
import { thunkAllUsers } from "../../store/user";

const PostPage = () => {
    const dispatch = useDispatch()
    const onePost = useSelector(state => state.post.singlePost)
    const allUsers = useSelector(state => state.users.allUsers)
    const root = onePost.root
    const children = onePost.children
    const { postId } = useParams()
    useEffect(() => {
        dispatch(thunkAllPosts())
        dispatch(thunkOnePost(postId))
        dispatch(thunkAllUsers())
    }, [dispatch])

    return (
        <div className='postBody'>
            <ul class='postCont'>
                <li className='singlePostCont'> 
                    <div>
                        {root?.title}
                    </div>
                    <div>
                        {root?.category}
                    </div>
                    <div>
                        {root?.body}
                    </div>
                    <div>
                    {root?.anonymous ? Object.values(allUsers).map(user => {
                                    return (
                                        <>
                                        <div>
                                            {root?.user_id === user.id ? user.first_name : null} 
                                        </div>
                                        </>
                                    )
                                }) : 'Anonymous'}
                    </div>
                </li>
                {children?.length ? Object.values(children).map(post => {
                    return (
                        <li className='singlePostCont'>
                        <div className='title'>
                                {post.title}
                            </div>

                            <div>
                                {post.category}
                            </div>
                            <br />

                            <div className='body'>
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