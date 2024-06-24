import React, { useState } from 'react'
import { Box , Typography , Button } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import AddLecture from '../components/AddLecture'
import LecturesList from '../components/LecturesList';


const Lectures = () => {
    const [toggleLecture , setToggleLecture]= useState(false)

  return (
    <Box sx={{display:'flex', width:'100%', flexDirection:'column', p:2 , }} >
    <Box sx={{display:'flex', width:'100%', flexDirection:'row',alignItems:'center', mb:8 }}>
   <Typography gutterBottom variant="h5" sx={{height:10}}  component="div"> Lectures </Typography>
  <Box  sx={{ display:'flex', flexDirection:'row-reverse', flex:'1'}} >
    <Button sx={{borderRadius:8}} size='small' variant="contained"   onClick={()=>setToggleLecture(true)}>
    <AddIcon/> Add Lecture
    </Button>
    <AddLecture toggleLecture={toggleLecture} setToggleLecture={setToggleLecture}  />
  </Box>
    </Box>
           <LecturesList />
    </Box>
    
  )
}

export default Lectures