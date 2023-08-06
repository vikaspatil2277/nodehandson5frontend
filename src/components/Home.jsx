import React, {useState} from 'react'
import {useNavigate} from "react-router-dom"

const Home = ({socket}) => {
    const navigate = useNavigate()
    const [userName, setUserName] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        localStorage.setItem("userName", userName)
        socket.emit("newUser", {userName, socketID: socket.id})
        navigate("/chat")
    }
  return (
    <form className='home__container' onSubmit={handleSubmit}>
          <img src='https://cdn.vectorstock.com/i/1000x1000/63/75/elegant-and-stylish-vp-logo-design-vp-logo-vector-37446375.webp' className='img1' alt='logo'></img>
        <h2 className='home__header'>Sign in to Open Chatvp</h2>
        <label htmlFor="username">Username</label>
        <input type="text" 
        minLength={6} 
        name="username" 
        id='username'
        className='username__input' 
        value={userName} 
        onChange={e => setUserName(e.target.value)}
        />
        <button className='home__cta'>SIGN IN</button>
    </form>
  )
}
export default Home;