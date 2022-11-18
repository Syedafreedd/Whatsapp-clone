import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import { Avatar, IconButton } from '@mui/material';

import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import React from 'react'
import "./Chat.css";

import MicIcon from '@mui/icons-material/Mic';

function Chat({ messages }) {
  return (
    <div className='chat'>
      <div className="chat__header">
        <Avatar />

        <div className="chat__headerInfo">
          <h3>Room name</h3>
          <p>Last seen at....</p>
        </div>
        <div className="chat__headerRight">
          <IconButton>
            <SearchOutlinedIcon />
          </IconButton>
          <IconButton>
            <AttachFileOutlinedIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>

      <div className="chat__body">
        {messages.map((message)=>(
             <p className={` chat__message ${message.received} && "chat__receiver"`}>
             <span className='chat__name'>{message.name}</span>
            {message.message}
             
             <span className="chat__timestamp">
               {message.timestamp}
             </span>
           </p>
        ))}
      
      </div>

        <div className="chat__footer">
          <InsertEmoticonIcon/>
          <form action="">
            <input 
            placeholder="Type a message"
            type="text" />
            <button 
            type="submit">
              Send a message
            </button>
          </form>
          <MicIcon/>
        </div>




    </div>
  )
}

export default Chat