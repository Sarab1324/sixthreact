import React from 'react'
import {useParams , useLocation} from 'react-router-dom'
import { Link } from 'react-router-dom'

const Timeline = () => {
  const {name} = useParams()
  const location = useLocation()
  return (
    <div>
      welcome {name} 
      <Link  to='/'>back</Link>

    </div>
  )
}

export default Timeline