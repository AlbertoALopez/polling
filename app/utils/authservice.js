/* Auth0 helpers */
import Auth0Lock from 'auth0-lock';


export default class AuthService {
    constructor(clientId, domain) {
        // Configure auth
        this.lock = new Auth0Lock(clientId, domain, {});
        // Add callback for lock authenticated event
        this.lock.on('authenticated', this._doAuthentication.bind(this));
        // Binds login function to keep this context
        this.login = this.login.bind(this);
    }
    _doAuthentication(authResult) {
        // Saves user token
        this.setToken(authResult.idToken);
    }
    login() {
        // Calls show method to display widget
        this.lock.show();
    }
    loggedIn() {
        // Checks if there is a saved token and it's still valid
        return !!this.getToken();
    }
    setToken(idToken) {
        // Saves user token to locaStorage
        localStorage.setItem('idToken', idToken);
    }
    getToken() {
        // Retrieves the user token from localstorage
        return localStorage.getItem('id_token');
    }
    logout() {
        // Clears user token and profile data from localstorage
        localStorage.removeItem('id_token');
    }
}
