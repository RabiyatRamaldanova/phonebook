// export const nameaction = value => ({
//     type: 'ADD_NAME',
//     payload: value
// });

// export const numberaction = value => ({
//     type: 'ADD_NUMBER',
//     payload: value
// })

export const setAddUserList = (name, number) =>({
    type: 'SET_USERS',
    payload: {
        userName: name,
        userNumber: number,
    }
})