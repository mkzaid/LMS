import React, { useState } from 'react'
import './courses.css'
import AddCourse from '../../components/addCourse/AddCourse'
import CourseCard from '../../components/courseCard/CourseCard'
const Courses = () => {
  const [toggleBox, setToggle] = useState(false)
  return (

    <div className='course_container' >
    <div className='courses_header' >
      <p>Courses</p>
      <div className="addBtn">
        <button onClick={()=>setToggle(!toggleBox)} >Add Course</button>
      </div>
    </div>
    <div className="course_header_line"></div>
    {toggleBox&& <div className="addCourseContainer">
      <AddCourse  setToggle={setToggle} />
     </div>
     }
     <div className="courses_List">
      <CourseCard/>
     </div>
    </div>

  )
}

export default Courses