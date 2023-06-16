const GET_ONE_POST = "post/loadOnePost"
const GET_ALL_POSTS = "post/loadAllPosts"
const GET_ALL_CURR_POSTS = "post/loadAllCurrPosts"
const CREATE_POST_POST = "post/createPostOnPost"
const CREATE_POST = "post/createPost"
const EDIT_POST = "post/editPost"
const DELETE_POST = "delete/deletePost"

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

const deletePost = postId => ({
    type: DELETE_POST,
    postId
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
    // console.log("THIS IS MY REEEES", res)
    if (res.ok) {
        const data = await res.json()
        dispatch(loadAllCurrPosts(data))
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
    console.log("WHAT IS THIS????? ", post, postId)
    const res = await fetch(`/api/posts/${postId}/post`, {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(post)
    })
    console.log("WHAT IS MY REEEEES", res)

    if (res.ok) {
        const data = await res.json()
        console.log("THIS IS MY DAATAAAAA", data)
        dispatch(createPostOnPost(data))
    }
}

export const thunkEditPost = (post) => async (dispatch) => {
    console.log(post)
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

export const thunkDeletePost = (postId) => async (dispatch) => {
    // console.log("THIS IS MY POSTID YOOOOO", postId)
    const res = await fetch(`/api/posts/${postId}/delete`, {
        method: "DELETE"
    })
    console.log("THIS IS MY REEEES")
    if (res.ok) {
        const data = await res.json()
        dispatch(deletePost(data))
    }
}

const initialState = { currentUserPosts: {}, singlePost: {}, allPosts: {} }

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
        case GET_ONE_POST: {
            const newState = { ...action.post }
            return {
                ...state,
                singlePost: newState
            }
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
                allPosts: { ...state.allPosts, ...newState}
            }
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