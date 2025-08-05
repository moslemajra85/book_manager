import React from 'react'
import { FaBook, FaGraduationCap, FaChalkboardTeacher, FaLightbulb } from 'react-icons/fa'
import '../index.css' // Ensure your styles are imported

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <FaBook className="navbar-icon" />
        <span className="navbar-title">Book Manager</span>
      </div>
      <div className="navbar-right">
        <FaGraduationCap className="navbar-edu-icon" title="Education" />
        <FaChalkboardTeacher className="navbar-edu-icon" title="Teaching" />
        <FaLightbulb className="navbar-edu-icon" title="Ideas" />
      </div>
    </nav>
  )
}

export default Navbar