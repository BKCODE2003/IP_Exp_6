import React, { useState } from 'react';
import DepartmentNav from './DepartmentNav';
import Sidebar from './Sidebar';
import DepartmentContent from './DepartmentContent';
import departments from './departmentData'; // Import department data

function Department() {
  const [selectedDepartment, setSelectedDepartment] = useState(departments[0]);
  const [selectedSection, setSelectedSection] = useState('workshops'); // Default to 'workshops'

  return (
    <div className="department-page">
      {/* Department navigation bar below the main nav */}
      <DepartmentNav setSelectedDepartment={setSelectedDepartment} />

      {/* Main content layout with sidebar and department content */}
      <div className="content-layout">
        {/* Sidebar for sections (workshops, faculty, etc.) */}
        <div className='sidebar-content'>
          <Sidebar setSelectedSection={setSelectedSection} />
        </div>
        {/* Main department content */}
        <div className="main-content">
          <DepartmentContent department={selectedDepartment} section={selectedSection} />
        </div>
      </div>
    </div>
  );
}

export default Department;
