
import React, { useState } from 'react'

import Button from '@mui/material/Button';
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography';
import { useData } from '../context/Data';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Collapse } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const LecturesList = ({courseName,courseCode}) => {
  const navigate = useNavigate()
  const [drop , setDrop]= useState(false)
    const {allData} = useData()
    // console.log(lectures);
    // const style={
    //   // display:'none',
    //   zIndex:-4,
    //   height:'0',
    //   display:'none',
    //   // opacity:0,
    //   transition:'transform 1s ease',
    //   ...(drop && { display:'flex', transform: 'translateY(40px)',height:'100%' }),
    // }
  console.log(allData);
//Handling the Seprate Lecture Event
 const handleView = (lectureId,courseCode)=>{
    navigate(`/lecture/${courseCode}/${lectureId}`)
 }
  return (
      <Box sx={{display:'flex', flexDirection:'column',width:'100%',alignItems:'center' }}>

    <Box sx={{display:'flex' , flexDirection:'row',justifyContent:'center'  , width:'90%' }} >
          <Box sx={{ backgroundColor:'#7091E6',borderRadius:0,display:'flex',width:'100%' , alignItems:'center', p:1 }} >
        <Typography variant='h6' sx={{color:'white'}} >{courseName}</Typography>
        <Box sx={{display:'flex', flexDirection:'row-reverse',flex:1}} >
          <KeyboardArrowDownIcon sx={{cursor:'pointer',color:'white'}} onClick={()=>setDrop(!drop)} />
        </Box>
      </Box>
    </Box>
       <Box sx={{backgroundColor:'#8697C4',color:'white',width:'90%'}}>
       <Collapse in={drop} >
        {
          allData.map((course)=>{
            if(course.courseCode==courseCode){

              return course.lectures.map((lecture , ind)=>{
                return(
                  <Box key={ind}  sx={{display:'flex'}}>
                  <Typography  sx={{p:1}}>Lecture {lecture.lectureId}: {lecture.lectureTitle}</Typography>
                  <Box sx={{display:'flex' ,flex:1, flexDirection:'row-reverse'}}>
                    <Button  onClick={()=>handleView(lecture.lectureId,courseCode)} variant='outlined' 
                    sx={{border:'none', fontSize:10, color:'white',textDecorationLine:'underline',
                      '&:hover': {
                        backgroundColor: 'inherit', // Keep the same background color
                        boxShadow: 'none', // Remove any box-shadow effect,
                        border:'none',
                        textDecoration:'underline'
                      },
                    }}
                    >View</Button>
                  </Box>
                  </Box>
                ) 

              })
            }
          })
        }
       </Collapse>
       </Box >
      </Box>
  )
}

export default LecturesList