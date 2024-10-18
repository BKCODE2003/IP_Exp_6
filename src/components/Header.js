import React from 'react';
import { Link } from 'react-router-dom';

function Header(props) {
  return (
    <header>
      <h1>{props.title}</h1>
      <nav>
        <Link to="/">Home</Link>   
        <Link to="/admission">Admissions</Link>   
        <Link to="/course">Courses</Link>   
        <Link to="/department">Departments</Link>   
        <Link to="/placement">Placements</Link>   
        <Link to="/about">About</Link>  
        <Link to="/contact">Contact Us</Link>
      </nav>
    </header>
  ); 
}

export default Header;
