import './css/sidebar.css'
import { Link } from 'react-router-dom'
import React from 'react'

const SideBar = () => {
  return (
    <div className='sidebar_container' >
            <h3>Dashboard</h3>
            <div className="tiltes">
               <button>
                <Link to={'/courses'} >Courses</Link>
               </button>
               <button>
                <Link to={'/assign'} >Assignments</Link>
               </button>
               <button>
                <Link to={'/lecture'} >Lectures</Link>
               </button>
            </div>
    </div>
  )
}

export default SideBar