import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useData } from '../context/Data';
import { useNavigate } from 'react-router-dom';


const AssignmentCard = ({assignmentDescription,startDate,endDate,assignmentCount,courseName,courseCode}) => {
  const navigate = useNavigate()
    const handleViewAssignment = ()=>{
   console.log(courseCode,assignmentCount);
   navigate(`/assign/${courseCode}/${assignmentCount}`)
    }
  return (
    <Card sx={{ width: 275 ,ml:4,mr:2,mb:3 }}>
    <CardContent>
      <Typography align='center' variant="h6" component="div">
        {courseName}
      </Typography>
      <Typography sx={{ fontSize: 18 , textAlign:'center' }} gutterBottom>
        Assignment No : {assignmentCount}
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        {assignmentDescription}
      </Typography>
      <Typography variant="body2" align='center' >
        Start Date : {startDate.toString().slice(0,15)}
        <br />
        End Date :{endDate.toString().slice(0,15)} 
      </Typography>
    </CardContent>
    <CardActions sx={{display:'flex' , justifyContent:'center'}}>
      <Button onClick={handleViewAssignment} size="small">View Assignment</Button>
    </CardActions>
  </Card>
  )
}

export default AssignmentCard