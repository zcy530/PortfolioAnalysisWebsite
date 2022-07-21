import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import result1 from "../assets/img/result1.jpg";
import result2 from "../assets/img/result2.jpg";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import React, { useState } from 'react';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  }

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    })
}

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    let response = await fetch("url here", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });
    setButtonText("Send");
    let result = await response.json();
    setFormDetails(formInitialDetails);
    if (result.code == 200) {
      setStatus({ succes: true, message: 'Information sent successfully'});
    } else {
      setStatus({ succes: false, message: 'Something went wrong.'});
    }
  };


  const questions = [
		{
			questionText: 'What is your age?',
			answerOptions: [
				{ answerText: 'A. 18 or Under', isCorrect: false },
				{ answerText: 'B. 19 - 35', isCorrect: false },
				{ answerText: 'C. 36 - 55', isCorrect: true },
				{ answerText: 'D. 56 or above', isCorrect: false },
			],
		},
		{
			questionText: 'What do you expect to be your next major expenditure?',
			answerOptions: [
				{ answerText: 'A. Buying a house', isCorrect: false },
				{ answerText: 'B. Paying for a college education', isCorrect: true },
				{ answerText: 'C. Capitalizing a new business', isCorrect: false },
				{ answerText: 'D. Providing for retirement', isCorrect: false },
			],
		},
		{
			questionText: 'When do you expect to use most of the money you are now accumulating in your investments?',
			answerOptions: [
				{ answerText: 'A. At any time now, high level of liquidity is important', isCorrect: true },
				{ answerText: 'B. Probably in the future, 2-5 years from now', isCorrect: false },
				{ answerText: 'C. In 6-10 years', isCorrect: false },
				{ answerText: 'D. Probably in 11-20 or more years from now', isCorrect: false },
			],
		},
		{
			questionText: 'Over the next several years, you expect your annual income to:',
			answerOptions: [
				{ answerText: 'A. Stay about the same', isCorrect: false },
				{ answerText: 'B. Grow moderately', isCorrect: false },
				{ answerText: 'C. Grow substantially', isCorrect: false },
				{ answerText: 'D. Decrease moderately and substantially', isCorrect: true },
			],
		},
    {
			questionText: 'Due to a general market correction, one of your investments loses 14% of its value a short time after you buy it. What do you do?',
			answerOptions: [
				{ answerText: 'A. Sell the investment so you will not have to worry if it continues to decline', isCorrect: false },
				{ answerText: 'B. Hold on to it and wait for it to climb back up', isCorrect: false },
				{ answerText: 'C. Buy more of the same investment...because at the current lower price, it looks even better than when you bought it', isCorrect: false },
			],
		},
	];

  const projects = [
    {
      title: "Weights",
      description: "Weights",
      imgUrl: result2,
    },
    {
      title: "Predict",
      description: "Predict",
      imgUrl: result1,
    },
    {
      title: "Future Trend",
      description: "Future Trend",
      imgUrl: result2,
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};

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

                      <div className='app'>
                        {showScore ? (
                          <>
                          <div className='score-section'>
                            You scored {score} !
                            <br/>Your Risk tolenrence Level is : Moderate .
                          </div>
                          
                          </>
                        ) : (
                          <>
                            <div className='question-section'>
                              <div className='question-count'>
                                <span>Question {currentQuestion + 1}</span>/{questions.length}
                  
                              </div>

                              <div className='question-text'>{questions[currentQuestion].questionText}</div>
                            </div>

                            <div className='answer-section'>
                              {questions[currentQuestion].answerOptions.map((answerOption) => (
                                <button className='qbutton' onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
                              ))}
                            </div>
                          </>
                        )}
                      </div>

                    </Tab.Pane>

                    <Tab.Pane eventKey="second">
                        
                      <div className="shuru">

                      <h2></h2>
                      <form onSubmit={handleSubmit}>
                      <Row className="align-items-center">
                          <Col size={12} sm={6} className="px-1">
                            <input type="text" value={formDetails.firstName} placeholder="Minimum" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                          </Col>
                          <Col size={12} sm={6} className="px-1">
                            <input type="text" value={formDetails.lasttName} placeholder="Maximum" onChange={(e) => onFormUpdate('lastName', e.target.value)}/>
                          </Col>
                          <Col size={12} sm={6} className="px-1">
                            <select type="email" value={formDetails.email} placeholder="Tolerance Factor" onChange={(e) => onFormUpdate('email', e.target.value)}>
                            <option>Risk Tolerance Result</option>
                            <option value="1">Very Conservative</option>
                            <option value="2">Conservative</option>
                            <option value="3">Moderate</option>
                            <option value="4">Aggressive</option>
                            <option value="5">Very Aggressive</option>
                            </select>
                          </Col>
                          <Col size={12} sm={6} className="px-1">
                            <input type="tel" value={formDetails.phone} placeholder="Max Lookback Year" onChange={(e) => onFormUpdate('phone', e.target.value)}/>
                          </Col>
                          <Col size={12} className="px-1">
                            <textarea rows="6" value={formDetails.message} placeholder="Other..." onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                            <button type="submit"><span>{buttonText}</span></button>
                          </Col>
                          {
                            status.message &&
                            <Col>
                              <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                            </Col>
                          }
                        </Row>
                      </form>
                      </div>

                    </Tab.Pane>
                    
                    <Tab.Pane eventKey="third">
                      <p>Your Result Below:</p>
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
