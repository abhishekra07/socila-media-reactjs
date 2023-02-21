import { useState, useEffect } from 'react';
import Topbar from '../../components/topbar/Topbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Rightbar from '../../components/rightbar/Rightbar'
import Feed from '../../components/feed/Feed'
import { useParams } from 'react-router';
import axios from 'axios';
import './profile.css'

const Profile = () => {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const [user, setUser] = useState({});
    const username = useParams().username;

    useEffect(() => {
        const fetchUser = async () => {
          const res = await axios.get(`http://localhost:8800/api/users?username=${username}`)
          setUser(res.data)
        }
        fetchUser()
      }, [])
  return (
    <>
        <Topbar />
        <div className="profile">
        <Sidebar />
        <div className="profileRight">
            <div className="profileRightTop">
                <div className="profileCover">
                    <img className='profileCoverImg' src={PF + user.coverPicture } alt="" />
                    <img className='profileUserImg' src={PF + user.profilePicture} alt="" />
                </div>
                <div className="profileInfo">
                    <h4 className="profileInfoName">{user.username}</h4>
                    <span className="profileInfoDesc">{user.desc}</span>
                </div>
            </div>
            <div className="profileRightBottom">
                <Feed username={username}/>
                <Rightbar user={user}/>
            </div>
        </div>
        
        </div>
    </>
  )
}

export default Profile