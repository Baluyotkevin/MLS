import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { thunkAllPosts, thunkOnePost, thunkDeleteLove, thunkCreateLove, thunkCreateFav, thunkDeleteFav } from "../../store/post";
import { thunkAllComments } from "../../store/comment";
import { useHistory } from 'react-router-dom'
import { useParams } from "react-router-dom";
import OpenModalButton from "../OpenModalButton";
import CreatePostOnPost from "../Posts/CreatePostOnPost";
import EditPostOnPost from "../Posts/EditPostOnPost";
import DeletePost from "../Posts/DeletePost";
import Loading from "../Loading/loading";
import CreateComment from "../Comments/CreateComment";
import './PostPage.css'

const PostPage = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const allComments = useSelector(state => state.comment.allComments)
    const onePost = useSelector(state => state.post.singlePost)
    const currUser = useSelector(state => state.session.user)
    const postComments = Object.values(allComments).filter(comment =>  comment.post_id === onePost.root?.id)
    const root = onePost.root
    const children = onePost.children
    const { postId } = useParams()
    const [isLoading, setIsLoading] = useState(true)
    const checkLove = root?.loves?.includes(currUser?.id)
    const checkFavorite = root?.favorites.includes(currUser?.id)
    const check = [];
    Object.values(postComments).forEach(comment => check.push(comment.user_id))

    useEffect(() => {
        dispatch(thunkOnePost(postId))
        dispatch(thunkAllComments())
        setTimeout(() => {
            setIsLoading(false)
        }, 500);
    }, [dispatch])

    const handleAlert = async (e) => {
        alert("Must be logged in to love")
      }

    const handleFavAlert = async (e) => {
        alert("Must be logged in to favorite!")
      }

    const handleLove = async (e) => {
        if (!checkLove) {
          await dispatch(thunkCreateLove(root));
        } else {
          await dispatch(thunkDeleteLove(root));
        }
      };

      const handleFavorite = async (e) => {
        if (!checkFavorite) {
            await dispatch(thunkCreateFav(root))
        } else {
            await dispatch(thunkDeleteFav(root))
        }
    }


    if (isLoading === true) return <Loading />

    return (
        <div className='postPageBody'>
            {currUser?.id === root?.user_id && !children.length ? <OpenModalButton
            buttonText='Continue your love story!'
            modalComponent={<CreatePostOnPost postId={postId}/>}
            /> : null}
            <ul class='postCont'>
                <li className='singlePostCont'> 
                <div className='titleFav'>
                    <div>
                        {root?.title}
                    </div>
                    { currUser ? root.favorites.includes(currUser?.id) ? 
                    
                    <div className='heart fav'>
                        <i class="fa-solid fa-bookmark" style={{ color: '#ce4257'}} onClick={ handleFavorite }></i>
                    </div>
                        :
                        <div className='heart fav'>
                            <i class="fa-solid fa-bookmark" onClick={ handleFavorite }></i>
                        </div> 
                        :
                        <div className='heart fav'>
                            <i class="fa-solid fa-bookmark" onClick={ handleFavAlert }></i>
                        </div> 
                    }

                </div>

                    <div>
                        {root?.category}
                    </div>
                    <div className='body'>
                        {root?.body}
                    </div>
                    <div>
                    {root?.anonymous ? 'Anonymous' : root?.user.first_name} - {root?.created_at.slice(0, 16)}
                    </div>
                        {currUser ? root.loves?.includes(currUser?.id) ? 
                            <div className='heart'>
                            {root.loves.length}
                            <i class="fa-solid fa-heart" style={{ color: '#ce4257' }} onClick={ handleLove }></i> 
                            </div>
                            :
                            <div className='heart'>
                            {root.loves.length} <i class="fa-solid fa-heart"  onClick={ handleLove }></i> 
                            </div>
                            :
                            <div>
                            {root.loves.length} <i class="fa-solid fa-heart" onClick={ handleAlert }></i> 
                            </div>
                            }
                    <div>
                    </div>
                </li>
                {children?.length ? Object.values(children).map(post => {
                    return (
                        <li className='singlePostCont'>
                            <div className='modalCont'>
                               <OpenModalButton 
                               buttonText='Edit'
                               modalComponent={<EditPostOnPost post={post}/>}
                               />
                                <OpenModalButton
                                buttonText='Delete'
                                modalComponent={<DeletePost post={post} root={root} />}
                                />
                            </div>
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
                            <div>
                                {post.created_at?.slice(0, 16)}
                            </div>
                        <br />
                        </li>
                        
                    )
                }) : null}

            {postComments.length ? Object.values(postComments).map(comment => {
                    return (
                        <div key={comment.id} class='commentCont'>
                            <div className='singleCommCont'>
                            <div>
                                {comment.user.first_name}
                            </div>
                            <div>
                                {comment.body}
                            </div>
                            <div>
                                {comment.created_at.slice(0, 16)}
                            </div>
                            </div>
                        </div>
                    )
                }) : null}
            </ul>
            
            <div className='createCommCont'>
                {currUser?.id !== root?.user_id && currUser && !check.includes(currUser.id)  ? <CreateComment post={root}/> : null}
                
            </div>


        </div>
    )

}

export default PostPage