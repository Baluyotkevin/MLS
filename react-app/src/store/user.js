const GET_ALL_USERS = 'user/getAllUsers'

const allUsers = users => ({
    type: GET_ALL_USERS,
    users
})



export const thunkAllUsers = () => async (dispatch) => {
    const res = await fetch('/api/users/')
    console.log(res)
    if (res.ok) {
        const data = await res.json()
        dispatch(allUsers(data))
    }
}




const initialState = { allUsers: {}, singleUser: {} }

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_USERS: {
            const newState = {}
            const users = action.users
            users.users.forEach(user => {
                newState[user.id] = user
            })
            return {
                ...state,
                allUsers: newState
            }
        }

        default: return state
    }
}

export default userReducer