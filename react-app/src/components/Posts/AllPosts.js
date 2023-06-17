import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
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
        <div className='postBody'>
            <div className='storyHead'>All Love Stories</div>
            <ul class='postCont'>
            {Object.values(allPosts).map(post => {
                return (
                    <li className='singlePostCont' key={post.id}>
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
                                {post.anonymous ? 'Anonymous' : post.user.first_name}
                            </div>
                            
                            <div className='viewCont'>
                        <div className='viewComm'>
                        
                            <NavLink to={`/post/${post.id}/comments`}><i class="fa-regular fa-comment"></i> View Comments</NavLink>
                        </div>
                        
                        <div className='viewPost'>
                            <NavLink to={`/postPage/${post.id}`}>View more Post</NavLink>
                        </div>
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