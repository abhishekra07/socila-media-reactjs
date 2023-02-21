import axios from "axios";

export const loginCall = async(userCred, dispatch) => {
    dispatch({type: "LOGIN_START"});
    try {
        const res = await axios.post("http://localhost:8800/api/auth/login", userCred);
        dispatch({type: "LOGIN_SUCCESS", payload: res.data});
    } catch(err) {
        dispatch({type: "LOGIN_FAILURE", payload: err});
    }
}

export const postCall = async(post) => {
    try {
        await axios.post("http://localhost:8800/api/posts", post);
        // console.log(res.data);
    } catch(err) {
        console.log(err)
    }
}

export const uploadCall = async(data) => {
    try {
        await axios.post("http://localhost:8800/api/upload", data);
        // console.log(res.data);
    } catch(err) {
        console.log(err)
    }
}