const GET_ALL_USERS = 'user/getAllUsers'
// const EDIT_USER = 'user/editUser'

const allUsers = users => ({
    type: GET_ALL_USERS,
    users
})

// const editUser = user => ({
//     type: EDIT_USER,
//     user
// })

export const thunkAllUsers = () => async (dispatch) => {
    const res = await fetch('/api/users/')
    console.log(res)
    if (res.ok) {
        const data = await res.json()
        dispatch(allUsers(data))
    }
}

// export const thunkEditUser = () => async (dispatch) => {
//     const res = await fetch('/api/users/current')
//     if (res.ok) {
//         const data = await res.json(
//             dispatch(editUser(data))
//         )
//     }
// }


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
        // case EDIT_USER: {
        //     const newState = {}
        //     const user = action.user
        //     newState[user.id] = user
        //     return {
        //         ...state,
        //         singleUser: newState
        //     }
        // }
        default: return state
    }
}

export default userReducer