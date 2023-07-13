const GET_ONE_POST = "post/loadOnePost"
const GET_ALL_POSTS = "post/loadAllPosts"
const GET_ALL_CURR_POSTS = "post/loadAllCurrPosts"
const GET_ALL_FAV_POSTS = "post/loadAllFavPosts"
const CREATE_POST_POST = "post/createPostOnPost"
const CREATE_POST = "post/createPost"
const EDIT_POST = "post/editPost"
const EDIT_POST_POST = 'post/editPostOnPost'
const DELETE_POST = "delete/deletePost"
const CREATE_LOVE = 'love/createLove'
const DELETE_LOVE = 'love/deleteLove'
const CREATE_FAV = 'favorite/createFav'
const DELETE_FAV = 'favorite/deleteFav'

const loadOnePost = post => ({
    type: GET_ONE_POST,
    post
})

const loadAllPosts = posts => ({
    type: GET_ALL_POSTS,
    posts
})

const loadAllCurrPosts = posts => ({
    type: GET_ALL_CURR_POSTS,
    posts
})

const loadAllFavPosts = posts => ({
    type: GET_ALL_FAV_POSTS,
    posts
})

const createPost = post => ({
    type: CREATE_POST,
    post
})

const createPostOnPost = post => ({
    type: CREATE_POST_POST,
    post
})

const editPost = post => ({
    type: EDIT_POST,
    post
})

const editPostOnPost = post => ({
    type: EDIT_POST_POST,
    post
})

const deletePost = postId => ({
    type: DELETE_POST,
    postId
})

const createLove = post => ({
    type: CREATE_LOVE,
    post
})

const deleteLove = post => ({
    type: DELETE_LOVE,
    post
})

const createFav = post => ({
    type: CREATE_FAV,
    post
})

const deleteFav = post => ({
    type: DELETE_FAV,
    post
})


export const thunkOnePost = (postId) => async (dispatch) => {
    const res = await fetch(`/api/posts/${postId}`)

    if (res.ok) {
        const data = await res.json()
        dispatch(loadOnePost(data))
    }
}

export const thunkAllPosts = () => async (dispatch) => {
    const res = await fetch(`/api/posts/`)

    if (res.ok) {
        const data = await res.json()
        dispatch(loadAllPosts(data))
    }
}

export const thunkAllCurrPosts = () => async (dispatch) => {
    const res = await fetch(`/api/posts/current`)
    if (res.ok) {
        const data = await res.json()
        dispatch(loadAllCurrPosts(data))
    }
}

export const thunkAllFavPosts = () => async (dispatch) => {
    const res = await fetch(`/api/posts/current/favorites`)
    if (res.ok) {
        const data = await res.json()
        dispatch(loadAllFavPosts(data))
    }
}

export const thunkCreatePost = (post) => async (dispatch) => {
    const res = await fetch(`/api/posts/post`, {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(post)
    })

    if (res.ok) {
        const data = await res.json()
        dispatch(createPost(data))
    }
}

export const thunkCreatePostonPost = (post, postId) => async (dispatch) => {
    const res = await fetch(`/api/posts/${postId}/post`, {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(post)
    })

    if (res.ok) {
        const data = await res.json()
        dispatch(createPostOnPost(data))
    }
}

export const thunkEditPost = (post) => async (dispatch) => {
    const res = await fetch(`/api/posts/${post.id}/edit`, {
        method: "PUT",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(post)
    })
    
    if (res.ok) {
        const data = await res.json()
        dispatch(editPost(data))
    }
}

export const thunkEditPostOnPost = (post) => async (dispatch) => {
    const res = await fetch(`/api/posts/${post.id}/edit`, {
        method: "PUT",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(post)
    })
    
    if (res.ok) {
        const data = await res.json()
        dispatch(editPostOnPost(data))
    }
}

export const thunkDeletePost = (postId) => async (dispatch) => {
    const res = await fetch(`/api/posts/${postId}/delete`, {
        method: "DELETE"
    })
    if (res.ok) {
        const data = await res.json()
        dispatch(deletePost(data))
    }
}

export const thunkCreateLove = (post) => async (dispatch) => {
    const res = await fetch(`/api/posts/${post.id}/add`, {
            method: "POST"
        })
        if (res.ok) {
            const data = await res.json()
            await dispatch(createLove(data))
    }
}

export const thunkDeleteLove = (post) => async (dispatch) => {
    const res = await fetch(`/api/posts/${post.id}/remove`, {
        method: "DELETE"
    })

    if (res.ok) {
        const data = await res.json()
        await dispatch(deleteLove(data))
    }
}

export const thunkCreateFav = (post) => async (dispatch) => {
    const res = await fetch(`/api/posts/${post.id}/favorite/add`, {
        method: "POST"
    })
    if (res.ok) {
        const data = await res.json()
        await dispatch(createFav(data))
} 
}

export const thunkDeleteFav = (post) => async (dispatch) => {
const res = await fetch(`/api/posts/${post.id}/favorite/remove`, {
    method: "DELETE"
})

if (res.ok) {
    const data = await res.json()
    await dispatch(deleteFav(data))
}
}

const initialState = { currentUserPosts: {}, singlePost: {}, allPosts: {}, currentUserFav: {} }

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_POSTS: {
            const newState = {}
            const allPosts = action.posts
            allPosts.forEach(post => {
                newState[post.id] = post
            })
            return {
                ...state,
                allPosts: newState
            }
        }
        case GET_ALL_CURR_POSTS: {
            const newState = {}
            const allCurrPosts = action.posts
            allCurrPosts.forEach(post => {
                newState[post.id] = post
            })
            return {
                ...state,
                currentUserPosts: newState
            }
        }
        case GET_ALL_FAV_POSTS: {
            const newState = {}
            const allCurrFav = action.posts
            allCurrFav.forEach(post => {
                newState[post.id] = post
            })
            return {
                ...state,
                currentUserFav: newState
            }
        }
        case GET_ONE_POST: {
            const newState = { ...state }
            newState.singlePost = action.post
            return newState
        }
        case EDIT_POST: {
            const newState = {}
            const edittedPost = action.post
            newState[edittedPost.id] = edittedPost
            return {
                ...state,
                singlePost: newState
            }
        }
        case EDIT_POST_POST: {
            const newState = { ...action.post }
            return {
                ...state,
                singlePost: { root: {...state.singlePost.root}, children: [newState]}
            }
        }
        case CREATE_POST: {
            const newState = {}
            const onePost = action.post
            newState[onePost.id] = onePost
            return {
                ...state,
                allPosts: { ...state.allPosts, ...newState}
            }
        }
        case CREATE_POST_POST: {
            const newState = {}
            const onePost = action.post
            newState[onePost.id] = onePost
            return {
                ...state,
                singlePost: { root: {...state.singlePost.root}, children: [newState]}
            }
        }
        case CREATE_LOVE: {
            const newState = { ...state }
            const onePost = action.post
            newState.singlePost = onePost
            return newState
        }
        case CREATE_FAV: {
            const newState = { ...state }
            const onePost = action.post
            newState.singlePost = onePost
            return newState
        }
        case DELETE_FAV: {
            const newState = { ...state }
            const onePost = action.post
            newState.singlePost = onePost
            return newState
        }
        case DELETE_LOVE: {
            const newState = { ...state }
            const onePost = action.post
            newState.singlePost = onePost
            return newState
        }
        case DELETE_POST: {
            const newState = { ...state, ...state.currentUserPosts }
            delete newState.currentUserPosts[action.postId.id]
            return {
                ...newState,
                currentUserPosts: { ...newState.currentUserPosts }
            }

        }
        default: return state
    }
}

export default postReducer