import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useData } from '../context/Data'
import { Box, Typography } from '@mui/material'
import ReactPlayer from 'react-player'

const SingleLecture = () => {
    const {allData} = useData()
    const {courseCode,lectureId} = useParams()
    const [toggle , setToggle] = useState(false)
    const Course = allData.find((course)=>course.courseCode==courseCode)
    const Lecture = Course.lectures.find((lecture)=>lecture.lectureId==lectureId)
    
    console.log(Lecture.lectureLink);   

    setTimeout(()=>{
     setToggle(true)
    },1000)

  return (
    <Box sx={{display:'flex' , flexDirection:'column' , width:'100%', p:2}} >
        <Typography variant='h4' sx={{textAligh:'center'}} > {Course.courseName} </Typography>
        <Typography variant='h6' sx={{textAligh:'center'}} >Lecture No {lectureId} </Typography>
      
         <ReactPlayer
         url={Lecture.lectureLink}
         width="800px"
         height="400px"
         controls={true}
         key={Lecture.lectureLink}
         />
      
        <Typography variant='h6' sx={{textAligh:'center'}} > {Lecture.lectureTitle} </Typography>

    </Box>
  )
}

export default SingleLecture