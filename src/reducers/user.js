const initialState = {
    token: null,
    isLoggedIn: false,
    userData: {}
}

exports.user = (state = initialState, action) => {
    switch(action.type) {
        case 'LOG_IN': 
            return Object.assign({}, {
                ...state,
                isLoggedIn: true,
                token: action.token,
                userData: action.user
            });
        case 'LOG_OUT': 
            return Object.assign({}, {
                ...state,
                isLoggedIn: false,
                token: null,
                userData: {}
            });
        default: 
            return state;
    }
}