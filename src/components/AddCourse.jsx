import React, { useRef } from 'react'
import { Modal , Box , Typography,TextField ,Button } from '@mui/material'
import { useData } from '../context/Data'


const AddCourse = ({setToggle , toggle}) => {

  //Fetching Data from Contex 
  const {courses, setCourses , allData , setData} = useData()
  const inputRefs = useRef([]);
 //Css styles for Box
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width:'max-content',
    bgcolor: 'background.paper',
    // border: '2px solid #000',
    borderRadius:4,
    boxShadow: 24,
    display:'flex',
    flexDirection:'column',
    p: 4,
  };
 
 // UseFull Function
    // Handling the Add Button .. When Clicked will set all three inputs values to the Courses List as
    //a object
    const handleSubmit = (event) => {
      event.preventDefault();
      if(inputRefs.current[0].value&&inputRefs.current[1].value&&inputRefs.current[2].value&&inputRefs.current[3].value){

        // setCourses([
        //   ...courses,
        //   {
        //     teacherName: inputRefs.current[0].value,
        //     courseName: inputRefs.current[1].value,
        //     courseCode: inputRefs.current[2].value,
        //     hours: inputRefs.current[3].value,
        //     assignments:0
        //   }])
        const updatedData = allData.map((data)=>{

        })
        setData([
          ...allData,
          {
                teacherName: inputRefs.current[0].value,
                courseName: inputRefs.current[1].value,
                courseCode: inputRefs.current[2].value,
                hours: inputRefs.current[3].value,
                assignments:[
                  {
              assignmentId:1,
              assignmentTitle:'Types of Cloud Computing',
              assignmentDescription:'Write three types of cloud computing in detail. Also tell atleast 3 unique examples of each type.',
              startDate:'14 June wed',
              endDate:'18 June Sat',
                  }
              ],
              lectures:[
                {
                    lectureId:1,
                    lectureTitle:'What is Cloud Computing',
                    lectureLink:'https://www.youtube.com'
                 }
        ]
          }
        ])
        setToggle(false)
      }else{
        window.alert('Please Enter Values in the Field')
      }
    };

  return (
    <div>
    <Modal
      open={toggle}
      onClose={()=>setToggle(false)}
    >
      <Box sx={style}>
        <Typography sx={{mb:4}}  textAlign='center' variant="h6" component="h2">
          Course Details
        </Typography>
        <TextField  name="teacherName" required  inputRef={el => (inputRefs.current[0] = el)}    sx={{mb:2, width:400}}  label="Teachers Name" variant="outlined" />
        <TextField  name="courseName"  required  inputRef={el => (inputRefs.current[1] = el)}  sx={{mb:2, width:400}}   label="Course Name" variant="outlined" />
        <TextField  name="courseCode"  required  inputRef={el => (inputRefs.current[2] = el)}  sx={{mb:2, width:400}}   label="Course Code" variant="outlined" />
        <TextField  name="hours"   type='number' inputRef={el => (inputRefs.current[3] = el)}   sx={{mb:2, width:400}}  label="Course Hours Per Week" variant="outlined" />
        <Box >
        <Button onClick={handleSubmit}  sx={{ml:14 , mr:2}} variant="contained">Add</Button>
        <Button onClick={()=>setToggle(false)}  variant="outlined">Cancel</Button>
        </Box>
      </Box>
    </Modal>
  </div>
  )
}

export default AddCourse