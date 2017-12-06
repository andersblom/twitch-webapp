exports.logIn = token => ({
    type: 'LOG_IN',
    token
});

exports.logOut = () => ({
    type: 'LOG_OUT',
});