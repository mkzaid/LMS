import React, { useState } from 'react'
import AddCourse from '../components/AddCourse'
import CourseCard from '../components/CourseCard'
import { useData } from '../context/Data'
import { Button , Typography, Box } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';

const Courses = () => {
  const [toggleBox, setToggle] = useState(false)
  const {courses, setCourses} = useData();

  
  return (
    <Box sx={{display:'flex', width:'100%', flexDirection:'column', p:2  }} >
      <Box sx={{display:'flex', width:'100%', flexDirection:'row',alignItems:'center', mb:8 }}>
    <Typography gutterBottom variant="h5" sx={{height:10}}  component="div"> Courses </Typography>
      <Box  sx={{ display:'flex', flexDirection:'row-reverse', flex:'1'}} >
      <Button sx={{borderRadius:8}} size='small' variant="contained"   onClick={()=>setToggle(true)}>
      <AddIcon/> Add Course
      </Button>
      <AddCourse setToggle={setToggle} toggle={toggleBox}  />
    </Box>
    </Box>
    <Box sx={{display:'flex', flexDirection:'row', flexWrap:'wrap'}} >
      {courses.map((course,ind)=><CourseCard key={ind} teacherName={course.teacherName} courseName={course.courseName}
          hours = {course.hours} courseCode={course.courseCode}  />)}
    </Box>
    </Box>


  )
}

export default Courses