// import { useDispatch, useSelector } from "react-redux";
// import { useEffect, useState } from "react";
// import { thunkOnePost } from "../../store/post";
// import { useParams } from "react-router-dom";
// import { thunkAllComments } from "../../store/comment";
// import Loading from "../Loading/loading";
// import './PostPage.css'
// import CreateComment from "../Comments/CreateComment";

// const PostsCommentsPage = () => {
//     const dispatch = useDispatch()
//     const allComments = useSelector(state => state.comment.allComments)
//     const onePost = useSelector(state => state.post.singlePost)
//     const [isLoading, setIsLoading] = useState(true)
//     const currUser = useSelector(state => state.session.user)
//     const root = onePost.root
//     const postComments = Object.values(allComments).filter(comment =>  comment.post_id === onePost.root?.id)
//     const { postId } = useParams()
//     const check = [];
//     Object.values(postComments).forEach(comment => check.push(comment.user_id))
//     console.log(check)

//     useEffect(() => {
//         dispatch(thunkAllComments())
//         dispatch(thunkOnePost(postId))
//         setTimeout(() => {
//             setIsLoading(false)
//         }, 500);
//     }, [dispatch])

//     if (isLoading === true) return <Loading />

//     return (
//         <div className='postBody'>
//             <ul className='postCont'>
//                 <li className='singlePostCont'>
//                     <div>
//                         {root?.title}
//                     </div>
//                     <div>
//                         {root?.category}
//                     </div>
//                     <div className='body'>
//                         {root?.body}
//                     </div>
//                     <div>
//                     {root?.anonymous ? 'Anonymous' : root?.user.first_name} - {root?.created_at.slice(0, 16)}
//                     </div>
//                 </li>
//                 {/* <br /> */}
//                 {postComments.length ? Object.values(postComments).map(comment => {
//                     return (
//                         <div class='commentCont'>
//                             <div className='singleCommCont'>
//                             <div>
//                                 {comment.user.first_name}
//                             </div>
//                             <div>
//                                 {comment.body}
//                             </div>
//                             <div>
//                                 {comment.created_at.slice(0, 16)}
//                             </div>
//                             </div>
//                         </div>
//                     )
//                 }) : null}
//             </ul>
            
//             <div className='createCommCont'>
//                 {currUser?.id !== root?.user_id && currUser && !check.includes(currUser.id)  ? <CreateComment post={root}/> : null}
                
//             </div>
//         </div>
//     )

// }

// export default PostsCommentsPage