// import React from 'react';
// import Card from './Card'; // Import the Card component
// import vesitImage from '../material/VESIT.jpg'; // Importing the image
// import { Link } from 'react-router-dom';

// function Home() {
//   const handleClick = () => {
//     alert('Welcome to XYZ College!');
//   };
  
//   const handleButtonClick = () => {
//     alert('Card button clicked!');
//   };
 
//   return (
//     <div className='home_body'>
//       <h1>VESIT</h1>
//       <h2>Welcome to Vivekanand Eduction Society's Institute Of Technology</h2>
//       <button className="btn btn-primary" onClick={handleClick}>Click Me!</button>

//       <div className='my_card'> 
//         <Card
//           title="Course 1"
//           description="Learn more about Course 1 in detail."
//           image={vesitImage} // Ensure the image path is correct
//           buttonText="Learn More"
//           onButtonClick={handleButtonClick}
//         />

//         <Card
//           title="Course 2"
//           description="This is Course 2, which covers advanced topics."
//           image={vesitImage}
//           buttonText="Explore"
//           onButtonClick={handleButtonClick}
//         />
//       </div>
//     </div>
//   );
// }

// export default Home;

import React from 'react';
import Card from './Card'; // Import the Card component
import vesitImage from '../material/VESIT.jpg'; // Importing the image
import { Link } from 'react-router-dom';

function Home() {
  // Function to handle button click for showing more info
  const handleButtonClick = (title) => {
    alert(`Learn more about: ${title}`);
  };

  return (
    <div className='home_body'>
      <h1>VESIT</h1>
      <h2>Welcome to Vivekanand Education Society's Institute Of Technology</h2>
      
      <h3 style={{ fontWeight: 'bold', marginTop: '20px',marginLeft:'20px' }}>
      Shaping Futures: Innovative Events & Best Practices at VESIT
      </h3>

      <div className='my_card'> 
        <Card
          title="Looking Beyond Syllabus (LBS)"
          description="An annual event where students develop innovative projects benefiting society."
          image={vesitImage} // Ensure the image path is correct
          buttonText="Learn More"
          onButtonClick={() => handleButtonClick("Looking Beyond Syllabus (LBS)")}
        />

        <Card
          title="Campus to Corporate"
          description="Grooming activities to prepare students for global employability and industry requirements."
          image={vesitImage}
          buttonText="Learn More"
          onButtonClick={() => handleButtonClick("Campus to Corporate")}
        />

        <Card
          title="Awakening the Scientist (ATS)"
          description="An opportunity for first-year students to explore basic engineering and technology used in daily life."
          image={vesitImage}
          buttonText="Learn More"
          onButtonClick={() => handleButtonClick("Awakening the Scientist (ATS)")}
        />

        <Card
          title="Students Personality, Intellect & Creativity Enhancement (SPICE)"
          description="Bridging the gap between college syllabus and placements through various preparatory activities."
          image={vesitImage}
          buttonText="Learn More"
          onButtonClick={() => handleButtonClick("Students Personality, Intellect & Creativity Enhancement (SPICE)")}
        />

        <Card
          title="Vesit Renaissance Cell (VRC)"
          description="A team focusing on innovative schemes to enhance academic excellence and skills."
          image={vesitImage}
          buttonText="Learn More"
          onButtonClick={() => handleButtonClick("Vesit Renaissance Cell (VRC)")}
        />

        <Card
          title="Skill Enhancement Lectures (SEL)"
          description="Expert lectures arranged to ensure all-round development and expansion of horizons."
          image={vesitImage}
          buttonText="Learn More"
          onButtonClick={() => handleButtonClick("Skill Enhancement Lectures (SEL)")}
        />

        <Card
          title="Scholarship for Eligible Students"
          description="Providing scholarships to financially weaker students to support their education."
          image={vesitImage}
          buttonText="Learn More"
          onButtonClick={() => handleButtonClick("Scholarship for Eligible Students")}
        />
      </div>
    </div>
  );
}

export default Home;
