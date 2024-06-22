
import './App.css'
import SideBar from "./components/SideBar"
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Courses from './pages/Courses';
import Home from './pages/Home';
import Assignment from './pages/Assignment';
import { DataProvider } from './context/Data';

function App() {


  return (
    <DataProvider>
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
    </DataProvider>
  )
}

export default App
