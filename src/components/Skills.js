import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"
import portfolioPic from "../assets/img/circleLinkedinPic.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">

                      <h2 className="aboutMeTitle">About Me</h2>
                      <img className="profilePic" src={portfolioPic} alt="Image" />
                      <p className="aboutMe"> I'm an enthusiastic and detail-oriented aspiring Junior iOS Developer
                       with two years of hands-on experience with Swift, UIKit, and SwiftUI. 
                        Seeking to leverage my skills in a challenging role to create user-friendly iOS applications.
                        </p>

                    
                     
                        <h2 className="myTechStack">My Tech Stack</h2>

  

<div className='parent-skill-container'>

<div class="languagesContainer">
    <h2 class="languagesTitle">Languages</h2>
    <div class="languages">
        <div>Swift</div>
        <div>Python</div>
        <div>Java</div>
        <div>C++</div>
        <div>JavaScript</div>
        <div>React</div>
    </div>
</div>
                     
<div class="frameworksContainer">
    <h2 class="frameworksTitle">Frameworks & Libraries</h2>
    <div class="frameworks">
        <div>SwiftUI</div>
        <div>UIKit</div>
        <div>Core Data</div>
        <div>Alamofire</div>

        </div>  
    </div>

    <div class="ToolsContainer">
    <h2 class="ToolsTitle">Tools & Services</h2>
    <div class="ToolsAndServices">
        <div>Xcode</div>
        <div>CocoaPods</div>
        <div>mySQL Workbench</div>
        <div>Firebase</div>
        </div>
        </div>
</div>


                 

                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
