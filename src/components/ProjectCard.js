// import { link } from '';
import React, { useState, useEffect } from 'react';
import { Col, Carousel, Modal } from 'react-bootstrap';
import githubIcon from '../assets/img/github-mark-white.svg'; 

export const ProjectCard = ({ title, imgUrl, linkURL, screenshots, longDescription, shortDescription, techStack }) => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-card" onClick={handleShowModal}>
        <div className="proj-imgbx">
          <img src={imgUrl} alt={title} style={{ borderRadius: '25px' }} />
          {/* <div className="proj-hover-text">Click for more details</div> */}

        </div>
        <div className="proj-txt">
          <h4>{title}</h4>
          <span>{shortDescription}</span>
          <div className='tech-stack'> 
          {techStack}
          </div>
          
        </div>
      </div>

      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          {/* <Modal.Title>{title}</Modal.Title> */}
        </Modal.Header>
        <Modal.Body className='modal-body'>
          <div className='carosusel-container'>
          {screenshots && screenshots.length > 0 && (
            <Carousel interval={2000} fade = 'true' slide={true}>
              {screenshots.map((screenshot, index) => (
                <Carousel.Item key={index}>
                  <img
                    className="carosuel-image"
                    src={screenshot}
                    alt={`${title} Screenshot ${index + 1}`}
                  />
                </Carousel.Item>
              ))}

            </Carousel>
          )}
          </div>
     
          <div className="modal-text">
          <div className="title-and-link">
      <span className='projectTitle'>{title}</span>
      <a href={linkURL} target="_blank" className="projectLink">
      <img src={githubIcon} alt="Link" />
     
      </a>
    </div>
    <p> {longDescription} </p>

   
          {techStack}
         
         
          </div>
        </Modal.Body>
      </Modal>

      
    </Col>
  );
};

