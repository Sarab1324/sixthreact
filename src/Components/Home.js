import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='d-flex flex-column'>
      <Link to="/user/john">John</Link>
      <Link to="/user/sarab">Sarab</Link>
      <Link to="/user/anne">Anne</Link>

    </div>
  )
}

export default Home