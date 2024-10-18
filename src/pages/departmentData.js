import { Link } from 'react-router-dom';
import imageHod from '../material/business-man-curly-cute-handsome-guy-black-suit-close-up-smiling.jpg'
const departments = [
    {
      id: 1,
      name: 'Computer',
      quote:'Growing is a process and learning is an experience',
      message:[
        {msg:'The department is committed towards imparting quality education and developing future technocrats in the stream of computers. It is focussed towards its mission of facilitating student’s progress by providing a strong foundation in fundamental concepts as well as inculcating core values of professionalism and ethics.',
        },
        {msg:'The department presents them with a plethora of opportunities for applying their acquired knowledge and critical thinking skills thus striving to bridge the theory – practice divide.I attribute the phenomenal growth of the department to the winning combination of dedicated and experienced faculty, brilliant students and strong administrative support from the institute.',
        },
      ],
      mission:[
        {goal:'To provide enabling environment through excellence in teaching & learning to contribute towards industry and society.'},
        {goal:'To promote and strengthen interdisciplinary approach in innovation, creativity and research.'},
        {goal:'To facilitate productive employment and higher studies with entrepreneurial attitude and professional ethics .'},
      ],
      vision:[
        {vis:'To create center of excellence in computing by imparting quality education for developing competent professionals.'},
      ],
      workshops: [
        { title: 'AI Workshop', description: 'Learn about Artificial Intelligence.' },
        { title: 'Web Development Workshop', description: 'Hands-on web development experience.' },
      ],
      faculty: [
        {
          name: 'Dr. Alice Smith',
          position: 'Professor',
          qualification: 'PhD in Computer Science, 15+ years of teaching experience',
          expertise: 'Machine Learning, Artificial Intelligence, Data Mining',
          achievements: 'Published 30+ research papers in reputed journals, awarded Best Researcher in AI in 2022',
          bio: 'Dr. Alice Smith has been an active researcher and educator in the field of AI for over 15 years. She has worked on several government and industry-funded projects, contributing to the development of cutting-edge machine learning models. She is passionate about teaching and mentoring students in advanced AI techniques.',
          image: imageHod// Image of Dr. Alice Smith
        },
        {
          name: 'Prof. Bob Johnson',
          position: 'Lecturer',
          qualification: 'M.Tech in Software Engineering',
          expertise: 'Full Stack Development, Cloud Computing, Web Technologies',
          achievements: 'Conducted several workshops on Web Development and Cloud Infrastructure',
          bio: 'Prof. Bob Johnson specializes in full-stack development and cloud solutions. He has been instrumental in guiding student projects and conducting workshops on modern web technologies. His research interests include optimizing cloud architectures for scalable applications.',
          image: imageHod // Image of Prof. Bob Johnson
        }
      ],      
      hodImage: imageHod,
      syllabus: [{
        year:'First Year',
        sem:'Sem-I',
        links:'www.google.com',
      },
      {
        year:'First Year',
        sem:'Sem-II',
        links:'www.google.com',
      },
      {
        year:'Second Year',
        sem:'Sem-II',
        links:'www.google.com',
      },
      {
        year:'Second Year',
        sem:'Sem-IV',
        links:'www.google.com',
      },
      {
        year:'Third Year',
        sem:'Sem-V',
        links:'www.google.com',
      },
      {
        year:'Third Year',
        sem:'Sem-VI',
        links:'www.google.com',
      },
      {
        year:'Fourth Year',
        sem:'Sem-VII',
        links:'www.google.com',
      },
      {
        year:'Fourth Year',
        sem:'Sem-VIII',
        links:'www.google.com',
      },
      ],
      exam: [{
        year:'First Year',
        sem:'Sem-I',
        links:'www.google.com',
      },
      {
        year:'First Year',
        sem:'Sem-II',
        links:'www.google.com',
      },
      {
        year:'Second Year',
        sem:'Sem-II',
        links:'www.google.com',
      },
      {
        year:'Second Year',
        sem:'Sem-IV',
        links:'www.google.com',
      },
      {
        year:'Third Year',
        sem:'Sem-V',
        links:'www.google.com',
      },
      {
        year:'Third Year',
        sem:'Sem-VI',
        links:'www.google.com',
      },
      {
        year:'Fourth Year',
        sem:'Sem-VII',
        links:'www.google.com',
      },
      {
        year:'Fourth Year',
        sem:'Sem-VIII',
        links:'www.google.com',
      },
      ],
      placement: [
        { year: 2022, placed: 120, notPlaced: 20, furtherStudies: 10, companiesVisited: 50, highestPackage: 15, medianPackage: 7, averagePackage: 6 },
        { year: 2023, placed: 130, notPlaced: 15, furtherStudies: 5, companiesVisited: 60, highestPackage: 18, medianPackage: 8, averagePackage: 7 }
      ],
      projects: [],
    },
    {
      id: 2,
      name: 'Information Technology',
      quote: 'The Department of Information Technology was established in the year 1999 with an intake of 40 students and increased to 60 in the next Academic year. Post Graduate course was inducted in the year 2002 with an intake of 18 students.',
      message: [
        {
          msg: 'Presently the intake of students for the U.G. course is 120 in the morning shift.'
        },
        {
          msg: 'With the fast-changing world, certain changes are essential, considering these aspects the Department of Information Technology aims at training the students to adapt themselves to the fast-changing technologies. Our Department strives for enhancing critical thinking, the ability to change information into knowledge, and to increase the power of information analysis.'
        },
        {
          msg: 'The department has flourished due to the collective efforts of the management, skilled staff, and an efficient student base. We, at the department level, are making an earnest effort to make IT curriculum a perfect mix of theory, practice, and implementation.'
        }
      ],
      mission: [
        { goal: 'To Provide quality education that offers opportunities for lifelong learning at multiple academic and professional levels.' },
        { goal: 'To Promote and support faculty involvement in all aspects of IT research and development.' },
        { goal: 'To offer state-of-art information technology education, imparting skills for building cutting-edge and innovative IT applications.' },
        { goal: 'To collaborate with the industry to create new infrastructure, and test beds that would facilitate the IT industry to experiment with new technologies and create next generation products.' }
      ],
      vision: [
        { vis: 'To create a high quality academic and research environment, which empowers faculty and students to attain the highest levels of excellence as professionals in the field of Information Technology, in turn leading to the creation of leaders and trend-setters for the next generation IT Industry.' }
      ],
      workshops: [
        { title: 'Cybersecurity Workshop', description: 'Understand security concepts and practices in IT.' },
        { title: 'Cloud Computing Workshop', description: 'Gain hands-on experience in cloud services.' }
      ],
      faculty: [
        {
          name: 'Dr. Jane Doe',
          position: 'Head of Department',
          qualification: 'PhD in Information Technology, 20+ years of academic and industry experience',
          expertise: 'Cybersecurity, Cloud Computing, Information Systems',
          achievements: 'Published 40+ research papers, keynote speaker at multiple international IT conferences',
          bio: 'Dr. Jane Doe is a leading expert in cybersecurity and cloud computing. With extensive experience both in academia and the IT industry, she has developed innovative cybersecurity protocols and strategies for cloud-based systems. She is committed to advancing IT education and research.',
          image: imageHod // Image of Dr. Jane Doe
        },
        {
          name: 'Prof. John Adams',
          position: 'Assistant Professor',
          qualification: 'M.Sc. in IT',
          expertise: 'Network Security, Database Management',
          achievements: 'Developed a network security protocol used by multiple tech firms',
          bio: 'Prof. John Adams is a seasoned educator with a focus on network security and database systems. He has contributed to several collaborative research projects aimed at improving network security measures. He enjoys working with students to explore new technologies and secure system designs.',
          image: imageHod // Image of Prof. John Adams
        }
      ],
      hodImage: imageHod,
      syllabus: [{
        year:'First Year',
        sem:'Sem-I',
        links:'www.google.com',
      },
      {
        year:'First Year',
        sem:'Sem-II',
        links:'www.google.com',
      },
      {
        year:'Second Year',
        sem:'Sem-II',
        links:'www.google.com',
      },
      {
        year:'Second Year',
        sem:'Sem-IV',
        links:'www.google.com',
      },
      {
        year:'Third Year',
        sem:'Sem-V',
        links:'www.google.com',
      },
      {
        year:'Third Year',
        sem:'Sem-VI',
        links:'www.google.com',
      },
      {
        year:'Fourth Year',
        sem:'Sem-VII',
        links:'www.google.com',
      },
      {
        year:'Fourth Year',
        sem:'Sem-VIII',
        links:'www.google.com',
      },
      ],
      exam: [{
        year:'First Year',
        sem:'Sem-I',
        links:'www.google.com',
      },
      {
        year:'First Year',
        sem:'Sem-II',
        links:'www.google.com',
      },
      {
        year:'Second Year',
        sem:'Sem-II',
        links:'www.google.com',
      },
      {
        year:'Second Year',
        sem:'Sem-IV',
        links:'www.google.com',
      },
      {
        year:'Third Year',
        sem:'Sem-V',
        links:'www.google.com',
      },
      {
        year:'Third Year',
        sem:'Sem-VI',
        links:'www.google.com',
      },
      {
        year:'Fourth Year',
        sem:'Sem-VII',
        links:'www.google.com',
      },
      {
        year:'Fourth Year',
        sem:'Sem-VIII',
        links:'www.google.com',
      },
      ],
      placement: [
        { year: 2022, placed: 90, notPlaced: 30, furtherStudies: 20, companiesVisited: 40, highestPackage: 12, medianPackage: 6, averagePackage: 5 },
        { year: 2023, placed: 100, notPlaced: 20, furtherStudies: 10, companiesVisited: 45, highestPackage: 14, medianPackage: 7, averagePackage: 6 }
      ],
      projects: []
    },
    {
      id: 3,
      name: 'Artificial Intelligence Data Science',
      quote: 'To achieve global standards of excellence in education, innovation and research by using the latest tools in the field of academia and industry serving the greater cause of society.',
      message: [
        {
          msg: 'The Department of AI & Data Science strives to produce and nurture creative and technically strong engineers in the field of Artificial Intelligence and Data Science.'
        },
        {
          msg: 'The department is dedicated to imparting quality and value-based education leading towards continuous learning and innovation in Artificial Intelligence and Data Science.'
        },
        {
          msg: 'We aim to create an ecosystem that enables designing and deploying AI and Data Science solutions for real-world challenges.'
        }
      ],
      mission: [
        { goal: 'To produce and nurture creative and technically strong engineers in the field of Artificial Intelligence and Data Science.' },
        { goal: 'To impart quality and value-based education leading towards continuous learning and innovation in the field of Artificial Intelligence and Data Science.' },
        { goal: 'To create an ecosystem that enables designing and deploying AI and Data Science solutions for real-world challenges.' }
      ],
      vision: [
        { vis: 'To achieve global standards of excellence in education, innovation and research by using the latest tools in the field of academia and industry serving the greater cause of society.' }
      ],
      workshops: [
        { title: 'Machine Learning Workshop', description: 'Learn the fundamentals of machine learning algorithms.' },
        { title: 'Data Science Tools Workshop', description: 'Hands-on experience with popular data science tools like Python and R.' }
      ],
      faculty: [
        {
          name: 'Dr. Sarah Lee',
          position: 'Professor',
          qualification: 'PhD in Data Science, 10+ years of teaching experience',
          expertise: 'Big Data, Machine Learning, Predictive Analytics',
          achievements: 'Published 25+ papers on data science applications, recipient of the Data Science Innovator Award',
          bio: 'Dr. Sarah Lee is an expert in Big Data and Machine Learning, with years of experience in academia and industry. Her research focuses on predictive analytics and the use of AI in healthcare and finance. She has mentored numerous students in advanced data science techniques.',
          image: imageHod // Image of Dr. Sarah Lee
        },
        {
          name: 'Prof. Michael Brown',
          position: 'Lecturer',
          qualification: 'M.Sc. in Data Analytics',
          expertise: 'Data Visualization, Machine Learning',
          achievements: 'Designed and implemented several successful data visualization projects for government agencies',
          bio: 'Prof. Michael Brown has a strong background in data analytics and visualization. His interests include teaching students how to use data visualization tools to gain insights and make data-driven decisions. He has worked on various high-profile projects related to public policy data analysis.',
          image: imageHod // Image of Prof. Michael Brown
        }
      ],
      hodImage: imageHod,
      syllabus: [{
        year:'First Year',
        sem:'Sem-I',
        links:'www.google.com',
      },
      {
        year:'First Year',
        sem:'Sem-II',
        links:'www.google.com',
      },
      {
        year:'Second Year',
        sem:'Sem-II',
        links:'www.google.com',
      },
      {
        year:'Second Year',
        sem:'Sem-IV',
        links:'www.google.com',
      },
      {
        year:'Third Year',
        sem:'Sem-V',
        links:'www.google.com',
      },
      {
        year:'Third Year',
        sem:'Sem-VI',
        links:'www.google.com',
      },
      {
        year:'Fourth Year',
        sem:'Sem-VII',
        links:'www.google.com',
      },
      {
        year:'Fourth Year',
        sem:'Sem-VIII',
        links:'www.google.com',
      },
      ],
      exam: [{
        year:'First Year',
        sem:'Sem-I',
        links:'www.google.com',
      },
      {
        year:'First Year',
        sem:'Sem-II',
        links:'www.google.com',
      },
      {
        year:'Second Year',
        sem:'Sem-II',
        links:'www.google.com',
      },
      {
        year:'Second Year',
        sem:'Sem-IV',
        links:'www.google.com',
      },
      {
        year:'Third Year',
        sem:'Sem-V',
        links:'www.google.com',
      },
      {
        year:'Third Year',
        sem:'Sem-VI',
        links:'www.google.com',
      },
      {
        year:'Fourth Year',
        sem:'Sem-VII',
        links:'www.google.com',
      },
      {
        year:'Fourth Year',
        sem:'Sem-VIII',
        links:'www.google.com',
      },
      ],
      placement: [
        { year: 2022, placed: 80, notPlaced: 25, furtherStudies: 15, companiesVisited: 30, highestPackage: 20, medianPackage: 10, averagePackage: 8 },
        { year: 2023, placed: 85, notPlaced: 15, furtherStudies: 10, companiesVisited: 35, highestPackage: 22, medianPackage: 12, averagePackage: 9 }
      ],
      projects: []
    },
    {
      id: 4,
      name: 'Electronics Telecommunication',
      quote: 'The Department of Electronics and Telecommunications was established in the year 1994.',
      message: [
        {
          msg: 'Presently the intake of students for the U.G course is 120. Post graduate course was inducted in the year 2002 with an intake of 18.'
        },
        {
          msg: 'The department’s vision is to nurture students to become technocrats with a humane outlook. Department’s strength lies in the well qualified, intelligent, and diligent faculty.'
        },
        {
          msg: 'The laboratories are equipped with state-of-the-art hardware and software so that our students are trained effectively and are able to apply their acquired knowledge and skills to solve real-life technical challenges.'
        },
        {
          msg: 'Many of our alumni are industry captains, business leaders, entrepreneurs, and members of research organizations globally. In a nutshell, the department is well nurtured and progressive to cater to all needs and aspirations of our students.'
        }
      ],
      mission: [
        { goal: 'To empower the budding engineers to meet the growing challenges of industry.' },
        { goal: 'To promote cutting-edge research to benefit society locally and globally.' },
        { goal: 'To develop young engineers with human and social intellectual qualities required for practicing as responsible engineers.' }
      ],
      vision: [
        { vis: 'Towards developing a centre of excellence in the field of Electronics and Telecommunication and to nurture students to become technocrats with a humane outlook.' }
      ],
      workshops: [
        { title: 'Embedded Systems Workshop', description: 'Learn the essentials of embedded systems and their applications.' },
        { title: 'Telecommunication Networks Workshop', description: 'Explore the fundamentals of telecommunication networks.' }
      ],
      faculty: [
        {
          name: 'Dr. Emily White',
          position: 'Head of Department',
          qualification: 'PhD in Telecommunication Engineering',
          expertise: 'Wireless Communication, Signal Processing',
          achievements: 'Published 30+ papers, received Best Research Paper award in Wireless Communication in 2021',
          bio: 'Dr. Emily White has over 18 years of experience in wireless communication and signal processing. She has worked on multiple international projects and has published extensively in top journals. She is committed to fostering innovation in telecommunications.',
          image: imageHod // Image of Dr. Emily White
        },
        {
          name: 'Prof. Mark Wilson',
          position: 'Assistant Professor',
          qualification: 'M.Tech in Electronics',
          expertise: 'Embedded Systems, IoT',
          achievements: 'Developed IoT applications for smart city projects',
          bio: 'Prof. Mark Wilson has a background in embedded systems and IoT technologies. He has been involved in research and development of smart city IoT applications and frequently collaborates with industry partners on innovative projects.',
          image: imageHod // Image of Prof. Mark Wilson
        }
      ],
      hodImage: imageHod,
      syllabus: [{
        year:'First Year',
        sem:'Sem-I',
        links:'www.google.com',
      },
      {
        year:'First Year',
        sem:'Sem-II',
        links:'www.google.com',
      },
      {
        year:'Second Year',
        sem:'Sem-II',
        links:'www.google.com',
      },
      {
        year:'Second Year',
        sem:'Sem-IV',
        links:'www.google.com',
      },
      {
        year:'Third Year',
        sem:'Sem-V',
        links:'www.google.com',
      },
      {
        year:'Third Year',
        sem:'Sem-VI',
        links:'www.google.com',
      },
      {
        year:'Fourth Year',
        sem:'Sem-VII',
        links:'www.google.com',
      },
      {
        year:'Fourth Year',
        sem:'Sem-VIII',
        links:'www.google.com',
      },
      ],
      exam: [{
        year:'First Year',
        sem:'Sem-I',
        links:'www.google.com',
      },
      {
        year:'First Year',
        sem:'Sem-II',
        links:'www.google.com',
      },
      {
        year:'Second Year',
        sem:'Sem-II',
        links:'www.google.com',
      },
      {
        year:'Second Year',
        sem:'Sem-IV',
        links:'www.google.com',
      },
      {
        year:'Third Year',
        sem:'Sem-V',
        links:'www.google.com',
      },
      {
        year:'Third Year',
        sem:'Sem-VI',
        links:'www.google.com',
      },
      {
        year:'Fourth Year',
        sem:'Sem-VII',
        links:'www.google.com',
      },
      {
        year:'Fourth Year',
        sem:'Sem-VIII',
        links:'www.google.com',
      },
      ],
      placement: [
        { year: 2022, placed: 60, notPlaced: 40, furtherStudies: 25, companiesVisited: 25, highestPackage: 10, medianPackage: 5, averagePackage: 4 },
        { year: 2023, placed: 65, notPlaced: 30, furtherStudies: 20, companiesVisited: 28, highestPackage: 11, medianPackage: 6, averagePackage: 5 }
      ],
      projects: []
    },    
    {
      id: 5,
      name: 'Electronics Computer Science',
      quote: 'The success of any hardware-based project depends on how well it has been tested prior to its hardware implementation.',
      message: [
        {
          msg: 'Computer-based simulations help in testing the accuracy and reliability of any designed project or product. This helps in reducing the cost of any project involving expensive components and precious time for the organization.'
        },
        {
          msg: 'We need to prepare our next generation to provide solutions by working on both hardware and software simultaneously to face the requirements of Industry 4.0. Electronics and Computer Science aids in meeting the demands of both electronics and computer-based industries.'
        },
        {
          msg: 'The department is well-equipped with state-of-the-art laboratories for practical training and research, including a dedicated PCB manufacturing facility to support in-house projects.'
        },
        {
          msg: 'The department practices outcome-based teaching strategies and provides access to reputed journals. Faculty members are always approachable to help students with academic or non-academic problems. Our goal is to make students technically sound and mentally strong to face real-world challenges.'
        }
      ],
      mission: [
        { goal: 'To prepare students in the field of engineering in Electronics and Computer Science for lifelong learning.' },
        { goal: 'To develop professionals who can think critically and provide cost-effective solutions to solve local and global issues using knowledge of Electronics and Computer Science.' },
        { goal: 'To inculcate a sense of being job providers than job seekers with due consideration to ethical and social values.' }
      ],
      vision: [
        { vis: 'To produce globally competent and socially responsible engineers capable of independently solving problems with a sound knowledge of engineering in Electronics and Computer Science.' }
      ],
      workshops: [
        { title: 'IoT Systems Workshop', description: 'Learn to design and implement IoT systems combining electronics and computer science.' },
        { title: 'PCB Design Workshop', description: 'Hands-on workshop on PCB design and fabrication techniques.' }
      ],
      faculty: [
        {
          name: 'Dr. William Harris',
          position: 'Professor',
          qualification: 'PhD in Electronics and Computer Science',
          expertise: 'VLSI Design, IoT Systems',
          achievements: 'Published 30+ papers in VLSI design and IoT systems, led multiple industry-funded projects',
          bio: 'Dr. William Harris is a seasoned academic with over 20 years of teaching and research experience in Electronics and Computer Science. His work primarily focuses on VLSI design and IoT systems, where he has collaborated on several high-impact projects. He is passionate about integrating academic learning with industry requirements to produce job-ready engineers.',
          image: imageHod // Image of Dr. William Harris
        },
        {
          name: 'Prof. Linda Martin',
          position: 'Assistant Professor',
          qualification: 'M.Tech in Computer Science',
          expertise: 'Machine Learning, Embedded Systems',
          achievements: 'Published in top-tier conferences on machine learning, co-authored a book on embedded systems',
          bio: 'Prof. Linda Martin is an expert in machine learning and embedded systems. With a strong academic background and practical exposure, she has been instrumental in guiding student projects focused on real-time systems and AI-based solutions. Her teaching style emphasizes hands-on experience to complement theoretical knowledge.',
          image: imageHod // Image of Prof. Linda Martin
        }
      ],
      hodImage: imageHod,
      syllabus: [{
        year:'First Year',
        sem:'Sem-I',
        links:'www.google.com',
      },
      {
        year:'First Year',
        sem:'Sem-II',
        links:'www.google.com',
      },
      {
        year:'Second Year',
        sem:'Sem-II',
        links:'www.google.com',
      },
      {
        year:'Second Year',
        sem:'Sem-IV',
        links:'www.google.com',
      },
      {
        year:'Third Year',
        sem:'Sem-V',
        links:'www.google.com',
      },
      {
        year:'Third Year',
        sem:'Sem-VI',
        links:'www.google.com',
      },
      {
        year:'Fourth Year',
        sem:'Sem-VII',
        links:'www.google.com',
      },
      {
        year:'Fourth Year',
        sem:'Sem-VIII',
        links:'www.google.com',
      },
      ],
      exam: [{
        year:'First Year',
        sem:'Sem-I',
        links:'www.google.com',
      },
      {
        year:'First Year',
        sem:'Sem-II',
        links:'www.google.com',
      },
      {
        year:'Second Year',
        sem:'Sem-II',
        links:'www.google.com',
      },
      {
        year:'Second Year',
        sem:'Sem-IV',
        links:'www.google.com',
      },
      {
        year:'Third Year',
        sem:'Sem-V',
        links:'www.google.com',
      },
      {
        year:'Third Year',
        sem:'Sem-VI',
        links:'www.google.com',
      },
      {
        year:'Fourth Year',
        sem:'Sem-VII',
        links:'www.google.com',
      },
      {
        year:'Fourth Year',
        sem:'Sem-VIII',
        links:'www.google.com',
      },
      ],
      placement: [
        { year: 2022, placed: 55, notPlaced: 35, furtherStudies: 15, companiesVisited: 22, highestPackage: 9, medianPackage: 4.5, averagePackage: 4 },
        { year: 2023, placed: 60, notPlaced: 25, furtherStudies: 10, companiesVisited: 24, highestPackage: 10, medianPackage: 5, averagePackage: 4.5 }
      ],
      projects: []
    },
    {
      id: 6,
      name: 'Automation Robotics',
      quote: 'The secret of change is to focus all of your energy not on fighting the old, but on building the new - Socrates.',
      message: [
        {
          msg: 'Welcome to the Department of Automation and Robotics at VESIT. The department was established in the academic year 2022-23, with an intake of 60 students.'
        },
        {
          msg: 'The department is well-equipped with a sophisticated Automation lab, providing hands-on training on industry-grade software and systems. It also features a state-of-the-art Process Instrumentation and Transducers lab, enabling students to gain practical experience on pilot plant setups.'
        },
        {
          msg: 'Faculty members have varied research interests, including automation, control systems, embedded systems, robotics, IoT, machine learning, and AI, offering students opportunities to collaborate with institutions like BARC, TIFR, IIT-B and pursue higher studies in these domains.'
        },
        {
          msg: 'The department has ties with organizations like Automation Industries Association, National Instruments, and Panache Digilife for conducting certification courses and project implementation.'
        },
        {
          msg: 'With strong contacts in Automation and Process Industries, students will have ample opportunities for internships and placements in core industries.'
        }
      ],
      mission: [
        { goal: 'To provide students with hands-on training in automation and robotics through industry-grade labs and systems.' },
        { goal: 'To foster research and project collaborations with premier institutions and industries in the field of automation and robotics.' },
        { goal: 'To prepare students for future roles in automation and robotics by offering internships and project opportunities with industry leaders.' }
      ],
      vision: [
        { vis: 'To be a leading department in Automation and Robotics engineering, shaping future technocrats capable of contributing to the advancement of industry and society.' }
      ],
      workshops: [
        { title: 'Industrial Automation Workshop', description: 'Hands-on training in automation technologies and industrial control systems.' },
        { title: 'Robotics and AI Workshop', description: 'Introduction to robotics and AI applications in automation.' }
      ],
      faculty: [
        {
          name: 'Dr. Alex Cooper',
          position: 'Professor',
          qualification: 'PhD in Automation and Robotics',
          expertise: 'Control Systems, Industrial Automation',
          achievements: 'Consultant to leading automation companies, authored a widely-used textbook on control systems',
          bio: 'Dr. Alex Cooper is a leading authority in the field of industrial automation and control systems. With over 15 years of experience, he has collaborated with major automation companies and contributed significantly to the advancement of automation technologies. His focus on practical implementation of control systems has made him a sought-after consultant and educator.',
          image: imageHod // Image of Dr. Alex Cooper
        },
        {
          name: 'Prof. Rachel Adams',
          position: 'Lecturer',
          qualification: 'M.Tech in Robotics',
          expertise: 'Robotics, AI in Automation',
          achievements: 'Published multiple papers in AI-driven robotics, developed automation systems for process industries',
          bio: 'Prof. Rachel Adams is a researcher and educator with a focus on AI and robotics. Her work in robotics and AI-based automation systems has been recognized in several international conferences. She is passionate about teaching students the latest trends in automation and robotics, preparing them for careers in both research and industry.',
          image: imageHod // Image of Prof. Rachel Adams
        }
      ],
      hodImage: imageHod,
      syllabus: [{
        year:'First Year',
        sem:'Sem-I',
        links:'www.google.com',
      },
      {
        year:'First Year',
        sem:'Sem-II',
        links:'www.google.com',
      },
      {
        year:'Second Year',
        sem:'Sem-II',
        links:'www.google.com',
      },
      {
        year:'Second Year',
        sem:'Sem-IV',
        links:'www.google.com',
      },
      {
        year:'Third Year',
        sem:'Sem-V',
        links:'www.google.com',
      },
      {
        year:'Third Year',
        sem:'Sem-VI',
        links:'www.google.com',
      },
      {
        year:'Fourth Year',
        sem:'Sem-VII',
        links:'www.google.com',
      },
      {
        year:'Fourth Year',
        sem:'Sem-VIII',
        links:'www.google.com',
      },
      ],
      exam: [{
        year:'First Year',
        sem:'Sem-I',
        links:'www.google.com',
      },
      {
        year:'First Year',
        sem:'Sem-II',
        links:'www.google.com',
      },
      {
        year:'Second Year',
        sem:'Sem-II',
        links:'www.google.com',
      },
      {
        year:'Second Year',
        sem:'Sem-IV',
        links:'www.google.com',
      },
      {
        year:'Third Year',
        sem:'Sem-V',
        links:'www.google.com',
      },
      {
        year:'Third Year',
        sem:'Sem-VI',
        links:'www.google.com',
      },
      {
        year:'Fourth Year',
        sem:'Sem-VII',
        links:'www.google.com',
      },
      {
        year:'Fourth Year',
        sem:'Sem-VIII',
        links:'www.google.com',
      },
      ],
      placement: [
        { year: 2022, placed: 70, notPlaced: 20, furtherStudies: 10, companiesVisited: 30, highestPackage: 16, medianPackage: 8, averagePackage: 7 },
        { year: 2023, placed: 75, notPlaced: 15, furtherStudies: 8, companiesVisited: 35, highestPackage: 17, medianPackage: 9, averagePackage: 8 }
      ],
      projects: []
    },
    {
      id: 7,
      name: 'Electronics',
      quote: 'To equip our students with the latest technology and implement their ideas to conduct research in selected areas of excellence.',
      message: [
        {
          msg: 'The Department of Electronics Engineering was established in 1984 with a vision to equip students with the latest technology and implement their ideas in research.'
        },
        {
          msg: 'The department is well-equipped with state-of-the-art laboratories, offering training in fields such as Electrical Machines, Power Electronics, VLSI, Signal Processing, and Neural Networks, along with a dedicated PCB manufacturing facility for in-house projects.'
        },
        {
          msg: 'The department practices outcome-based teaching strategies and provides access to reputed journals for both students and faculty. It maintains close interaction with industries and government organizations.'
        },
        {
          msg: 'Faculty members are approachable and supportive, ensuring students are technically and mentally prepared to face real-world challenges.'
        }
      ],
      mission: [
        { goal: 'To produce technocrats ready to handle state-of-the-art technologies in the field of Electronics Engineering.' },
        { goal: 'To prepare students to contribute effectively to the profession and society through advanced study, lifelong learning, and research.' }
      ],
      vision: [
        { vis: 'To equip our students with the latest technology and implement their ideas to conduct research in selected areas of excellence, contributing to regional and national development.' }
      ],
      workshops: [
        { title: 'VLSI Design Workshop', description: 'Learn the essentials of VLSI design and its applications.' },
        { title: 'Embedded Systems Workshop', description: 'Hands-on workshop on embedded systems and real-time applications.' }
      ],
      faculty: [
        {
          name: 'Dr. John Miller',
          position: 'Professor',
          qualification: 'PhD in Electronics Engineering',
          expertise: 'Power Electronics, Signal Processing',
          achievements: 'Authored multiple research papers on power electronics, collaborated on government-funded projects',
          bio: 'Dr. John Miller is a professor of electronics engineering specializing in power electronics and signal processing. His extensive research has led to numerous innovations in power conversion technologies, making him a respected figure in the field. He combines academic rigor with practical insights to mentor students in their academic and research pursuits.',
          image: imageHod // Image of Dr. John Miller
        },
        {
          name: 'Prof. Sarah Thompson',
          position: 'Assistant Professor',
          qualification: 'M.Tech in Embedded Systems',
          expertise: 'VLSI, Embedded Systems',
          achievements: 'Developed embedded systems for leading electronics companies, co-authored VLSI textbooks',
          bio: 'Prof. Sarah Thompson has a passion for embedded systems and VLSI design. Her career in both academia and industry has equipped her with valuable insights into cutting-edge technologies. She mentors students on advanced VLSI and embedded system projects, helping them bridge the gap between theory and practice.',
          image: imageHod // Image of Prof. Sarah Thompson
        }
      ],
      hodImage: imageHod,
      syllabus: [{
        year:'First Year',
        sem:'Sem-I',
        links:'www.google.com',
      },
      {
        year:'First Year',
        sem:'Sem-II',
        links:'www.google.com',
      },
      {
        year:'Second Year',
        sem:'Sem-II',
        links:'www.google.com',
      },
      {
        year:'Second Year',
        sem:'Sem-IV',
        links:'www.google.com',
      },
      {
        year:'Third Year',
        sem:'Sem-V',
        links:'www.google.com',
      },
      {
        year:'Third Year',
        sem:'Sem-VI',
        links:'www.google.com',
      },
      {
        year:'Fourth Year',
        sem:'Sem-VII',
        links:'www.google.com',
      },
      {
        year:'Fourth Year',
        sem:'Sem-VIII',
        links:'www.google.com',
      },
      ],
      exam: [{
        year:'First Year',
        sem:'Sem-I',
        links:'www.google.com',
      },
      {
        year:'First Year',
        sem:'Sem-II',
        links:'www.google.com',
      },
      {
        year:'Second Year',
        sem:'Sem-II',
        links:'www.google.com',
      },
      {
        year:'Second Year',
        sem:'Sem-IV',
        links:'www.google.com',
      },
      {
        year:'Third Year',
        sem:'Sem-V',
        links:'www.google.com',
      },
      {
        year:'Third Year',
        sem:'Sem-VI',
        links:'www.google.com',
      },
      {
        year:'Fourth Year',
        sem:'Sem-VII',
        links:'www.google.com',
      },
      {
        year:'Fourth Year',
        sem:'Sem-VIII',
        links:'www.google.com',
      },
      ],
      placement: [
        { year: 2022, placed: 50, notPlaced: 30, furtherStudies: 20, companiesVisited: 20, highestPackage: 8, medianPackage: 4, averagePackage: 3.5 },
        { year: 2023, placed: 55, notPlaced: 25, furtherStudies: 15, companiesVisited: 22, highestPackage: 9, medianPackage: 5, averagePackage: 4 }
      ],
      projects: []
    },

    // Add more departments as needed
  ];
  
  export default departments;
  