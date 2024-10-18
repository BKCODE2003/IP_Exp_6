import React from 'react';

function About() {
  const styles = {
    container: {
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
      lineHeight: '1.6',
    },
    heading: {
      color: '#2c3e50',
      marginBottom: '10px',
    },
    subHeading: {
      color: '#34495e',
      marginTop: '20px',
      marginBottom: '10px',
    },
    paragraph: {
      marginBottom: '15px',
      textAlign: 'justify',
    },
    list: {
      listStyleType: 'disc',
      paddingLeft: '20px',
      marginBottom: '15px',
    },
    listItem: {
      marginBottom: '5px',
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Vivekanand Education Society's Institute of Technology</h2>
      <p style={styles.paragraph}>
        Vivekanand Education Society was founded in 1959 by Shri. Hashu Advani, along with ten other members, 
        who shared the dream of providing qualitative education to the youth of our country. In the beginning, 
        Vivekanand Education Society had a very modest launch, with just 256 students and six classrooms, in 
        the humble barracks of Chembur Camp. But today, it proudly boasts of having 3,75,000 sq. ft. of land, 
        housing 12 buildings and 28 Institutions, ranging from a crèche to Ph.D. Centers. It has over 2,000 
        teaching and non-teaching staff, and more than 18,000 students pass through its hallowed portals each year.
      </p>

      <h3 style={styles.subHeading}>Institute Overview</h3>
      <p style={styles.paragraph}>
        Vivekanand Education Society’s Institute of Technology (VESIT) was established in 1984, with the aim of 
        providing professional education in the field of Engineering. This institute is affiliated with the University 
        of Mumbai and follows the rules and regulations laid down by government, AICTE, and the University for 
        admission. The institute reserves 51% of seats for Sindhi Linguistic minority students and 49% through the 
        CAP test. The management quota has been surrendered to DTE to centralize the admission process.
      </p>

      <h3 style={styles.subHeading}>Rankings and Achievements</h3>
      <ul style={styles.list}>
        <li style={styles.listItem}>Two-time accreditation by National Board of Accreditation in the last 10 years for all eligible UG courses.</li>
        <li style={styles.listItem}>Ranked in the 26th-50th band in ARIIA 2019 under SELF-FINANCE/PRIVATE INSTITUTIONS category.</li>
        <li style={styles.listItem}>1st rank in Maharashtra State for 3 consecutive years (2018-2020) in EducationWorld Private Engineering Institutes Rankings.</li>
        <li style={styles.listItem}>Awarded “India's 10 Best Institutes for Higher Education 2019” by The Excelligent Magazine survey.</li>
        <li style={styles.listItem}>Ranked in numerous national surveys, including The WEEK, Career 360, and The India Today.</li>
        <li style={styles.listItem}>Platinum Category in AICTE-CII Industry-linked Technical Institute Survey (2020 & 2016).</li>
        <li style={styles.listItem}>Consistent 100% result in MCA and over 95% in B.E. for the last 8 years.</li>
        <li style={styles.listItem}>Over 75% placements for the last 8 years.</li>
      </ul>

      <h3 style={styles.subHeading}>Vision</h3>
      <p style={styles.paragraph}>
        To create a vibrant knowledge-oriented environment with innovative teaching practices and to inculcate 
        the tradition of socially conscious application of technology.
      </p>

      <h3 style={styles.subHeading}>Mission</h3>
      <ul style={styles.list}>
        <li style={styles.listItem}>To inculcate a culture of value-based education.</li>
        <li style={styles.listItem}>To inspire students to develop in an ambient environment of caring and sharing information.</li>
        <li style={styles.listItem}>To empower students to strive for excellence in their chosen fields with a professional mindset.</li>
      </ul>

      <h3 style={styles.subHeading}>Best Practices</h3>
      <p style={styles.paragraph}>
        VESIT has implemented several best practices to improve teaching and learning at the institute. Some of these include:
      </p>
      <ul style={styles.list}>
        <li style={styles.listItem}>
          <strong>Looking Beyond Syllabus (LBS):</strong> An annual event where student groups work on innovative projects for societal benefit.
        </li>
        <li style={styles.listItem}>
          <strong>Campus to Corporate:</strong> A program that enhances communication skills and confidence for successful placement.
        </li>
        <li style={styles.listItem}>
          <strong>Awakening the Scientist (ATS):</strong> A project where first-year students explore basic engineering and technology.
        </li>
        <li style={styles.listItem}>
          <strong>SPICE:</strong> A program for MCA students that bridges the gap between curriculum and industry requirements.
        </li>
        <li style={styles.listItem}>
          <strong>Vesit Renaissance Cell (VRC):</strong> A leadership initiative to promote innovation and academic excellence.
        </li>
        <li style={styles.listItem}>
          <strong>Skill Enhancement Lectures (SEL):</strong> Expert-led lectures that provide insights beyond the curriculum.
        </li>
        <li style={styles.listItem}>
          <strong>Scholarship for Eligible Students:</strong> Financial aid is provided to deserving students from financially weaker sections.
        </li>
      </ul>
    </div>
  );
}

export default About;
