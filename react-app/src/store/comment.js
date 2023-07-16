const GET_ONE_COMMENT = 'comment/loadOneComment'
const GET_ALL_COMMENTS = 'comment/loadAllComments'
const GET_ALL_POST_COMMENTS = 'comment/loadAllPostComments'
const GET_ALL_CURR_COMMENTS = 'comment/loadAllCurrComments'
const CREATE_COMMENT = 'comment/createComment'
const EDIT_COMMENT = 'comment/editComment'
const DELETE_COMMENT = 'comment/deleteComment'

const loadOneComment = comment => ({
    type: GET_ONE_COMMENT,
    comment
})

const loadPostComments = comments => ({
    type: GET_ALL_POST_COMMENTS,
    comments
})

const loadAllComments = comments => ({
    type: GET_ALL_COMMENTS,
    comments
})

const loadAllCurrComments = comments => ({
    type: GET_ALL_CURR_COMMENTS,
    comments
})

const createComment = comment => ({
    type: CREATE_COMMENT,
    comment
})

const editComment = comment => ({
    type: EDIT_COMMENT,
    comment
})

const deleteComment = commentId => ({
    type: DELETE_COMMENT,
    commentId
})

export const thunkOneComment = (comment) => async (dispatch) => {
    const res = await fetch(`/api/comments/${comment.id}`)

    if (res.ok) {
        const data = await res.json()
        dispatch(loadOneComment(data))
    }
}

export const thunkAllComments = () => async (dispatch) => {
    const res = await fetch(`/api/comments/`)

    if (res.ok) {
        const data = await res.json()
        dispatch(loadAllComments(data))
    }
}

export const thunkAllPostComments = (postId) => async (dispatch) => {
    const res = await fetch(`/api/posts/${postId}/all_comments`)

    if (res.ok) {
        const data = await res.json()
        dispatch(loadPostComments(data))
    }
}

export const thunkAllCurrComments = () => async (dispatch) => {
    const res = await fetch(`/api/comments/current`)
    
    if (res.ok) {
        const data = await res.json()
        dispatch(loadAllCurrComments(data))
    }
}

export const thunkCreateComment = (comment, postId) => async (dispatch) => {
    const res = await fetch(`/api/posts/${postId}/comment`,{
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(comment)
    })

    if (res.ok) {
        const data = await res.json()
        dispatch(createComment(data))
    }
}

export const thunkEditComment = (comment) => async (dispatch) => {
    const res = await fetch(`/api/comments/${comment.id}/edit`, {
        method: "PUT",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(comment)
    })

    if (res.ok) {
        const data = await res.json()
        dispatch(editComment(data))
    }
}

export const thunkDeleteComment = (commentId) => async (dispatch) => {
    const res = await fetch(`/api/comments/${commentId}/delete`, {
        method: "DELETE"
    })

    if (res.ok) {
        const data = await res.json()
        dispatch(deleteComment(data))
    }
}

const initialState = { currentComments: {}, singleComment: {}, allComments: {}, postComments: {} }

const commentReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_COMMENTS: {
            const newState = {}
            const allComments = action.comments
            allComments.forEach(comment => {
                newState[comment.id] = comment
            })
            return {
                ...state,
                allComments: newState
            }
        }
        case GET_ALL_POST_COMMENTS: {
            const newState = {}
            const allPostComms = action.comments
            allPostComms.forEach(comment => {
                newState[comment.id] = comment
            })
            return {
                ...state,
                postComments: newState
            }
        }
        case GET_ALL_CURR_COMMENTS: {
            const newState = {}
            const allCurrComments = action.comments
            allCurrComments.forEach(comment => {
                newState[comment.id] = comment
            })
            return {
                ...state,
                currentComments: newState
            }
        }
        case CREATE_COMMENT: {
            const newState = {}
            const oneComment = action.comment
            newState[oneComment] = oneComment
            return {
                ...state,
                postComments: {...state.postComments, ...newState}
            }
        }
        case EDIT_COMMENT: {
            const newState = {}
            const oneComment = action.comment
            newState[oneComment] = oneComment
            return {
                ...state,
                allComments: {...state.allComments, ...newState}
            }
        }
        case DELETE_COMMENT: {
            const newState = { ...state, ...state.currentComments }
            delete newState.currentComments[action.commentId.id]
            return {
                ...newState,
                currentComments: { ...newState.currentComments }
            }
        }
        default: return state
    }
}

export default commentReducer