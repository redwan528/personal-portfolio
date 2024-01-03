import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, linkURL, screenshots }) => {

  
  return (
    <Col size={12} sm={6} md={4}>
            <a href={linkURL} target="_blank" rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "inherit" }}>
      {/* <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div> */}

      <div className="proj-card">

        <div className="proj-imgbx">
          <img src= {imgUrl} alt={title}/>
        </div>
        <div className="proj-txt">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
      </a>

     
    </Col>
  )

}
