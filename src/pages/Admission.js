import React from 'react';
import { useParams } from 'react-router-dom';

function Admission() {
  const courses = [
    { code: '318599510', name: 'ARTIFICIAL INTELLIGENCE AND DATA SCIENCE', intake: 120 },
    { code: '318526110', name: 'ELECTRONICS AND COMPUTER SCIENCE', intake: 60 },
    { code: '318524510', name: 'COMPUTER ENGINEERING', intake: 180 },
    { code: '318591610', name: 'AUTOMATION AND ROBOTICS', intake: 60 },
    { code: '318537210', name: 'ELECTRONICS & TELECOMMUNICATION ENGINEERING', intake: 120 },
    { code: '318524610', name: 'INFORMATION TECHNOLOGY', intake: 180 },
  ];

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>
        FIRST YEAR BACHELOR OF TECHNOLOGY (B.Tech) Intake
      </h2>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #ddd', padding: '12px', backgroundColor: '#f2f2f2' }}>SR. NO.</th>
            <th style={{ border: '1px solid #ddd', padding: '12px', backgroundColor: '#f2f2f2' }}>DTE COURSE CODE</th>
            <th style={{ border: '1px solid #ddd', padding: '12px', backgroundColor: '#f2f2f2' }}>COURSE NAME</th>
            <th style={{ border: '1px solid #ddd', padding: '12px', backgroundColor: '#f2f2f2' }}>INTAKE</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course, index) => (
            <tr key={course.code}>
              <td style={{ border: '1px solid #ddd', padding: '12px', textAlign: 'center' }}>{index + 1}</td>
              <td style={{ border: '1px solid #ddd', padding: '12px', textAlign: 'center' }}>{course.code}</td>
              <td style={{ border: '1px solid #ddd', padding: '12px', textAlign: 'center' }}>{course.name}</td>
              <td style={{ border: '1px solid #ddd', padding: '12px', textAlign: 'center' }}>{course.intake}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Admission;
