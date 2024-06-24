import React, { useState } from 'react'
import { createContext , useContext } from 'react'



const DataContext = createContext() 
export const useData = ()=>{
    return useContext(DataContext)
}

export const DataProvider = ({children})=>{
     const [courses , setCourses] = useState([{
        teacherName:'Dr.Zaid',
        courseName:'Data Structure And Algoritms',
        courseCode:'DSA-410',
        assignments:0,
        lectures:0,
        hours:'4'
     }])
     const [assignments , setAssignments] = useState([{
        assignmentTitle:'Types of Cloud Computing',
        assignmentDescription:'Write three types of cloud computing in detail. Also tell atleast 3 unique examples of each type.',
        courseCode:'DSA-410',
        startDate:'14 June wed',
        endDate:'18 June Sat',
     }])
     const [lectures , setLectures] = useState([{
         courseCode:'DSA-410',
         lecture1:{
            lectureTitle:'What is Cloud Computing',
            lectureLink:'https://www.youtube.com'
         }
     }])
     //Making A signle Array of Objects For Course , Assignments , Lectures For Easy Approach

     const [allData , setData] = useState([
        {
        teacherName:'Dr.Zaid',
        courseName:'Data Structure And Algoritms',
        courseCode:'DSA-410',
        hours:'4',
        assignments:[
            {
        assignmentId:1,
        assignmentTitle:'Types of Cloud Computing',
        assignmentDescription:'Write three types of cloud computing in detail. Also tell atleast 3 unique examples of each type.',
        courseCode:'DSA-410',
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

     const value = {
        courses ,
        assignments,
        lectures,
        allData,
        setData,
        setCourses,
        setAssignments,
        setLectures
     }
    return(
        <DataContext.Provider  value={value}>
            {children}
        </DataContext.Provider>
    )
}
