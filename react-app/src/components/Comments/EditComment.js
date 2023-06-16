import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import CommentsForm from "./CommentsForm";

const EditComment = ({ comment }) => {
    console.log(comment)
    return (
        <>
        <h1>Edit Comment</h1>
        <CommentsForm
        comment={comment}
        formType='Edit Comment'
         />
        </>
    )


}

export default EditComment