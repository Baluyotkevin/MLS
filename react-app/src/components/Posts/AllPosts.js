import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { thunkAllPosts, thunkCreateLove, thunkDeleteLove, thunkOnePost } from "../../store/post";
// import OpenModalButton from "../OpenModalButton";
// import CreateComment from "../Comments/CreateComment";
import { thunkAllUsers } from "../../store/user";
import Post from "./Posts"

const GetAllPosts = () => {
    const dispatch = useDispatch()
    const allPosts = useSelector(state => state.post.allPosts)   
    // const currUser = useSelector(state => state.session.user)
    // const singlePost = useSelector(state => state.post.singlePost)
    // const [loved, setLoved] = useState(false)
    useEffect(() => {
        dispatch(thunkAllPosts())
    }, [dispatch])
    // console.log(Object.values(allPosts[0]))
    
    // const SubmitLove = (post) => {
    //     // post.preventDefault()
        // dispatch(thunkCreateLove(post))
    //     // const yes = useSelector(state => state.post.singlePost)
    // }

    // const DeleteLove = (post) => {
    //     dispatch(thunkDeleteLove(post))
    // //     // const yes = useSelector(state => state.post.singlePost)
    // }

    return (
        <>
            {/* <div className='postBody'>
        <div className='storyHead'>All Love Stories</div>
            { allPosts && Object.values(allPosts).map(post => (
                <Post key={ post.id } postData={post} />
            ))
            }
        </div> */}
        {/* <div className='storyHead'>
        <h1>All Love Stories</h1>
        <h1>Let These Stories Inspire Your Love Story!</h1>
    </div>
    <div className='postBody'>
        <div className='carouselImgCont'>
            <CarouselImages />
        </div>
        <ul className='postCont'>
        {allPosts && Object.values(allPosts).map(post => {
            console.log(post)
            if (post.root_post_id === null) {
                return (
                    <li className='singlePostCont' key={post.id}>
                        <div className='homePostTitle'>
                            {post.title}
                        </div>

                        <div>
                            {post.category}
                        </div>

                        <br />
                        <div className='postBodyCont'>
                            {post.body.slice(0, 100) + "..."}
                        </div>
                            <div>
                                {post.anonymous ? 'Anonymous' : post.user.first_name} - {post?.created_at.slice(0, 16)}
                            </div>
                            { post.loves.includes(currUser.id) ? 
                            <>
                            {post.loves.length}  <i class="fa-regular fa-heart" style={{ color: 'red' }} onClick={ thunkDeleteLove(post) }></i> 
                            </>
                            :
                            <>
                            {post.loves.length} <i class="fa-regular fa-heart"  onClick={ thunkCreateLove(post) }></i> 
                            </>
                            }
                            <div className='viewCont'>
                        <div className='viewComm'>
                            <NavLink to={`/post/${post.id}/comments`}><i class="fa-regular fa-comment"></i> View Comments</NavLink>
                        </div>
                        
                        <div className='viewPost'>
                            <NavLink to={`/postPage/${post.id}`}>View more Posts</NavLink>
                        </div>
                            </div>
                        <br />
                    </li>
                )
            } else {
                return null
            }
        })}
        </ul>
    </div> */}
    </>
    )
}

export default GetAllPosts