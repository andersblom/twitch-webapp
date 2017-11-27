exports.selectedStream = (state = { showChat: true, stream: null, channel: {} }, action) => {
    switch(action.type) {
        case 'SET_SELECTED_STREAM': 
            return Object.assign({}, {
                ...state,
                ...action.stream
            });
        case 'CLEAR_SELECTED_STREAM':
            return Object.assign({}, {
                ...state.showChat,
                stream: null,
                channel: {}
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