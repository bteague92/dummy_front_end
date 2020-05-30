export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';

export function login(userCredentials) {
    if (userCredentials.username === 'username' && userCredentials.password === 'password') {
        return {
            type: LOGIN_SUCCESS
        }
    } else {
        return {
            type: LOGIN_ERROR
        }
    }
}

export function logout() {
    return {
        type: LOGOUT_SUCCESS
    }
}
