exports.logIn = (token, user) => ({
    type: 'LOG_IN',
    token,
    user
});

exports.logOut = () => ({
    type: 'LOG_OUT',
});