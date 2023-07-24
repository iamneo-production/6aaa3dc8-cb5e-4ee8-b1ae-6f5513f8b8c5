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
  MDBIcon,
} from "mdb-react-ui-kit";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import webdev from "../images/webdev.jpg";
import "../css/IncompleteAssign.css";

const CourseCard = ({ course }) => {
  const { title, professor, assessmentUrl, courseimg } = course;

  const handleReTakeAssessment = () => {
    console.log(`Reaking assessment for: ${title}`);
  };

  return (
    <MDBCol md="4" className="mb-4">
      <MDBCard className="ong-course-card">
        <MDBCardBody>
          <div className="position-relative">
            <MDBCardImage
              src={courseimg}
              alt={courseimg}
              style={{ height: "250px", width: "400px" }}
              fluid
              className="mb-4"
            />
            <div className="position-absolute top-0 end-0">
              <WarningAmberIcon
                className="incomplete-assign-icon"
                sx={{ fontSize: "35px" }}
              ></WarningAmberIcon>
            </div>
          </div>
          <MDBCardTitle>{title}</MDBCardTitle>
          <MDBCardText>Professor: {professor}</MDBCardText>

          <MDBBtn
            onClick={handleReTakeAssessment}
            className="mb-4"
            style={{ marginLeft: "10%", width: "70%" }}
          >
            Retake Assessment
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

const IncompleteAssessments = () => {
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
      <h1 style={{ marginLeft: "36%", marginTop: "3%" }}>
        Incomplete Assesments
      </h1>
      <CourseList courses={ongoingCourses} />
    </div>
  );
};

export default IncompleteAssessments;
