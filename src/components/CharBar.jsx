import React, {useState, useEffect} from 'react'
import "./Home.css"

const ChatBar = ({socket}) => {
    const [users, setUsers] = useState([])

    useEffect(()=> {
        socket.on("newUserResponse", data => setUsers(data))
    }, [socket, users])

  return (
    <div className='chat__sidebar'>
        <h2>chatvp <img src='https://cdn.vectorstock.com/i/1000x1000/63/75/elegant-and-stylish-vp-logo-design-vp-logo-vector-37446375.webp' alt=''></img></h2>
        <div>
            <h4  className='chat__header'>ACTIVE USERS</h4>
            <div className='chat__users'>
                {users.map((item,index) => <p key= {index}>{item.userName}</p>)}
            </div>
        </div>
  </div>
  )
}

export default ChatBar;