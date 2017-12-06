const initialState = {
    token: null,
    isLoggedIn: false
}

exports.user = (state = initialState, action) => {
    switch(action.type) {
        case 'LOG_IN': 
            return Object.assign({}, {
                ...state,
                isLoggedIn: true,
                token: action.token
            });
        case 'LOG_OUT': 
            return Object.assign({}, {
                ...state,
                isLoggedIn: false,
                token: null
            });
        default: 
            return state;
    }
}