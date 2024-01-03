// import { Col } from "react-bootstrap";

// export const ProjectCard = ({ title, description, imgUrl, linkURL, screenshots }) => {
//   return (
//     <Col size={12} sm={6} md={4}>
//       <a href={linkURL} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit" }}>
//         <div className="proj-card">
//           <div className="proj-imgbx">
//             <img src={imgUrl} alt={title} />
//           </div>
//           <div className="proj-txt">
//             <h4>{title}</h4>
//             <span>{description}</span>
//           </div>
//           {screenshots && (
//             <div className="proj-screenshot">
//               <img src={screenshots[0]} alt={`${title} Screenshot`} />
//             </div>
//           )}
//         </div>
//       </a>
//     </Col>
//   );
// };


// import React from "react";
// import { Carousel } from "react-bootstrap";

// const ProjectCard = ({ title, description, imgUrl, linkURL, screenshots }) => {
//   return (
//     <div className="proj-card">
//       <h4>{title}</h4>
//       <p>{description}</p>
//       <a href={linkURL} target="_blank" rel="noopener noreferrer">
//         View on GitHub
//       </a>
//       {screenshots && screenshots.length > 0 && ( // Check if screenshots is defined and not empty
//         <Carousel>
//           {screenshots.map((screenshot, index) => (
//             <Carousel.Item key={index}>
//               <img className="d-block w-100" src={screenshot} alt={`Screenshot ${index + 1}`} />
//             </Carousel.Item>
//           ))}
//         </Carousel>
//       )}
//     </div>
//   );
// };

// export default ProjectCard;


import React from 'react';
import { Col, Carousel } from 'react-bootstrap';

export const ProjectCard = ({ title, description, imgUrl, linkURL, screenshots }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <a href={linkURL} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit" }}>
        <div className="proj-card">
          <div className="proj-imgbx">
            <img src={imgUrl} alt={title} />
          </div>
          <div className="proj-txt">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
          {screenshots && screenshots.length > 0 && (
            <Carousel className="proj-screenshot">
              {screenshots.map((screenshot, index) => (
                <Carousel.Item key={index}>
                  <img
                    className="d-block w-100"
                    src={screenshot}
                    alt={`${title} Screenshot ${index + 1}`}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          )}
        </div>
      </a>
    </Col>
  );
};
