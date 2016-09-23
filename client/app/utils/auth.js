const auth = {
    login(e) {
        e.preventDefault();
        window.location = '/auth/google';
    },
    logout(e) {
        e.preventDefault();
        window.location = '/logout';
    },
};

export default auth;
