import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useData } from '../context/Data';


const AssignmentCard = ({assignmentTitle,assignmentDescription,courseCode,startDate,endDate,assignmentCount}) => {
    const {setCourses, courses} = useData()
    const courseObj = courses.find(obj => obj.courseCode === courseCode )
    //  setCourses([
    //   ...courses,
    //   {
    //     ...courseObj,
    //     assignments:[courseObj].assignments++
    //   }
    //  ])

    
  return (
    <Card sx={{ maxWidth: 275 ,ml:4,mr:2,mb:3 }}>
    <CardContent>
      <Typography align='center' variant="h6" component="div">
        {courseObj.courseName}
      </Typography>
      <Typography sx={{ fontSize: 18 , textAlign:'center' }} gutterBottom>
        Assignment No : {assignmentCount+1}
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
      <Button size="small">View Assignment</Button>
    </CardActions>
  </Card>
  )
}

export default AssignmentCard