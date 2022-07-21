import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Portfolio Analysis</h2>
                <p>Setp 1:Risk tolenrence <br/>    Step 2:Choose your portolio <br/> Step 3:Find your results. <br/> Enjoy your trip of vestigation.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Questionnaire</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Choose Portolio</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Result</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                     
			<h2>Risk Tolerance Questionnaire</h2>
			<p>Tolerance for risk is a key consideration in determining your probable level of comfort with varying investing choices.
			Your risk tolerance is scored based on three factors: (1) time horizon, (2) long-term goals and expectations, and 
			(3) short-term risk attitudes.</p>					

			<input id="element_3_1" name="element_3" class="element radio" type="radio" value="1" required/>
<label class="choice" for="element_3_1">A. Less than 45</label>
<input id="element_3_2" name="element_3" class="element radio" type="radio" value="2" required/>
<label class="choice" for="element_3_2">B. 45 to 55</label>
<input id="element_3_3" name="element_3" class="element radio" type="radio" value="3" required/>
<label class="choice" for="element_3_3">C. 56 to 65</label>
<input id="element_3_4" name="element_3" class="element radio" type="radio" value="4" required/>
<label class="choice" for="element_3_4">D. 66 to 75</label>
<input id="element_3_5" name="element_3" class="element radio" type="radio" value="5" required/>
<label class="choice" for="element_3_5">E. Older than 75</label>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>Lorem </p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
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
