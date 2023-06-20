import { useDispatch, useSelector } from "react-redux";
import { useEffect} from "react";
import { NavLink } from "react-router-dom";
import { thunkAllPosts } from "../../store/post";
// import OpenModalButton from "../OpenModalButton";
// import CreateComment from "../Comments/CreateComment";
import { thunkAllUsers } from "../../store/user";
import Post from "./Posts"

const GetAllPosts = () => {
    const dispatch = useDispatch()
    const allPosts = useSelector(state => state.post.allPosts)   
    

    useEffect(() => {
        dispatch(thunkAllPosts())
    }, [dispatch])

    return (
        <div>
            { allPosts && Object.values(allPosts).map(post => (
                <Post key={ post.id } postData={post} />
            ))
            }
        </div>
    )
}

export default GetAllPosts