import React from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import {ProjectCard}  from "./ProjectCard";
import projImg2 from "../assets/img/RememberIcon2.png";
import projImg3 from "../assets/img/flix launch screen.png";
import projImg5 from "../assets/img/rawdah_logo_3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import flixScreenshot from "../assets/img/flix_screenshot_2-removebg-HD.png"
import flixScreenshot2 from "../assets/img/flix iphone.jpeg"
import rememberScreenshot from "../assets/img/remember-1708x2336.jpeg"
import rememberShuffleScreenshot from "../assets/img/rememberShuffle (1).png"
import rememberMatch from "../assets/img/rememberCardsScoreMatch.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [

    {
      title: "Remember",
      shortDescription: (
      <>
      <span>An emoji matching card game built from scratch, with multiple emoji themes</span> 
      <span> (No Data of any kind collected) </span>     
      </>       

      ),
      longDescription: (
        <>
          <p>Built a card game app from scratch using Swift and framework SwiftUI, utilizing MVVM (Model-View-ViewModel) architectural pattern for robust and maintainable code structure.</p>
          <p>The game presents an intuitive interface where users initiate play with a tableau of cards facedown, invoking strategic thinking as they flip one card at a time to unveil and match pairs in the least number of moves.</p>
       <p> No Data of any kind collected </p>
        </>
      ), 
           imgUrl: projImg2,
      linkURL: "https://github.com/redwan528/Remember",
      screenshots: [rememberScreenshot, rememberShuffleScreenshot, rememberMatch],
      techStack: ( 
        <ul>  
      <li>Swift</li> 
      <li>SwiftUI</li>
      <li>MVVM</li>
      </ul> 
      )
      
    }
    ,
    {
      title: "Flix",
      shortDescription: "A movie database app fetching the latest movies in theaters!",
      longDescription:  "A movie database app fetching the latest movies in theaters!",
      imgUrl: projImg3,
      linkURL: "https://github.com/redwan528/Flix",
      screenshots: [flixScreenshot, flixScreenshot2],
      techStack: ( <ul> 
      <li>Swift</li>
      <li>UIKit</li>
      <li>Alamofire</li>
      <li>CocoaPods</li>
      </ul>
      )
    }
    ,
    {
      title: "Rawdah Institute",
      shortDescription:"An online Arabic class website where users can sign up for Beginner, Intermediate, and Advanced Arabic courses! (In Development)" ,
      longDescription: "An online Arabic class website where users can sign up for Beginner, Intermediate, and Advanced Arabic courses! (In Development)",
      imgUrl: projImg5,
      linkURL: "https://github.com/tahmid198/Rawdah_Institute-",
      techStack: (
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>React </li>

        </ul>
      )
    }
   
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Check out my latest projects, more upcoming soon!</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
              
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
