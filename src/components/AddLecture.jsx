import React, { useRef, useState } from 'react'
import { Modal , Box , Typography,TextField ,Button,InputLabel,MenuItem,FormControl,Select } from '@mui/material'
import { useData } from '../context/Data';


const AddLecture = ({toggleLecture,setToggleLecture}) => {
    const{courses} = useData()
    const inputRefs = useRef([]);
    const [courseCode , setCourseCode] = useState('')


//Css styles for Box
     const style = {
       position: 'absolute',
       top: '50%',
       left: '50%',
       transform: 'translate(-50%, -50%)',
       width:'max-content',
       bgcolor: 'background.paper',
       borderRadius:4,
       boxShadow: 24,
       display:'flex',
       flexDirection:'column',
       p: 4,
     };
 const handleSubmit=()=>{

 }

 const handleCourseCode = ()=>{
       setCourseCode(e.target.value)
 }

  return (
    <div>
         <Modal
      open={toggleLecture}
      onClose={()=>setToggleLecture(false)}
    >
      <Box sx={style}>
        <Typography sx={{mb:4}}  textAlign='center' variant="h6" component="h2">
          Lecture Details
        </Typography>
        <TextField  name="lectureTitle" required  inputRef={el => (inputRefs.current[0] = el)}    sx={{mb:2, width:400}}  label="Lecture Title" variant="outlined" />
        <TextField  name="LectureLink"  required  inputRef={el => (inputRefs.current[1] = el)}  sx={{mb:2, width:400}}   label="Lecture Link" variant="outlined" />
         {/* Code For Select Course Code */}
         <Box  sx={{display:'flex',flexDirection:'row'}}  >
        <Box sx={{ maxWidth: 160 , mb:1}}>
      <FormControl sx={{width:150}} >
        <InputLabel>Course Code</InputLabel>
        <Select
          id="demo-simple-select"
          value={courseCode}
          label="Course Code"
          onChange={handleCourseCode}
          >
          {courses.map((course,index)=><MenuItem key={index} value={course.courseCode}>{course.courseCode}</MenuItem>)}
        </Select>
      </FormControl>
    </Box>
          </Box>
        <Box >
         {/* Code For Buttons */}
        <Button onClick={handleSubmit}  sx={{ml:14 , mr:2}} variant="contained">Add</Button>
        <Button onClick={()=>setToggleLecture(false)}  variant="outlined">Cancel</Button>
        </Box>
      </Box>
    </Modal>
    </div>
  )
}

export default AddLecture