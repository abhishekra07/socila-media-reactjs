import { Users } from '../../data'
import Online from '../online/Online'
import { useEffect, useState } from 'react'
import axios from 'axios'
import './rightbar.css'

const Rightbar = ({ user }) => {
  console.log(user)
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [followers, setFollowers] = useState([]);

  // useEffect(() => {
  //   const fetchFollower = async () => {
  //     let res = await axios.get(`http://localhost:8800/api/users/friends/${user._id}`);
  //     setFollowers(res.data)
  //   }
  //   fetchFollower();
    
  // }, [user])
  

  const joinedDate = () => {
    let date = new Date(user.createdAt);
    let dd = String(date.getDate()).padStart(2, '0');
    let mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = date.getFullYear();
    date = mm + '/' + dd + '/' + yyyy;
    return date;
  }

  const HomeRightbar = () => {
    return(
      <>
        <div className="birthdayContainer">
          <img src={ PF + "gift.png" } alt="" className="birthdayImg" />
          <span className="birthdayText">
            <b>Abhishek</b> and <b>3 other friend's</b> have a birthday today
          </span>
        </div>
        <img src={ PF + "ad.png" } alt="" className="rightbarAd" />
        <h4 className='rightbarTitle'>Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((user) => {
            return <Online key={user.id} user={user}/>
          })}
        </ul>
      </>
    )
  }

  const ProfileRightbar = () => {
    return(
      <>
        <h4 className="rightbarTitle">User information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">{user.city}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">{user.from}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Reltionship:</span>
            <span className="rightbarInfoValue">{user.relationship === 1 ? "Signle" : user.relationship === 2 ? "Married" : ""}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Joined On:</span>
            <span className="rightbarInfoValue">{joinedDate()}</span>
          </div>
        </div>
        <h4 className="rightbarTitle">Friends</h4>
        <div className="rightbarFollowings">
          {followers.map((follower) => {
            return <div className="rightbarFollowing" key={follower._id}>
                    <img src={ PF + follower.profilePicture} alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">{follower.username}</span>
                  </div>
          })}
        </div>
      </>
    )
  }

  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
        {user ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  )
}

export default Rightbar