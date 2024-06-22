import React from 'react'
import coursePic from '../img/course_pic.png'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const CourseCard = ({teacherName,courseName,courseCode,hours}) => {
  return (
    <Card sx={{ maxWidth: 250,minWidth:250 ,ml:4,mr:2,mb:3}}>
    <CardMedia
      component="img"
      alt="green iguana"
      height="140"
      image={coursePic}
      sx={{objectFit:'contain'}}
    />
    <CardContent>
      <Typography  variant="body1" >
        {courseName}
      </Typography>
      <Typography variant="body1" >
        {courseCode}
      </Typography>
      <Typography variant="body1" >
       {teacherName}
      </Typography>
      <Typography variant="body1" >
       {hours} hours per week
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small" sx={{mb:1}} >Delete</Button>
    </CardActions>
  </Card>
  )
}

export default CourseCard