import React from 'react';
import Card from './Card';
import { useState } from 'react';
import { Bar } from 'react-chartjs-2'; // Import Bar chart from react-chartjs-2
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function DepartmentContent({ department, section }) {
   // State to manage the "show more" functionality for each faculty member
   const [showMore, setShowMore] = useState({});
   const [hoveredIndex, setHoveredIndex] = useState(null);
   // Function to toggle the "show more" state
   const handleShowMore = (index) => {
     setShowMore((prevState) => ({
       ...prevState,
       [index]: !prevState[index] // Toggle the specific faculty member's showMore state
     }));
   };
   
   const studentData = {
    labels: department.placement.map((p) => p.year),
    datasets: [
      {
        label: 'Placed',
        data: department.placement.map((p) => p.placed),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
      {
        label: 'Not Placed',
        data: department.placement.map((p) => p.notPlaced),
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
      {
        label: 'Further Studies',
        data: department.placement.map((p) => p.furtherStudies),
        backgroundColor: 'rgba(153, 102, 255, 0.6)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1,
      }
    ]
  };

  const studentOptions = {
    scales: {
      y: {
        beginAtZero: true,
      }
    }
  };

  // Data for Graph 2 (Companies visited, highest, median, average package)
  const packageData = {
    labels: department.placement.map((p) => p.year),
    datasets: [
      {
        label: 'Companies Visited',
        data: department.placement.map((p) => p.companiesVisited),
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
      {
        label: 'Highest Package (LPA)',
        data: department.placement.map((p) => p.highestPackage),
        backgroundColor: 'rgba(255, 206, 86, 0.6)',
        borderColor: 'rgba(255, 206, 86, 1)',
        borderWidth: 1,
      },
      {
        label: 'Median Package (LPA)',
        data: department.placement.map((p) => p.medianPackage),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
      {
        label: 'Average Package (LPA)',
        data: department.placement.map((p) => p.averagePackage),
        backgroundColor: 'rgba(153, 102, 255, 0.6)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1,
      }
    ]
  };

  const packageOptions = {
    scales: {
      y: {
        beginAtZero: true,
      }
    }
  };

  return (
    <div className="department-details">
      {section === 'hod' && (<>
      <h2>Department of {department.name} Engineering</h2>
      <h3>Programme: B.E({department.name} Engineering)</h3>
      <div className='hod_desk'>
        <div className="hod_text">
          <h2>HoD's Desk</h2>
          <h4>{department.quote}</h4>
          {department.message.map((item,index)=>(
            <p key={index}>{item.msg}</p>
          ))}
          <h3>Vision</h3>
          {department.vision.map((item,index)=>(
            <p key={index}>{index+1}. {item.vis}</p>
          ))}
          <h3>Mission</h3>
          {department.mission.map((item,index)=>(
            <p key={index}>{index+1}. {item.goal}</p>
          ))}
        </div>
            <div className="hod_image">
              <img src={department.hodImage} alt="HoD" />
            </div>
      </div>
      </>)}
      {section === 'workshops' && (
        <>
          <h2>Workshops</h2>
          {department.workshops.map((workshop, index) => (
            <Card key={index} title={workshop.title} description={workshop.description} />
          ))}
        </>
      )}
      {section === 'faculty' && (
        <>
          <h2>Faculty</h2>
          <div style={{display:'flex'}}>
          {department.faculty.map((member, index) => (
            <Card key={index} title={member.name} description={member.position}>
              <img
                src={member.image}
                alt={member.name}
                style={{ width: '100%', height: '150px', objectFit:'cover' }}
              />

              {/* Display basic information */}
              <p><strong>Position:</strong> {member.position}</p>
              <p><strong>Qualification:</strong> {member.qualification}</p>
              <p><strong>Expertise:</strong> {member.expertise}</p>

              {/* Show more details when 'showMore[index]' is true */}
              {showMore[index] && (
                <div>
                  <p><strong>Achievements:</strong> {member.achievements}</p>
                  <p><strong>Bio:</strong> {member.bio}</p>
                </div>
              )}

              {/* Show More / Show Less button */}
              <button onClick={() => handleShowMore(index)}>
                {showMore[index] ? 'Show Less' : 'Show More'}
              </button>
            </Card>
          ))}
          </div>
        </>
      )}


      {section === 'syllabus' && <>
      <h2>Syllabus</h2>
      {department.syllabus.map((sy, index) => (
            <div style={{border:'1px solid #ddd',borderRadius: '8px',
              padding: '20px',
              margin: '20px' ,
              width: '300px',
              boxShadow: '12px 9px 5px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.2s ease',
              transform: hoveredIndex === index ? 'scale(1.05)' : 'scale(1)',
              backgroundColor: 'white',
              textAlign: 'center',}}
              onMouseEnter={() => setHoveredIndex(index)} // Set the hovered index on mouse enter
              onMouseLeave={() => setHoveredIndex(null)} // Reset the hovered index on mouse leave
           ><a href={sy.links} style={{textDecoration:'None'}}>{sy.year}    {sy.sem}    Syllabus   2024-2025</a></div>
          ))}
    
      </>}
      {section === 'exam' && <>
      <h2>Results For Academic Year 2024-2025</h2>
      {department.syllabus.map((sy, index) => (
            <div style={{border:'1px solid #ddd',borderRadius: '8px',
              padding: '20px',
              margin: '20px' ,
              width: '300px',
              boxShadow: '12px 9px 5px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.2s ease',
              transform: hoveredIndex === index ? 'scale(1.05)' : 'scale(1)',
              backgroundColor: 'white',
              textAlign: 'center',}}
              onMouseEnter={() => setHoveredIndex(index)} // Set the hovered index on mouse enter
              onMouseLeave={() => setHoveredIndex(null)} // Reset the hovered index on mouse leave
           ><a href={sy.links} style={{textDecoration:'None'}}>{sy.year}    {sy.sem}    Result   2024-2025</a></div>
          ))}
    
      </>}
      {section === 'placement' && (<>
         <h2>Placement Stats</h2>
         {/* Graph 1: Students Placed vs Not Placed vs Further Studies */}
         <h3>Students Statistics</h3>
         <Bar data={studentData} options={studentOptions} />

         {/* Graph 2: Companies Visited and Packages */}
         <h3>Companies and Packages</h3>
         <Bar data={packageData} options={packageOptions} />
       </>)}
      {section === 'project' && <h2>Projects</h2>}
    </div>
  );
}

export default DepartmentContent;
