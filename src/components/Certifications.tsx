import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import WorkImage from "./WorkImage";
import "./styles/Work.css";

gsap.registerPlugin(useGSAP);

type Certification = {
  title: string;
  subtitle: string;
  imageSrc: string;
  fileSrc: string;
};

const Certifications = () => {
  useGSAP(() => {
    let translateX: number = 0;

    function setTranslateX() {
      const boxes = document.querySelectorAll<HTMLDivElement>(
        "#cert-wrapper .work-box"
      );
      const container = document.querySelector<HTMLDivElement>(
        "#cert-wrapper .work-container"
      );

      if (!container || boxes.length === 0) return;

      const rect = boxes[0].getBoundingClientRect();
      const parentWidth = boxes[0].parentElement!.getBoundingClientRect().width;
      const padding: number =
        parseInt(window.getComputedStyle(boxes[0]).paddingLeft || "80") / 2;

      translateX = rect.width * boxes.length - parentWidth + padding;
      translateX = Math.max(window.innerWidth * 0.8, translateX);
    }

    setTranslateX();

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#cert-wrapper",
        start: "top top",
        end: () => `+=${translateX}`, // Use actual scroll width dynamically
        scrub: true,
        pin: true,
        pinSpacing: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        refreshPriority: 1,
        id: "certifications",
      },
    });

    timeline.to("#certifications .work-flex", {
      x: -translateX,
      ease: "none",
    });

    return () => {
      timeline.kill();
      ScrollTrigger.getById("certifications")?.kill();
    };
  }, []);
  const certifications: Certification[] = [
    {
      title: "Data Analytics with Python",
      subtitle: "NPTEL (Apr '25)",
      imageSrc: "/images/DataAnalytics.png",
      fileSrc: "https://drive.google.com/file/d/1pUg8c4w8Wb4_-C-SbjGazmjdEyKt5shu/view?usp=sharing",
    },
    {
      title: "Legacy Responsive Web Design",
      subtitle: "FreeCode Camp (Dec '23)",
      imageSrc: "/images/Freecodecamp.png",
      fileSrc: "https://www.freecodecamp.org/certification/fccf4daa1fc-d681-4e82-b6fb-52fd9dc86391/responsive-web-design",
    },
  ];

  return (
    <div className="certifications-wrapper" id="cert-wrapper">
      <div className="work-section" id="certifications">
        <div className="work-container section-container">
          <h2>
            <span>CERTIFICATIONS</span>
          </h2>

          <div className="work-flex">
            {certifications.map((cert, index) => (
              <div className="work-box" key={cert.title}>
                <div className="work-info">
                  <div className="work-title">
                    <h3>0{index + 1}</h3>
                    <div>
                      <h4>{cert.title}</h4>
                      <p>{cert.subtitle}</p>
                    </div>
                  </div>
                  <h4>Certificate</h4>
                  <p>Click the image to view</p>
                </div>

                <WorkImage
                  image={cert.imageSrc}
                  alt={cert.title}
                  link={cert.fileSrc}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certifications;

