import React from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import {ProjectCard}  from "./ProjectCard";
import projImg1 from "../assets/img/Twitter-Dark-Mode.jpg";
import projImg2 from "../assets/img/RememberIcon2.png";
import projImg3 from "../assets/img/flix launch screen.png";
import projImg4 from "../assets/img/instaDarkMode.jpeg";
import projImg5 from "../assets/img/rawdah_logo_3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import iphoneScreenshot from "../assets/img/ihpone Screenshot (1).png"
import flixScreenshot from "../assets/img/flix_screenshot_2-removebg-preview (2).png"
import flixScreenshot2 from "../assets/img/flix iphone.jpeg"
import rememberScreenshot from "../assets/img/remember-1708x2336.jpeg"
import rememberShuffleScreenshot from "../assets/img/leonardo-dicaprio-clapping.gif"
import rememberShuffleUpscaleScreenshot from "../assets/img/rememberShuffleUpscaled.jpeg"

import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Twitter Clone",
      shortDescription: "twitter ios clone",
      longDescription: "Developed and launched a fully functional Twitter clone iOS application using Swift and Twitter's API, features secure login system that retains user credentials, integrated tweet generation, favoriting, and retweeting capabilities to replicate the authentic Twitter app.",
      imgUrl: projImg1,
      linkURL: "https://github.com/redwan528/Twitter-Mock-Up",
      screenshots: [iphoneScreenshot, iphoneScreenshot, iphoneScreenshot]
    },

    
    {
      title: "Remember",
      longDescription: "Built a card game app from scratch using Swift and framework SwiftUI, utilizing MVVM (Model-View-ViewModel) architectural pattern for robust and maintainable code structure. The game presents an intuitive interface where users initiate play with a tableau of cards facedown, invoking strategic thinking as they flip one card at a time to unveil and match pairs in the least number of moves.",
      imgUrl: projImg2,
      linkURL: "https://github.com/redwan528/Remember",
      screenshots: [rememberScreenshot, rememberShuffleScreenshot, rememberShuffleUpscaleScreenshot]
    }
    ,
   
    {
      title: "Parstagram",
      longDescription: "This is an Instagram clone with a custom Parse backend that allows a user to post photos and view a global photos feed.",
      imgUrl: projImg4,
      linkURL: "https://github.com/redwan528/Parstagram",
      screenshots: [iphoneScreenshot, iphoneScreenshot, iphoneScreenshot]
    }
    ,
    {
      title: "Flix",
      longDescription: "a movie database app fetching the latest movies in theaters!",
      imgUrl: projImg3,
      linkURL: "https://github.com/redwan528/Flix",
      screenshots: [flixScreenshot, flixScreenshot2, iphoneScreenshot]
    }
    ,
    {
      title: "Rawdah Institute",
      longDescription: "Contributing on developing an arabic online course website using React!",
      imgUrl: projImg5,
      linkURL: "https://github.com/tahmid198/Rawdah_Institute-",
      screenshots: [iphoneScreenshot, iphoneScreenshot, iphoneScreenshot]
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
                <p>Check out my latest projects!</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    {/* <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item> */}
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
                    {/* <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane> */}
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
