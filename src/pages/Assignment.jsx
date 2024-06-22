import React, { useState } from 'react'
import { Box , Typography , Button } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import AddAssignment from '../components/AddAssignment';
import { useData } from '../context/Data';
import AssignmentCard from '../components/AssignmentCard';

const Assignment = () => {
  const {assignments} = useData();
const [toggleAssign , setToggleAssign] = useState(false)

//Finding the courseName using courseCode that Teacher will enter

            return (
    <Box sx={{display:'flex', width:'100%', flexDirection:'column', p:2 , }} >
      <Box sx={{display:'flex', width:'100%', flexDirection:'row',alignItems:'center', mb:8 }}>
     <Typography gutterBottom variant="h5" sx={{height:10}}  component="div"> Assignments </Typography>
    <Box  sx={{ display:'flex', flexDirection:'row-reverse', flex:'1'}} >
      <Button sx={{borderRadius:8}} size='small' variant="contained"   onClick={()=>setToggleAssign(true)}>
      <AddIcon/> Add Assignment
      </Button>
      <AddAssignment toggleAssign={toggleAssign} setToggleAssign={setToggleAssign}  />
    </Box>
      </Box>
      <Box sx={{display:'flex' , gap:'1' , flexDirection:'row', flexWrap:'wrap'}} >

    {assignments.map((card,indx)=>{
      
      return <AssignmentCard key={indx} assignmentTitle= {card.assignmentTitle} card={assignments.assignmentDescription}
      courseCode={card.courseCode} startDate={card.startDate} endDate={card.endDate} assignmentCount={indx}   />
    })}
    </Box>
    </Box>
  )
}

export default Assignment