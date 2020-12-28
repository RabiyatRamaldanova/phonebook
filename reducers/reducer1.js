export const initialState = {
    usersList: [{
        userName: "",
        userNumber: "",
    }],
};


function reducer1(state = initialState, action) {

    switch(action.type){
        case 'SET_USERS': 
        return {
           // ...state, 
            usersList: [...state.usersList, action.payload],
        };
        default: 
        return state;
    }
}
export default reducer1;