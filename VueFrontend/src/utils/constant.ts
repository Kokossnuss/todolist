export const _API = "http://localhost:8082/api/";

export const auth_API ={
    register: _API+'auth/local/register',
    login: _API+'auth/local',
    forgotpw: _API+'auth/forgot-password',
}

export const todos_API = _API+"todos"