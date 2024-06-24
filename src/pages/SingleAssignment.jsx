import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useData } from '../context/Data'
import { Box, Typography,Button } from '@mui/material'
import { useDropzone } from 'react-dropzone';

const SingleAssignment = () => {
    const { allData} = useData()
    const { courseCode, assignmentCount} = useParams()
    const CourseObject = allData.find((course)=>course.courseCode==courseCode)
    const AssignmentObject= CourseObject.assignments.find((assignment)=>assignment.assignmentId==assignmentCount)
    const { getRootProps, getInputProps } = useDropzone({
      onDrop: (acceptedFiles) => {
        console.log(acceptedFiles);
      }
    })
  return (
    <Box sx={{display:'flex', width:'100%',flexDirection:'column' , p:2}}>
        {/* <Box sx={{display:'flex', flexDirection:'row'}} >
  <Link to={'/assign'} style={{fontSize:'18px', color:'black',textDecoration:'none'}} >Assignment /  </Link>
  <Link to={`/assign/${courseCode}/${assignmentCount}`} style={{fontSize:'18px', color:'black',textDecoration:'none'}} >{courseCode}-{assignmentCount}  </Link>
        </Box> */}
        <Typography variant='h5' sx={{mt:4,pl:2}} >{CourseObject.courseName}</Typography>
        <Typography variant='body1' sx={{mt:1,pl:2}} >Assignment No {assignmentCount}</Typography>
    <Box sx={{width:'100%' , textAlign:'center'}} >
        <Typography variant='h5' sx={{mt:1}} >{AssignmentObject.assignmentTitle}</Typography>
        <Typography variant='body1' sx={{mt:1}} >{AssignmentObject.assignmentDescription}</Typography>
    </Box>

  <Box sx={{display:'flex',justifyContent:'center' , width:'100%'}} >
      <Box
        {...getRootProps()}
        sx={{
          border: '2px dashed #aaa',
          borderRadius:'10px',
          padding: '20px',
          textAlign: 'center',
          cursor: 'pointer',
          backgroundColor: '#f9f9f9',
          display:'flex',
          alignItems:'center',
          justifyContent:'center',
          flexDirection:'column',
          mt:4,
          minWidth:'800px',
          height:'150px',
        
        }}
      >
        <input {...getInputProps()} />
        <Typography variant="h6">Drag and drop some files here, or click to select files</Typography>
   <Button variant="contained" sx={{mt:2}} > Upload</Button>
      </Box>
          </Box>
    </Box>
  )
}

export default SingleAssignment