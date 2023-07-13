import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { thunkAllPosts } from "../../store/post";
import Post from "./Posts"
import Loading from "../Loading/loading";
import './Post.css'
import CarouselImages from "../Carousel/Carousel";

const GetAllPosts = () => {
    const dispatch = useDispatch()
    const allPosts = useSelector(state => state.post.allPosts)
    const [isLoading, setIsLoading] = useState(true)
    const [sortType, setSortType] = useState('')
    const [posts, setPosts] = useState([])

    let allPostsArr
    if (allPosts) allPostsArr = Object.values(allPosts)

    useEffect(() => {
        if (allPostsArr) {
            const sortedPosts = type => {
                let sorted;
                    if (type === 'created_at') {
                        sorted = allPostsArr.sort((a, b) => new Date(b.created_at) - new Date(a.created_at)
                    )}
                    else if (type === 'Horrible') {
                        sorted = allPostsArr.filter(post => post.category === 'Horrible')
                    }
                    else if (type === 'Beautiful' ) {
                        sorted = allPostsArr.filter(post => post.category === 'Beautiful')
                    }
                    else {
                        sorted = allPostsArr
                    }
                setPosts(sorted)
            }
            sortedPosts(sortType)
        }
    }, [sortType, allPostsArr.length])

    useEffect(() => {
        dispatch(thunkAllPosts())
        setTimeout(() => {
            setIsLoading(false)
        }, 500);
    }, [dispatch])


    if (isLoading === true) return <Loading />

    return (
        <>
        <div className='storyHead'>
            <h1>All Love Stories</h1>
            <h1>Share Your Own Love Story!</h1>
        </div>
        <div className='postBody'>
            <div className='carouselImgCont'>
                <CarouselImages />
            </div>
            <ul className='postCont'>
            <div className='sorting'>
                <button onClick={(e) => {
                    setSortType('created_at')
                } }>Newest</button>
                <button onClick={(e) => {
                    setSortType('Beautiful')
                } }>Beautiful</button>
                <button onClick={(e) => {
                    setSortType('Horrible')
                } }>Horrible</button>

            </div>
                {posts && posts.map(post => (
                    <Post key={ post.id } postData={post} />
                ))
                }
            </ul>
        </div>
    </>
    )
}

export default GetAllPosts