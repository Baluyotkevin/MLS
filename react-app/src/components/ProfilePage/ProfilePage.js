import { thunkAllCurrPosts } from "../../store/post"
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from "react";




const ProfilePage = () => {
    const dispatch = useDispatch()
    const allCurrPosts = useSelector(state => state.post.currUserPosts)
    const currUser = useSelector(state => state.session.user)
    console.log('hello', currUser.profile_img)

    useEffect(() => {
        dispatch(thunkAllCurrPosts())
    }, [dispatch])

    if (!allCurrPosts) return 'hi'

    return (
        <div>
            <div>
                <img src={currUser.profile_img} />
            </div>
            <ul>
                {Object.values(allCurrPosts).map(post => {
                    return (
                        <li>
                            <div>
                                {post.title}
                            </div>

                            <div>
                                {post.body}
                            </div>
                        {/* <div> */}
                            {/* {post.anonymous === true ? } */}
                        {/* </div> */}
                            <br />
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default ProfilePage