import { useSelector } from 'react-redux'
import { NavLink } from "react-router-dom";
import { useDispatch } from 'react-redux';
import './Post.css'

const Post = ({ postData }) => {
    const dispatch = useDispatch()
    const currUser = useSelector(state => state.session.user)

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
                        
                        <div className='viewPost'>
                            <NavLink to={`/postPage/${postData.id}`}>View more...</NavLink>
                        </div>
                            </div>
                        <br />
                    </li>
                    : null }
        </>
    )
}

export default Post





