import React from "react";
import "./Methods.css";
import { Container, Card} from "react-bootstrap";

const Methods = () => {
  return (
    <div>
      <div id="methods">
        <h1>Our Methods</h1>
        <div className="methodsWrapper">
        <Container>
        <div className="methodsSetup">
          <Card className="methodsimg col-sm-12 col-md-6 col-lg-3">
            <Card.Img variant="top" className="image4" src={require('../../assets/methods1.webp')}/>
            <Card.Body>
              <Card.Title className="cardTitle">Body Shape</Card.Title>
              <Card.Text className="card-Texts">Stay consistent and hydrate-your muscles crave routine and recovery</Card.Text>
            </Card.Body>
          </Card>
          <Card  className="methodsimg col-md-6 col-lg-3">
            <Card.Img variant="top" className="image4" src={require('../../assets/methods2.webp')}/>
            <Card.Body>
              <Card.Title className="cardTitle">Extreme</Card.Title>
              <Card.Text className="card-Texts">Fuel your muscles right after the workout; let protein and rest work their magic.</Card.Text>
            </Card.Body>
          </Card> 
          <Card className="methodsimg col-md-6 col-lg-3">
            <Card.Img variant="top" className="image4" src={require('../../assets/methods3.webp')}/>
            <Card.Body>
              <Card.Title className="cardTitle">Burn</Card.Title>
              <Card.Text className="card-Texts">Stretch, hydrate, repeat-small habits build the best results.</Card.Text>
            </Card.Body>
          </Card>
           <Card className="methodsimg col-md-6 col-lg-3">
            <Card.Img variant="top"className="image4" src={require('../../assets/methods4.webp')}/>
            <Card.Body>
              <Card.Title className="cardTitle">Calisthenics</Card.Title>
              <Card.Text className="card-Texts">Balance strength and cardio for a lean, sculpted look that lasts.</Card.Text>
            </Card.Body>
          </Card>
        </div>
        </Container>
        
        </div>
       
        
      </div>
    </div>
  );
};

export default Methods;
