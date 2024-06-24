
import './App.css'
import SideBar from "./components/SideBar"
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Courses from './pages/Courses';
import Home from './pages/Home';
import Assignment from './pages/Assignment';
import { DataProvider } from './context/Data';
import Lectures from './pages/Lectures';

function App() {


  return (
    <DataProvider>
    <Router>
            <div className="app">
                <SideBar />
                <div className="content">
                  <Routes>
                        <Route path="/" element={<Courses/>} />
                        <Route path="/courses" element={<Courses/>} />
                        <Route path="/assign" element={<Assignment/>} />
                        <Route path="/lecture" element={<Lectures/>} />
                  </Routes>
                </div>
            </div>
        </Router>
    </DataProvider>
  )
}

export default App
