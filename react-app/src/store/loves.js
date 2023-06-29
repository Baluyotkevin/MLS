const CREATE_LOVE = 'love/createLove'
const DELETE_LOVE = 'love/deleteLove'

const createLove = love => ({
    type: CREATE_LOVE,
    post
})

const deleteLove = love => ({
    type: DELETE_LOVE,
    post
})

export const thunkCreateLove = (postId) => async (dispatch) => {
    const res = await fetch(`/api/posts/${postId}/add`)

    if (res.ok) {
        const data = await res.json()
        dispatch(createLove(data))
    }
}

export const thunkDeleteLove = (postId) => async (dispatch) => {
    const res = await fetch(`/api/posts/${postId}/delete`)

    if (res.ok) {
        const data = await res.json()
        dispatch(deleteLove(data))
    }
}

