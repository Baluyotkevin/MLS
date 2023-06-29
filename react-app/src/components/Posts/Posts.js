import { useState } from 'react';
import { useSelector } from 'react-redux'
import { NavLink } from "react-router-dom";
import { thunkAllPosts, thunkCreateLove, thunkDeleteLove } from '../../store/post';
import { useDispatch } from 'react-redux';
import './Post.css'

const Post = ({ postData }) => {
    const dispatch = useDispatch()
    const [numLoves, setNumLoves] = useState(postData?.loves.length)
    const currUser = useSelector(state => state.session.user)
    // const check = useState(postData.)
    const check = postData.loves.includes(currUser.id)
    console.log("this is my check", check)
    const [loved, setLoved] = useState(check !== undefined)
    console.log(loved)
    const handleLove = async (e) => {

        if (!check) {
          await dispatch(thunkCreateLove(postData));
          dispatch(thunkAllPosts())
          setLoved(true);
        } else {
          await dispatch(thunkDeleteLove(postData));
          dispatch(thunkAllPosts())
          setLoved(false);
        }
      };
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
                            { postData.loves.includes(currUser.id) ? 
                            <>
                            {postData.loves.length}<i class="fa-regular fa-heart" style={{ color: 'red' }} onClick={ handleLove }></i> 
                            </>
                            :
                            <>
                            {postData.loves.length} <i class="fa-regular fa-heart"  onClick={ handleLove }></i> 
                            </>
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





