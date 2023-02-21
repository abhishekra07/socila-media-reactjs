import './register.css'

const Register = () => {
  return (
    <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">
                    Let's Chat
                </h3>
                <span className="loginDesc">
                    Connect with friend's and the world around you on Let's Chat!
                </span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                    <input placeholder='Usename' className="loginInput" />
                    <input placeholder='Email' className="loginInput" />
                    <input placeholder='Password' className="loginInput" />
                    <input placeholder='Password Again' className="loginInput" />
                    <button className="loginButton">Sign Up</button>
                    <button className="loginRegisterButton">Log into Account</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Register