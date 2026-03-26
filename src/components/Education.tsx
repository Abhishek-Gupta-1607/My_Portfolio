import "./styles/Career.css";

const Education = () => {
  return (
    <div className="career-section section-container" id="education">
      <div className="career-container">
        <h2>
          <span>EDUCATION</span>
        </h2>

        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech (CSE)</h4>
                <h5>Lovely Professional University</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Bachelor of Technology in Computer Science and Engineering. Current CGPA: 7.59.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Intermediate</h4>
                <h5>Gyan Kunj Academy (Bansih Bazar)</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              Completed higher secondary education representing the Science stream with a final percentage of 74%.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Matriculation</h4>
                <h5>Gopal Ji Memorial (Reoti)</h5>
              </div>
              <h3>2020</h3>
            </div>
            <p>
              Graduated 10th grade foundation with a final percentage of 75.5%.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;

