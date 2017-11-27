exports.selectedStream = (state = { showChat: true, stream: null }, action) => {
    switch(action.type) {
        case 'SET_SELECTED_STREAM': 
            return Object.assign({}, {
                ...state,
                ...action.stream
            });
        case 'TOGGLE_CHAT':
            return Object.assign({}, {
                ...state,
                showChat: !state.showChat
            })
        default: 
            return state;
    }
}