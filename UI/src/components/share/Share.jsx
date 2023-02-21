import PermMediaIcon from '@mui/icons-material/PermMedia';
import LabelIcon from '@mui/icons-material/Label';
import RoomIcon from '@mui/icons-material/Room';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import { AuthContext } from '../../context/AuthContext';
import './share.css'
import { useContext, useRef, useState } from 'react';
import { postCall, uploadCall } from '../../apiCalls';

const Share = () => {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const { user } = useContext(AuthContext);
    const desc = useRef();
    const [file, setFile] = useState(null);
    

    const submitHandler = async (e) => {
        e.preventDefault();
        console.log(desc.current.value)
        
        const newPost = {
            userId:user._id,
            desc:desc.current.value
        }
        console.log(newPost)
        // return;
        if(file) {
            const data = new FormData();
            data.append("file", file);
            newPost.img = file.name;
            await uploadCall(data);
            await postCall(newPost);
        }else {
            await postCall(newPost);
        }
        window.location.reload();
    }

  return (
    <div className='share'>
        <div className="shareWrapper">
            <div className="shareTop">
                <img src={PF + user.profilePicture} alt="" className="shareProfileImg" />
                <textarea placeholder={"what's in your mind " + user.username} className="shareInput" ref={desc}/>
            </div>
            <hr className='shareHr' />
            <form className="shareBottom" onSubmit={submitHandler}>
                <div className="shareOptions">
                    <label htmlFor='file' className="shareOption">
                        <PermMediaIcon htmlColor='tomato' className='shareIcon' />
                        <span className='shareOptionText'>Photo or Video</span>
                        <input style={{display: "none"}} type="file" id='file' accept='.png,.jpeg,.jpg' onChange={(e) => setFile(e.target.files[0])}/>
                    </label>
                    <div className="shareOption">
                        <LabelIcon htmlColor='blue' className='shareIcon' />
                        <span className='shareOptionText'>Tag</span>
                    </div>
                    <div className="shareOption">
                        <RoomIcon htmlColor='green' className='shareIcon' />
                        <span className='shareOptionText'>Location</span>
                    </div>
                    <div className="shareOption">
                        <EmojiEmotionsIcon htmlColor='goldenrod' className='shareIcon' />
                        <span className='shareOptionText'>Feelings</span>
                    </div>
                </div>
                <button type='submit' className="shareButton">Share</button>
            </form>
        </div>
    </div>
  )
}

export default Share