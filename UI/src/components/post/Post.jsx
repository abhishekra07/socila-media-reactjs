import { useState, useEffect, useContext } from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { Users } from '../../data';
import axios from 'axios';
import { format } from 'timeago.js'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext'
import './post.css'

const Post = ({ post }) => {
    const [like, setLike] = useState(post.likes.length);
    const [isLiked, setIsLiked] = useState(false);
    const [user, setUser] = useState({});
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const { user:currentUser }= useContext(AuthContext);

    useEffect(() => {
        setIsLiked(post.likes.includes(currentUser._id))
    },[post.likes, currentUser._id])

    useEffect(() => {
        const fetchUser = async () => {
          const res = await axios.get(`http://localhost:8800/api/users?userId=${post.userId}`)
          setUser(res.data)
        }
        fetchUser()
      }, [post.userId])

    const likeHandler = async () => {
        try {
            await axios.put(`http://localhost:8800/api/posts/${post._id}/like`, {userId:currentUser._id});
        } catch(err) {
            
        }
        setLike(isLiked ? like - 1 : like + 1 )
        setIsLiked(!isLiked)
    }
  return (
    <div className='post'>
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <Link to={`/profile/${user.username}`}>
                        <img src={PF + user.profilePicture} alt="" className="postProfileImg" />
                    </Link>
                    <span className="postUsername">{user.username}</span>
                    <span className="postDate">{format(post.createdAt)}</span>
                </div>
                <div className="postTopRight">
                    <MoreVertIcon />
                </div>
            </div>
            <div className="postCenter">
                <span className="postText" style={{whiteSpace: "pre-line"}}>{post?.desc}</span>
                <img className='postImg' src={PF+post.img} alt="" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img src={PF + "like.png"} alt="" className="likeIcon" onClick={likeHandler}/>
                    <img src={PF+"heart.png"} alt="" className="likeIcon" onClick={likeHandler}/>
                    <span className="postLikeCounter">{like} people like it</span>
                </div>
                <div className="postBottomRight">
                    <span className="postCommentText">{post.comment} comments</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Post