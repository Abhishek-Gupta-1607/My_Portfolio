import "./styles/Career.css";

const Training = () => {
  return (
    <div className="career-section section-container" id="training">
      <div className="career-container">
        <h2>
          <span>TRAINING</span>
        </h2>

        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Machine Learning with Data Science</h4>
                <h5>Cipher Schools (Edtech Company)</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Performed extensive EDA with NumPy and Pandas. Trained and evaluated multiple classification models (Logistic Regression, Decision Trees, Random Forest, SVMs, PCA, K-Means) to achieve a 15% accuracy improvement, and employed feature engineering techniques enhancing model performance by 20%.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Training;

