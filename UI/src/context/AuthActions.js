export const LoginStart = (userCreds) => ({
    tyep: "LOGIN_START"
})

export const LoginSuccess = (user) => ({
    tyep: "LOGIN_SUCCESS",
    payload: user
})

export const LoginFailure = (error) => ({
    tyep: "LOGIN_FAILURE",
    payload: error
})