import React, { useRef , useState } from 'react'
import { Modal , Box , Typography,TextField ,Button,InputLabel,MenuItem,FormControl,Select } from '@mui/material'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useData } from '../context/Data';

const AddAssignment = ({toggleAssign, setToggleAssign}) => {
  const {courses ,setAssignments , assignments , setCourses ,allData, setData } = useData()
    const inputRefsAssignment = useRef([]);
    const [values, setValues]= useState({
      courseCode:'',
      startDate:null,
      endDate:null
    })
    const [selectedDate, setSelectedDate] = useState(null);
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
        minWidth:600
      };

      const handleCourseCode =(event)=>{
        setValues({
          ...values,
          courseCode:event.target.value
        })
      }
      const handleSubmit =()=>{

        // setAssignments([...assignments,
        //   {
        //     assignmentTitle:inputRefsAssignment.current[0].value,
        //     assignmentDescription:inputRefsAssignment.current[1].value,
        //     ...values
        //   }])
          const updatedData = allData.map((data)=>{
          if(data.courseCode==values.courseCode){
            return {
              ...data,
              assignments:[
                ...data.assignments,
                {
                  assignmentId:data.assignments.length+1,
                  assignmentTitle:inputRefsAssignment.current[0].value,
                      assignmentDescription:inputRefsAssignment.current[1].value,
                      ...values
                }
              ]
            }
          }
          else{
            return data
          }
          })       
          setData(updatedData);
          setToggleAssign(false)


       //Logic To Increase the Assignment Number of Specific Course
        //    setCourses(courses.map(course => 
        //     course.courseCode === values.courseCode
        //         ? { ...course, assignments: course.assignments + 1 }
        //         : course
        // ));

      }
  return (
    <Modal
      open={toggleAssign}
      onClose={()=>setToggleAssign(false)}
    >
      <Box sx={style}>
        <Typography sx={{mb:1}}  textAlign='center' variant="h6" component="h2">
          Assignment
        </Typography>
        <TextField  name="assignmentTitle" inputRef={element=>(inputRefsAssignment.current[0]=element)} fullWidth   sx={{mb:2}}  label="Assignment Title" variant="standard" />
        <TextField  name="assignmentDescription"   inputRef={element=>(inputRefsAssignment.current[1]=element)} multiline rows={4}  sx={{mb:2}}    label="Assignment Description" variant="outlined" />
{/* Code For the Select Course Tag  */}
      <Box  sx={{display:'flex',flexDirection:'row'}}  >
        <Box sx={{ maxWidth: 160 , mb:1}}>
      <FormControl sx={{width:150}} >
        <InputLabel>Course Code</InputLabel>
        <Select
          id="demo-simple-select"
          value={values.courseCode}
          label="courseCode"
          onChange={handleCourseCode}
          >
          {allData.map((course,index)=><MenuItem key={index} value={course.courseCode}>{course.courseCode}</MenuItem>)}
        </Select>
      </FormControl>
    </Box>

        <TextField  name="AssignmentNumber" type='number'   sx={{ml:3,mb:2 , maxWidth:200}}  label="Assignment Number" variant="outlined" />
          </Box>
{/* Code for the Assignment Opening And Closing Date */}
        <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Box sx={{ display: 'flex',justifyContent:'space-around',width:330, alignItems: 'center', mt: 1,mb:2 }}>
        <DatePicker
          label="Start Date"
          sx={{width:150}}
          value={values.startDate}
          onChange={(newValue) => setValues({
            ...values,
            startDate:newValue
          })}
          slotProps={{ textField: { variant: 'outlined' } }}
          />
        <DatePicker
          sx={{width:160 , ml:2}}
          label="Close Date"
          value={values.endDate}
          onChange={(newValue) => setValues({
            ...values,
            endDate:newValue
          })}
          slotProps={{ textField: { variant: 'outlined' } }}
        />
      </Box>
    </LocalizationProvider>

        <Box  sx={{width:'100%',display:'flex', justifyContent:'center'}} >
        <Button onClick={handleSubmit}  sx={{mr:1}} variant="contained">Add</Button>
        <Button onClick={()=>setToggleAssign(false)}  variant="outlined">Cancel</Button>
        </Box>
      </Box>
    </Modal>
  )
}

export default AddAssignment