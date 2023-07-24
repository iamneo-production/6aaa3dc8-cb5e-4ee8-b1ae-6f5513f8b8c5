import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
  MDBCol,
  MDBContainer,
  MDBCardImage,
} from "mdb-react-ui-kit";
import webdev from "../images/webdev.jpg";
import "../css/OngoingCourses.css";

const CourseCard = ({ course }) => {
  const { title, professor, classUrl, assessmentUrl, courseimg } = course;

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
          <MDBCardImage
            src={courseimg}
            alt={courseimg}
            style={{ height: "250px", width: "400px" }}
            fluid
            className="mb-4"
          />
          <MDBCardTitle>{title}</MDBCardTitle>
          <MDBCardText>Professor: {professor}</MDBCardText>
          <MDBBtn
            onClick={handleListenClass}
            className="mb-4"
            style={{ marginLeft: "10%", width: "70%" }}
          >
            Listen to Class
          </MDBBtn>
          <MDBBtn
            onClick={handleTakeAssessment}
            className="mb-4"
            style={{ marginLeft: "10%", width: "70%" }}
          >
            Take Assessment
          </MDBBtn>
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

const StudentOngoingCourses = () => {
  const ongoingCourses = [
    {
      id: 1,
      title: "Mathematics",
      professor: "Dr. Smith",
      classUrl: "https://example.com/math-class",
      assessmentUrl: "https://example.com/math-assessment",
      courseimg: webdev,
    },
    {
      id: 1,
      title: "Mathematics",
      professor: "Dr. Smith",
      classUrl: "https://example.com/math-class",
      assessmentUrl: "https://example.com/math-assessment",
      courseimg: webdev,
    },
    {
      id: 2,
      title: "Mathematics",
      professor: "Dr. Smith",
      classUrl: "https://example.com/math-class",
      assessmentUrl: "https://example.com/math-assessment",
      courseimg: webdev,
    },
    {
      id: 3,
      title: "Mathematics",
      professor: "Dr. Smith",
      classUrl: "https://example.com/math-class",
      assessmentUrl: "https://example.com/math-assessment",
      courseimg: webdev,
    },
    {
      id: 4,
      title: "Physics",
      professor: "Dr. Johnson",
      classUrl: "https://example.com/physics-class",
      assessmentUrl: "https://example.com/physics-assessment",
      courseimg: webdev,
    },
    {
      id: 4,
      title: "Physics",
      professor: "Dr. Johnson",
      classUrl: "https://example.com/physics-class",
      assessmentUrl: "https://example.com/physics-assessment",
      courseimg: webdev,
    },
  ];

  return (
    <div>
      <h1 style={{ marginLeft: "40%", marginTop: "3%" }}>Ongoing Courses</h1>
      <CourseList courses={ongoingCourses} />
    </div>
  );
};

export default StudentOngoingCourses;
