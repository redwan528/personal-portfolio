import React, { useState, useEffect } from 'react';
import { Col, Carousel, Modal } from 'react-bootstrap';

export const ProjectCard = ({ title, description, imgUrl, linkURL, screenshots }) => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  useEffect(() => {
    const adjustCarouselHeight = () => {
      const carousel = document.querySelector('.carousel-container');
      if (carousel) {
        const width = carousel.offsetWidth;
        const aspectRatio = 4 / 3; // Adjust this according to your images
        const height = width / aspectRatio;
        carousel.style.height = `${height}px`;
      }
    };

    window.addEventListener('resize', adjustCarouselHeight);
    adjustCarouselHeight();

    return () => {
      window.removeEventListener('resize', adjustCarouselHeight);
    };
  }, []);

  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-card" onClick={handleShowModal}>
        <div className="proj-imgbx">
          <img src={imgUrl} alt={title} style={{ borderRadius: '25px' }} />
        </div>
        <div className="proj-txt">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>

      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className='modal-body-flex'>
          <div className='carosusel-container'>
          {screenshots && screenshots.length > 0 && (
            <Carousel interval={2000} slide={true}>
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
     
          <div className="modal-text">
          <span>Tech Stack</span>
          <ul>
            <li>SwiftUI</li>
            <li>MVVM</li>
            <li>Swift</li>
            

          </ul>
            {/* You can add more paragraphs or elements as needed */}
          </div>
        </Modal.Body>
      </Modal>

      
    </Col>
  );
};
