import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Work = () => {
  useGSAP(() => {
    let translateX: number = 0;

    function setTranslateX() {
      const boxes =
        document.querySelectorAll<HTMLDivElement>("#work-wrapper .work-box");
      const container = document.querySelector<HTMLDivElement>("#work-wrapper .work-container");

      if (!container || boxes.length === 0) return;

      const rect = boxes[0].getBoundingClientRect();
      const parentWidth = boxes[0].parentElement!.getBoundingClientRect().width;
      const padding: number =
        parseInt(window.getComputedStyle(boxes[0]).paddingLeft || "80") / 2;

      // Compute horizontal scroll distance based on widths only
      translateX = rect.width * boxes.length - parentWidth + padding;
      // Force a minimum scroll distance so it always pins correctly!
      translateX = Math.max(window.innerWidth * 0.8, translateX);
    }

    setTranslateX();

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#work-wrapper",
        start: "top top",
        end: () => `+=${translateX}`, // Use actual scroll width dynamically
        scrub: true,
        pin: true,
        pinSpacing: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        refreshPriority: 2,
        id: "work",
      },
    });

    timeline.to("#work .work-flex", {
      x: -translateX,
      ease: "none",
    });

    // Clean up (optional, good practice)
    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);
  return (
    <div className="work-wrapper" id="work-wrapper">
      <div className="work-section" id="work">
        <div className="work-container section-container">
          <h2>
            <span>PROJECTS</span>
          </h2>
          <div className="work-flex">
            {[
              {
                title: "Product Purchase Predictor",
                category: "ML Predictive Analysis",
                tools: "Python, HTML, Scikit-Learn",
                image: "/images/product.jpg",
                link: "https://github.com/Abhishek-Gupta-1607/product-purchase-predictor",
              },
              {
                title: "AI Assessment of Wire Rod",
                category: "Web Application",
                tools: "Python, HTML, CSS, JS, Flask",
                image: "/images/aluminium.jpg",
                link: "https://github.com/Abhishek-Gupta-1607/Aluminium-Wire-Rod-prediction",
              },
              {
                title: "CloudBurst Prediction System",
                category: "Real-time Monitoring API",
                tools: "HTML, CSS, JavaScript, Weather API",
                image: "/images/cloudburst.jpg",
                link: "https://github.com/manish-raj-kamal/Cloudburst-Prediction-System-v0.1",
              },
            ].map((project, index) => (
              <div className="work-box" key={index}>
                <div className="work-info">
                  <div className="work-title">
                    <h3>0{index + 1}</h3>

                    <div>
                      <h4>{project.title}</h4>
                      <p>{project.category}</p>
                    </div>
                  </div>
                  <h4>Tools and features</h4>
                  <p>{project.tools}</p>
                </div>
                <WorkImage image={project.image} alt={project.title} link={project.link} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
