
import React, { useState } from 'react'

import Button from '@mui/material/Button';
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography';
import { useData } from '../context/Data';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Collapse } from '@mui/material';

const LecturesList = () => {
  
  const [drop , setDrop]= useState(false)
    const {lectures} = useData()
    console.log(lectures);
    // const style={
    //   // display:'none',
    //   zIndex:-4,
    //   height:'0',
    //   display:'none',
    //   // opacity:0,
    //   transition:'transform 1s ease',
    //   ...(drop && { display:'flex', transform: 'translateY(40px)',height:'100%' }),
    // }

  return (
      <Box sx={{display:'flex', flexDirection:'column',width:'100%',alignItems:'center',mt:8  }}>

    <Box sx={{display:'flex' , flexDirection:'row',justifyContent:'center'  , width:'90%' }} >
          <Box sx={{ backgroundColor:'black',borderRadius:0,display:'flex',width:'100%' , alignItems:'center', p:1 }} >
        <Typography variant='h6' sx={{color:'white'}} >Data Structure And Algoritms</Typography>
        <Box sx={{display:'flex', flexDirection:'row-reverse',flex:1}} >
          <KeyboardArrowDownIcon sx={{cursor:'pointer',color:'white'}} onClick={()=>setDrop(!drop)} />
        </Box>
      </Box>
    </Box>
       <Box sx={{backgroundColor:'grey',color:'white',width:'90%'}}>
       <Collapse in={drop} >
         <Typography sx={{p:1}}>Lecture 1: {lectures[0].lecture1.lectureTitle}</Typography>
       </Collapse>
       </Box >
      </Box>
  )
}

export default LecturesList