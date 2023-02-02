import React from 'react'
import Posts  from '../../components/posts/Posts'
import Share from '../../components/share/share'
import Stories from '../../components/stories/Stories'
import Login from '../login/Login'
import "./home.scss"

const Home = () => {
  return (
    <div className='home'>
          <Stories/>
          <Share/>
          <Posts/>
    </div>
  )
}

export default Home