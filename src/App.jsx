
import './App.css'
import SideBar from "./components/sidebar/SideBar"
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Courses from './pages/courses/Courses';
import Home from './pages/home/Home';
import Assignment from './pages/Assignments/Assignment';

function App() {


  return (
    <Router>
            <div className="app">
                <SideBar />
                <div className="content">
                  <Routes>
                        <Route path="/" element={<Home/>} />
                        <Route path="/courses" element={<Courses/>} />
                        <Route path="/assign" element={<Assignment/>} />
                  </Routes>
                </div>
            </div>
        </Router>
  )
}

export default App
