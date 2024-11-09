import React from "react";
import { Container, Image, Carousel } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
import "./Workout.css";

const Workout = () => {
  const isMobileView = useMediaQuery({ maxWidth: 1115 });

  return (
    <div id="workOutPage">
      <h2>Workout Facility</h2>
      <div className="workoutWrapper">
        <Container>
          {isMobileView ? (
            <Carousel interval={1000}>
              <Carousel.Item>
                <Image className="workoutimg1" src={require("../../assets/workout5.jpeg")} />
              </Carousel.Item>
              <Carousel.Item>
                <Image className="workoutimg2" src={require("../../assets/workout2.jpeg")} />
              </Carousel.Item>
              <Carousel.Item>
                <Image className="workoutimg3" src={require("../../assets/workout3.jpeg")} />
              </Carousel.Item>
              <Carousel.Item>
                <Image className="workoutimg4" src={require("../../assets/workout1.jpeg")} />
              </Carousel.Item>
            </Carousel>
          ) : (
            // Regular layout for larger screens
            <>
              <Image className="workoutimg1" src={require("../../assets/workout4.jpeg")} />
              <Image className="workoutimg2" src={require("../../assets/workout2.jpeg")} />
              <Image className="workoutimg3" src={require("../../assets/workout3.jpeg")} />
              <Image className="workoutimg4" src={require("../../assets/workout1.jpeg")} />
            </>
          )}
        </Container>
      </div>
    </div>
  );
};

export default Workout;

