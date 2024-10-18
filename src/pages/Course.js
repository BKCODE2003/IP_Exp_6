import React from 'react';

const courses = [
  {
    department: 'Computer Science',
    courses: [
      {
        name: 'Data Structures and Algorithms',
        description: 'Learn the fundamentals of data structures and algorithms, their design, and implementation.',
        duration: '16 weeks',
        credits: 4,
      },
      {
        name: 'Web Development',
        description: 'Introduction to web development, covering HTML, CSS, JavaScript, and modern frameworks.',
        duration: '16 weeks',
        credits: 3,
      },
      {
        name: 'Operating Systems',
        description: 'Understanding the concepts of operating systems, process management, and memory management.',
        duration: '16 weeks',
        credits: 4,
      },
      {
        name: 'Database Management Systems',
        description: 'Study the principles of database design, normalization, and SQL querying.',
        duration: '16 weeks',
        credits: 4,
      },
      {
        name: 'Software Engineering',
        description: 'Learn about software development life cycles, methodologies, and project management.',
        duration: '16 weeks',
        credits: 3,
      },
    ],
  },
  {
    department: 'Artificial Intelligence',
    courses: [
      {
        name: 'Machine Learning',
        description: 'Explore algorithms and techniques for machine learning and artificial intelligence.',
        duration: '16 weeks',
        credits: 4,
      },
      {
        name: 'Deep Learning',
        description: 'Understand the principles of deep learning and its applications in AI.',
        duration: '16 weeks',
        credits: 4,
      },
      {
        name: 'Natural Language Processing',
        description: 'Study techniques for processing and analyzing human language data.',
        duration: '16 weeks',
        credits: 4,
      },
      {
        name: 'Computer Vision',
        description: 'Explore the fundamentals of image processing and computer vision techniques.',
        duration: '16 weeks',
        credits: 4,
      },
      {
        name: 'Reinforcement Learning',
        description: 'Learn about reinforcement learning algorithms and their applications.',
        duration: '16 weeks',
        credits: 4,
      },
    ],
  },
  {
    department: 'Electronics',
    courses: [
      {
        name: 'Digital Circuits',
        description: 'Study the fundamentals of digital electronics, including logic gates and circuits.',
        duration: '16 weeks',
        credits: 3,
      },
      {
        name: 'Microprocessors',
        description: 'Learn about microprocessor architecture and programming for embedded systems.',
        duration: '16 weeks',
        credits: 4,
      },
      {
        name: 'Embedded Systems',
        description: 'Explore the design and programming of embedded systems and microcontrollers.',
        duration: '16 weeks',
        credits: 4,
      },
      {
        name: 'Control Systems',
        description: 'Understand the principles of control theory and its applications in engineering.',
        duration: '16 weeks',
        credits: 4,
      },
      {
        name: 'Analog Electronics',
        description: 'Study the basics of analog circuits and devices, including operational amplifiers.',
        duration: '16 weeks',
        credits: 3,
      },
    ],
  },
  {
    department: 'Telecommunication',
    courses: [
      {
        name: 'Network Security',
        description: 'Explore the concepts and practices of network security and cryptography.',
        duration: '16 weeks',
        credits: 4,
      },
      {
        name: 'Wireless Communication',
        description: 'Study the principles of wireless communication systems and technologies.',
        duration: '16 weeks',
        credits: 3,
      },
      {
        name: 'Optical Communication',
        description: 'Learn about optical communication technologies and fiber optics.',
        duration: '16 weeks',
        credits: 4,
      },
      {
        name: 'Signal Processing',
        description: 'Understand the concepts of signal processing and its applications in telecommunications.',
        duration: '16 weeks',
        credits: 4,
      },
      {
        name: 'Mobile Communication',
        description: 'Study the principles and technologies behind mobile communication systems.',
        duration: '16 weeks',
        credits: 4,
      },
    ],
  },
];

function Course() {
  const styles = {
    coursePage: {
      padding: '20px',
      backgroundColor: '#f0f0f0',
      minHeight: '100vh',
    },
    coursesContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
    },
    departmentCard: {
      flex: '1 1 40%',
      margin: '20px',
      padding: '20px',
      border: '1px solid #ccc',
      borderRadius: '5px',
      backgroundColor: '#fff',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      transition: 'transform 0.3s, box-shadow 0.3s',
    },
    courseCard: {
      margin: '10px 0',
      padding: '15px',
      border: '1px solid #e0e0e0',
      borderRadius: '5px',
      backgroundColor: '#f9f9f9',
      transition: 'transform 0.3s, background-color 0.3s',
    },
    departmentCardHeading: {
      textAlign: 'center',
      marginBottom: '15px',
    },
    courseCardHeading: {
      margin: '0',
      fontSize: '1.2em',
      color: '#333',
    },
    courseCardParagraph: {
      margin: '5px 0',
      color: '#666',
    },
  };

  return (
    <div style={styles.coursePage}>
      <h2>Courses Offered</h2>
      <div style={styles.coursesContainer}>
        {courses.map((department) => (
          <div
            key={department.department}
            style={styles.departmentCard}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
            }}
          >
            <h3 style={styles.departmentCardHeading}>{department.department}</h3>
            {department.courses.map((course, index) => (
              <div
                key={index}
                style={styles.courseCard}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.02)';
                  e.currentTarget.style.backgroundColor = '#e0e0e0';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.backgroundColor = '#f9f9f9';
                }}
              >
                <h4 style={styles.courseCardHeading}>{course.name}</h4>
                <p style={styles.courseCardParagraph}>{course.description}</p>
                <p style={styles.courseCardParagraph}><strong>Duration:</strong> {course.duration}</p>
                <p style={styles.courseCardParagraph}><strong>Credits:</strong> {course.credits}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Course;
