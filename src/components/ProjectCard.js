import React, { useState, useEffect } from 'react';
import { Col, Carousel, Modal } from 'react-bootstrap';
import githubIcon from '../assets/img/github-mark-white.svg'; 

export const ProjectCard = ({ title, imgUrl, linkURL, screenshots, longDescription, shortDescription, techStack }) => {
  const [showModal, setShowModal] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const isMobile = windowWidth <= 768;

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const TitleAndLink = () => (
    <div className="title-and-link">
      <span className='projectTitle'>{title}</span>
      <a href={linkURL} target="_blank" rel="noreferrer" className="projectLink">
        <img src={githubIcon} alt="Link" />
      </a>
    </div>
  );

  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-card" onClick={handleShowModal}>
        <div className="proj-imgbx">
          <img src={imgUrl} alt={title} style={{ borderRadius: '25px' }} />
        </div>
        <div className="proj-txt">
          <h4>{title}</h4>
          <span>{shortDescription}</span>
          <div className='tech-stack'>{techStack}</div>
        </div>
      </div>

      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          {isMobile && <TitleAndLink />}
        </Modal.Header>
        <Modal.Body className='modal-body'>
          <div className='carousel-container'>
            {screenshots && screenshots.length > 0 && (
              <Carousel interval={2000} fade='true' slide={true}>
                {screenshots.map((screenshot, index) => (
                  <Carousel.Item key={index}>
                    <img
                      className="carousel-image"
                      src={screenshot}
                      alt={`${title} Screenshot ${index + 1}`}
                    />
                  </Carousel.Item>
                ))}
              </Carousel>
            )}
          </div>
          <div className="modal-text">
            {!isMobile && <TitleAndLink />}
            <p>{longDescription}</p>
            {techStack}
          </div>
        </Modal.Body>
      </Modal>
    </Col>
  );
};
