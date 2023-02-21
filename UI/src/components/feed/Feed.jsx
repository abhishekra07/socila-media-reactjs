import { useState, useEffect } from 'react'
import Post from '../post/Post'
import Share from '../share/Share'
import axios from 'axios';

import './feed.css'

const Feed = ({username}) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = username ? await axios.get(`http://localhost:8800/api/posts/profile/${username}`) : await axios.get("http://localhost:8800/api/posts/timeline/637f07d6ba241675937a9371")
      setPosts(res.data.sort((p1,p2) => {
        return new Date(p2.createdAt) - new Date(p1.createdAt)
      }))
    }
    fetchPosts()
  }, [])
  return (
    <div className='feed'>
      <div className="feedWrapper">
        <Share />
        {posts.map((post) => {
          return <Post key={post._id} post={post}/>
        })}
      </div>
    </div>
  )
}

export default Feed