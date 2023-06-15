import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { thunkAllCurrComments } from "../../store/comment";

const GetAllCurrComments = () => {
    const dispatch = useDispatch()
    const allComments = useSelector(state => state.comment.currentComments)
    
    // if (!allComments) return 'No Comments found'

    useEffect(() => {
        dispatch(thunkAllCurrComments())
    }, [dispatch])

    return (
        <div>
            <ul>
                {!allComments ? Object.values(allComments.map(comment => {
                    return (
                        <li>
                            <div>{comment.body}</div>
                        </li>
                    )
                })) : "You Have Not Made Any Comments Yet!"}
            </ul>
        </div>
    )
}

export default GetAllCurrComments