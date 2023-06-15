const GET_ONE_COMMENT = 'comment/loadOneComment'
const GET_ALL_COMMENTS = 'comment/loadAllComments'
const GET_ALL_CURR_COMMENTS = 'comment/loadAllCurrComments'
const CREATE_COMMENT = 'comment/createComment'
const EDIT_COMMENT = 'comment/editComment'
const DELETE_COMMENT = 'comment/deleteComment'

const loadOneComment = comment => ({
    type: GET_ONE_COMMENT,
    comment
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

const deleteComment = comment => ({
    type: DELETE_COMMENT,
    comment
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

export const thunkAllCurrComments = () => async (dispatch) => {
    const res = await fetch(`/api/comments/current`)
    
    if (res.ok) {
        const data = await res.json()
        dispatch(loadAllCurrComments(data))
    }
}

export const thunkCreateComment = (comment) => async (dispatch) => {
    const res = await fetch(`/api/${comment.post_id}/comment`)
}