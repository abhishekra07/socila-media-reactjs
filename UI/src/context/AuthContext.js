import { createContext, useReducer } from "react"
import AuthReducer from "./AuthReducer";


const INITIAL_STATE = {
    // user: null,
    user: {
        _id: "637f07d6ba241675937a9371",
        profilePicture: "profile/1.png",
        coverPicture: "cover/1.png",
        followers: [],
        followings: [],
        isAdmin:false,
        username: "abhishek07",
        email: "abhishek@gmail.com",
        password:"$2b$10$zhsd6qGhwLYlyLpuW22Cqe031gI1tfJf0gi1TAb7kSleAMrKyO8Dy",
        createdAt: "2022-11-24T05:57:42.590+00:00",
        updatedAt: "2022-11-24T07:39:59.002+00:00",
        desc:"Hello Friend's, Chai Pilo!!",
        city:"Indore",
        from:"India",
        relationship: 1
    },
    // user: {
    //     _id: "637f07ecba241675937a9372",
    //     profilePicture: "profile/2.jpeg",
    //     coverPicture: "cover/1.png",
    //     followers: [],
    //     followings: [],
    //     isAdmin:false,
    //     username: "rahul",
    //     email: "rahul@gmail.com",
    //     password:"$2b$10$zhsd6qGhwLYlyLpuW22Cqe031gI1tfJf0gi1TAb7kSleAMrKyO8Dy",
    //     createdAt: "2022-11-24T05:57:42.590+00:00",
    //     updatedAt: "2022-11-24T07:39:59.002+00:00",
    //     desc:"Hello Friend's, Chai Pilo!!",
    //     city:"Indore",
    //     from:"India",
    //     relationship: 1
    // },
    isFetching: false,
    error: false
}

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

    return (
        <AuthContext.Provider value={{user: state.user, isFetching: state.isFetching, error: state.isFetching, dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}