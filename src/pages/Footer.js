// const Footer = () => {
//     return (
//       <footer
//         className="footer vesitfooter"
//         style={{
//           padding: '20px 0',
//           backgroundColor: '#343a40',
//           color: '#ffffff',
//           fontSize: '0.9rem',
//           textAlign: 'center',
//         }}
//       >
//         <div className="container">
//           <div className="row">
//             <div className="col-md-4 mb-3">
//               <span style={{ fontWeight: 'bold' }}>
//                 Address: <br />
//                 Hashu Advani Memorial Complex, Collector's Colony
//                 <br />
//                 Chembur, Mumbai, Maharashtra 400074
//               </span>
//             </div>
//             <div className="col-md-4 mb-3">
//               <h5>Useful Links</h5>
//               <ul className="list-unstyled" style={{ padding: '0' }}>
//                 <li>
//                   <a
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     href="https://vesit.ves.ac.in/storage/RTI Information.pdf"
//                     style={{ textDecoration: 'none', color: '#ffffff' }}
//                   >
//                     RTI Information
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     href="/nirf"
//                     style={{ textDecoration: 'none', color: '#ffffff' }}
//                   >
//                     NIRF
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     href="https://ndl.iitkgp.ac.in/"
//                     style={{ textDecoration: 'none', color: '#ffffff' }}
//                   >
//                     NDL
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     href="https://swayam.gov.in/"
//                     style={{ textDecoration: 'none', color: '#ffffff' }}
//                   >
//                     NPTEL Swayam
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     href="/sitemap"
//                     style={{ textDecoration: 'none', color: '#ffffff' }}
//                   >
//                     Sitemap
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     href="https://vesit.ves.ac.in/storage/Website Disclaimer.pdf"
//                     style={{ textDecoration: 'none', color: '#ffffff' }}
//                   >
//                     Website Disclaimer Policy
//                   </a>
//                 </li>
//               </ul>
//             </div>
//             <div className="col-md-4 mb-3">
//               <h5>Social Links</h5>
//               <ul className="list-unstyled" style={{ padding: '0' }}>
//                 <li>
//                   <a
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     href="https://www.facebook.com/vesinstituteoftech/"
//                     style={{ textDecoration: 'none', color: '#ffffff' }}
//                   >
//                     Facebook
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     href="https://twitter.com/vesitedu"
//                     style={{ textDecoration: 'none', color: '#ffffff' }}
//                   >
//                     Twitter
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     href="https://www.instagram.com/vesitedu/"
//                     style={{ textDecoration: 'none', color: '#ffffff' }}
//                   >
//                     Instagram
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     href="https://www.youtube.com/channel/UCSztaAQdtzmlb05IedHf9Vg"
//                     style={{ textDecoration: 'none', color: '#ffffff' }}
//                   >
//                     YouTube
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     href="https://www.linkedin.com/company/ves-institute-of-technology/"
//                     style={{ textDecoration: 'none', color: '#ffffff' }}
//                   >
//                     LinkedIn
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </div>
//           <div className="mt-3">
//             <p style={{ margin: '0' }}>
//               &copy; {new Date().getFullYear()} VES Institute of Technology
//             </p>
//           </div>
//         </div>
//       </footer>
//     );
//   };
  
//   export default Footer;





const Footer = () => {
  return (
    <footer
      className="footer vesitfooter"
      style={{
        padding: '20px 10px',
        backgroundColor: '#343a40',
        color: '#ffffff',
        fontSize: '0.9rem',
        display: 'flex',
        flexWrap: 'wrap',
        zIndex:1,
        position: 'relative',
        justifyContent: 'space-around',
        alignItems: 'flex-start',
      }}
    >
      <div
        className="footer-section"
        style={{
          flex: '1 1 30%', // Allows the section to grow, shrink, and take at least 30% of the row
          marginBottom: '10px',
        }}
      >
        <span style={{ fontWeight: 'bold' }}>
          Address: <br />
          Hashu Advani Memorial Complex, Collector's Colony
          <br />
          Chembur, Mumbai, Maharashtra 400074
        </span>
      </div>
      <div
        className="footer-section"
        style={{
          flex: '1 1 30%', // Same as above
          marginBottom: '10px',
        }}
      >
        <h5>Useful Links</h5>
        <ul className="list-unstyled" style={{ padding: '0' }}>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://vesit.ves.ac.in/storage/RTI Information.pdf"
              style={{ textDecoration: 'none', color: '#ffffff' }}
            >
              RTI Information
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="/nirf"
              style={{ textDecoration: 'none', color: '#ffffff' }}
            >
              NIRF
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://ndl.iitkgp.ac.in/"
              style={{ textDecoration: 'none', color: '#ffffff' }}
            >
              NDL
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://swayam.gov.in/"
              style={{ textDecoration: 'none', color: '#ffffff' }}
            >
              NPTEL Swayam
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="/sitemap"
              style={{ textDecoration: 'none', color: '#ffffff' }}
            >
              Sitemap
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://vesit.ves.ac.in/storage/Website Disclaimer.pdf"
              style={{ textDecoration: 'none', color: '#ffffff' }}
            >
              Website Disclaimer Policy
            </a>
          </li>
        </ul>
      </div>
      <div
        className="footer-section"
        style={{
          flex: '1 1 30%', // Same as above
          marginBottom: '10px',
        }}
      >
        <h5>Social Links</h5>
        <ul className="list-unstyled" style={{ padding: '0' }}>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/vesinstituteoftech/"
              style={{ textDecoration: 'none', color: '#ffffff' }}
            >
              Facebook
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://twitter.com/vesitedu"
              style={{ textDecoration: 'none', color: '#ffffff' }}
            >
              Twitter
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/vesitedu/"
              style={{ textDecoration: 'none', color: '#ffffff' }}
            >
              Instagram
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.youtube.com/channel/UCSztaAQdtzmlb05IedHf9Vg"
              style={{ textDecoration: 'none', color: '#ffffff' }}
            >
              YouTube
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/company/ves-institute-of-technology/"
              style={{ textDecoration: 'none', color: '#ffffff' }}
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
      <div style={{ width: '100%', textAlign: 'center', marginTop: '10px' }}>
        <p style={{ margin: '0' }}>
          &copy; {new Date().getFullYear()} VES Institute of Technology
        </p>
      </div>
    </footer>
  );
};

export default Footer;
