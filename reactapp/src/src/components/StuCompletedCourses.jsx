import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBIcon,
  MDBCol,
  MDBContainer,
  MDBCardImage,
} from "mdb-react-ui-kit";
import webdev from "../images/devops.jpg";
import "../css/OngoingCourses.css";
import { colors } from "@mui/material";

const CourseCard = ({ course }) => {
  const { title, professor, classUrl, assessmentUrl, compcourseimg } = course;

  const handleListenClass = () => {
    console.log(`Listening to class: ${title}`);
  };

  const handleTakeAssessment = () => {
    console.log(`Taking assessment for: ${title}`);
  };

  return (
    <MDBCol md="4" className="mb-4">
      <MDBCard className="ong-course-card">
        <MDBCardBody>
          <div className="position-relative">
            <MDBCardImage
              src={compcourseimg}
              alt={compcourseimg}
              style={{ height: "250px", width: "400px" }}
              fluid
              className="mb-4"
            />
            <div className="position-absolute top-0 end-0">
              <MDBIcon
                fas
                icon="award"
                size="3x"
                style={{
                  marginRight: "10px",
                  marginTop: "10px",
                  color: " #009933",
                  // color: " #6600cc",
                }}
              />
              <i className="fas fa-icon"></i>
            </div>
          </div>
          <MDBCardTitle>{title}</MDBCardTitle>
          <MDBCardText>Professor: {professor}</MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  );
};

const CourseList = ({ courses }) => {
  return (
    <MDBContainer className="py-5">
      <div className="d-flex flex-wrap justify-content-center">
        {courses.map((course, index) => (
          <CourseCard key={index} course={course} />
        ))}
      </div>
    </MDBContainer>
  );
};

const StuCompletedCourses = () => {
  const completedCourses = [
    {
      id: 1,
      title: "Mathematics",
      professor: "Dr. Smith",

      compcourseimg: webdev,
    },
    {
      id: 1,
      title: "Mathematics",
      professor: "Dr. Smith",

      compcourseimg: webdev,
    },
    {
      id: 2,
      title: "Mathematics",
      professor: "Dr. Smith",

      compcourseimg: webdev,
    },
    {
      id: 3,
      title: "Mathematics",
      professor: "Dr. Smith",

      compcourseimg: webdev,
    },
    {
      id: 4,
      title: "Physics",
      professor: "Dr. Johnson",

      compcourseimg: webdev,
    },
    {
      id: 4,
      title: "Physics",
      professor: "Dr. Johnson",

      compcourseimg: webdev,
    },
  ];

  return (
    <div>
      <h1 style={{ marginLeft: "40%", marginTop: "3%" }}>Completed Courses</h1>
      <CourseList courses={completedCourses} />
    </div>
  );
};

export default StuCompletedCourses;
