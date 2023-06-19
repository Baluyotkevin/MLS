import PostForm from "./PostOneForm";
import { useDispatch } from "react-redux";
const EditPost = ({ post }) => {
    
    const dispatch = useDispatch()
    // const { postId } = useParams()
    // const post = useSelector(state => state.post.singlePost[postEdit.id])
    // console.log(post)
    // useEffect(() => {
        // dispatch(thunkOnePost(post))
        // dispatch(thunkAllCurrPosts())
    // }, [dispatch])

    return (
        <>
        <PostForm 
        post = {post}
        // postId = {postEdit.id}
        formType = 'Edit Post'
        />

        </>
    )
}

export default EditPost