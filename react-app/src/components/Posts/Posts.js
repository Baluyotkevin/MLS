import { useState } from 'react';
import { NavLink } from "react-router-dom";
import { thunkAllPosts } from '../../store/post';
import { useDispatch } from 'react-redux';
import './Post.css'

const Post = ({ postData }) => {
    const dispatch = useDispatch()
    const [numLoves, setNumLoves] = useState(postData?.loves.length)
    // const check = useState(postData.)
    const [loved, setLoved] = useState(false)
            const addLove = () => {
                setLoved(!loved);
                setNumLoves(numLoves + 1);
                dispatch(thunkAllPosts())
            }
        
            const removeLove = () => {
                setLoved(!loved)
                setNumLoves(numLoves- 1);
            }
                       
    return (
        <>
        
        {postData.root_post_id === null ?
        <ul class='postCont'>
                    <li className='singlePostCont' key={postData.id}>
                        <div className='homePostTitle'>
                            {postData.title}
                        </div>
        
                        <div>
                            {postData.category}
                        </div>
        
                        <br />
                        <div>
                            {postData.body}
                        </div>
                            <div>
                                {postData.anonymous ? 'Anonymous' : postData.user.first_name} - {postData?.created_at.slice(0, 16)}
                            </div>
                            
                            <div className='viewCont'>
                                {postData.loves.length}
                            { loved ?
                            <i class="fa-regular fa-heart" style={{ color: 'red' }} onClick={ removeLove }></i>
                                     :
                            <i class="fa-regular fa-heart"  onClick={ addLove }></i>
                                }
                        <div className='viewComm'>
                        
                            <NavLink to={`/post/${postData.id}/comments`}><i class="fa-regular fa-comment"></i> View Comments</NavLink>
                        </div>
                        
                        <div className='viewPost'>
                            <NavLink to={`/postPage/${postData.id}`}>View more Posts</NavLink>
                        </div>
                            </div>
                        <br />
                    </li>
        </ul> : null }
        </>
    )
}

export default Post





