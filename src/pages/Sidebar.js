import React from 'react';

function Sidebar({ setSelectedSection }) {
  return (
    <aside className="sidebar">
      <ul>
        <li onClick={() => setSelectedSection('hod')}>HoD's Desk</li>
        <li onClick={() => setSelectedSection('workshops')}>Workshops</li>
        <li onClick={() => setSelectedSection('faculty')}>Faculty</li>
        <li onClick={() => setSelectedSection('syllabus')}>Syllabus</li>
        <li onClick={() => setSelectedSection('exam')}>Examination</li>
        <li onClick={() => setSelectedSection('placement')}>Placement</li>
        <li onClick={() => setSelectedSection('project')}>Projects</li>
      </ul>
    </aside>
  );
}

export default Sidebar;
