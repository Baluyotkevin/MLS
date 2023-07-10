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
    const check = postData.loves.includes(currUser?.id)

    const handleLove = async (e) => {
        if (!check) {
          await dispatch(thunkCreateLove(postData));
          dispatch(thunkAllPosts())
        } else {
          await dispatch(thunkDeleteLove(postData));
          dispatch(thunkAllPosts())
        }
      };

      const handleAlert = async (e) => {
        alert("Need to be logged in to love")
      }



    return (
        <>
        
        {postData && postData.root_post_id === null ?
                    <li className='singlePostCont' key={postData.id}>
                        <div className='homePostTitle'>
                            {postData.title}
                        </div>
        
                        <div>
                            {postData.category}
                        </div>
        
                        <br />
                        <div className='postBodyCont'>
                                {postData.body.slice(0, 100) + "..."}
                        </div>
                            <div>
                                {postData.anonymous ? 'Anonymous' : postData.user.first_name} - {postData?.created_at.slice(0, 16)}
                            </div>
                            
                            <div className='viewCont'>
                                <div>

                            { currUser ? postData?.loves?.includes(currUser?.id) ? 
                            <div className='heart'>
                            {postData.loves.length}
                            <i class="fa-solid fa-heart" style={{ color: '#ce4257' }} onClick={ handleLove }></i> 
                            </div>
                            :
                            <div className='heart'>
                            {postData.loves.length} <i class="fa-solid fa-heart"  onClick={ handleLove }></i> 
                            </div>
                            : 
                            <>
                            {postData.loves.length} <i class="fa-solid fa-heart" style={{ color: '#ce4257' }} onClick={ handleAlert }></i> 
                            </>
                            }
                                </div>
                        {/* <div className='viewComm'>
                        
                            <NavLink to={`/post/${postData.id}/comments`}><i class="fa-regular fa-comment"></i> View Comments</NavLink>
                        </div> */}
                        
                        <div className='viewPost'>
                            <NavLink to={`/postPage/${postData.id}`}>View more Posts</NavLink>
                        </div>
                            </div>
                        <br />
                    </li>
                    : null }
        </>
    )
}

export default Post





