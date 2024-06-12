import React from 'react'
import coursePic from '../../img/course_logo.png'
import './courserCard.css'
const CourseCard = () => {
  return (
    <div className='course_card_container'>
        <div className="course_card_img">
            <img src={coursePic}  />
        </div>
            <p className="teacher_name">
                Dr.Abdullah
            </p>
            <p className="course_title">
                DSA-510
            </p>
            <p>4 hours/Week</p>
    </div>
  )
}

export default CourseCard