import { PropsWithChildren, useEffect, useState } from "react";
import About from "./About";
import Contact from "./Contact";
import Cursor from "./Cursor";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Training from "./Training";
import Certifications from "./Certifications";
import Achievements from "./Achievements";
import Education from "./Education";
import Landing from "./Landing";
import Navbar from "./Navbar";
import SocialIcons from "./SocialIcons";
import WhatIDo from "./WhatIDo";
import Work from "./Work";


const MainContainer = ({ children }: PropsWithChildren) => {
  const [isDesktopView, setIsDesktopView] = useState<boolean>(
    window.innerWidth > 1024
  );

  useEffect(() => {
    const resizeHandler = () => {
      setIsDesktopView(window.innerWidth > 1024);
    };
    resizeHandler();
    window.addEventListener("resize", resizeHandler);

    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 500);

    return () => {
      window.removeEventListener("resize", resizeHandler);
      clearTimeout(timer);
    };
  }, [isDesktopView]);

  return (
    <div className="container-main">
      <Cursor />
      <Navbar />
      <SocialIcons />
      {isDesktopView && children}
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <div className="container-main">
            <Landing>{!isDesktopView && children}</Landing>
            <About />
            <WhatIDo />
            <Work />
            <Training />
            <Certifications />
            <Achievements />
            <Education />
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
