import "./styles/Career.css";

const Achievements = () => {
  return (
    <div className="career-section section-container" id="achievements">
      <div className="career-container">
        <h2>
          <span>ACHIEVEMENTS</span>
          {/* Achievements <span>&</span>
          <br /> Highlights */}
        </h2>

        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Solved 550+ Questions on overall Coding Platforms </h4>
                <h5><a href="https://codolio.com/profile/Abhishekgupta1607" target="_blank" style={{ color: "inherit", textDecoration: "underline", pointerEvents: "auto" }}>Codolio</a></h5>
              </div>
              <h3>Present</h3>
            </div>
            <p>
              Solved 550+ Questions on overall Coding Platforms (Leetcode,GfG,CodeChef,HackerRank,Codeforces)
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>3 - Star in Python</h4>
                <h5><a href="https://www.hackerrank.com/profile/abhishekgupta164" target="_blank" style={{ color: "inherit", textDecoration: "underline", pointerEvents: "auto" }}>HackerRank</a></h5>
              </div>
              <h3>Jan '25</h3>
            </div>
            <p>
              Attained a 3-star competency rating in Python
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>3 - Star in C++</h4>
                <h5><a href="https://www.hackerrank.com/profile/abhishekgupta164" target="_blank" style={{ color: "inherit", textDecoration: "underline", pointerEvents: "auto" }}>HackerRank</a></h5>
              </div>
              <h3>Nov '24</h3>
            </div>
            <p>
              Attained a 3-star competency rating in C++ algorithms and data structures.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Novice Badge</h4>
                <h5><a href="https://www.hackerearth.com/@abhishekgupta162005/" target="_blank" style={{ color: "inherit", textDecoration: "underline", pointerEvents: "auto" }}>HackerEarth</a></h5>
              </div>
              <h3>Dec '23</h3>
            </div>
            <p>
              Earned the Novice competitive programmer badge based on fundamental contest performance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;

