import React from 'react';
import departments from './departmentData'; // Import department data

function DepartmentNav({ setSelectedDepartment }) {
  return (
    <nav className="department-nav">
      <ul>
        {departments.map(dept => (
          <li key={dept.id}>
            <a href="#" onClick={() => setSelectedDepartment(dept)}>
              {dept.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default DepartmentNav;
