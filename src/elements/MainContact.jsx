import React, { useContext, useState, useEffect } from "react";
import PageHelmet from "../component/common/Helmet";
import { FiMail, FiMapPin } from "react-icons/fi";
import ContactFour from "./contact/ContactFour";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import HeaderThree from "../component/header/HeaderThree";
import Footer from "../component/footer/Footer";
import Toggle from "../component/Toggle/Toggle";
import { useTranslation } from "react-i18next";
import { ThemeContext } from "../ThemeContext";

const MainContact = () => {
  const { t } = useTranslation();
  const { isDark, toggleTheme } = useContext(ThemeContext);
  const [loading, setLoading] = useState(true);

  // Effect for dotlottie-player script
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs";
    script.type = "module";
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  // Simulate loading for 3 seconds
  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 3000));
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className={isDark ? "active-dark" : "active-light"}>
        <div
          style={{
            width: "100vw",
            height: "100vh",
            display: "grid",
            placeItems: "center",
          }}
        >
          <dotlottie-player
            src="https://lottie.host/0544481e-fc88-4533-8112-736c6a8be8f8/zpUnJPdBr3.json"
            background="transparent"
            speed="1"
            style={{ width: "300px", height: "300px" }}
            loop
            autoplay
          ></dotlottie-player>
        </div>
      </div>
    );
  }

  return (
    <div className={isDark ? "active-dark" : "active-light"}>
      <PageHelmet pageTitle="Contact" />
      <HeaderThree homeLink="/" logo="symbol-dark" color="color-dark" />
      <div
        className="breadcrumb-area rn-bg-color ptb--180 bg_image contactUsBanner"
        data-black-overlay="8"
      >
        <div className="container aboutRspnContainer">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-6 col-12 mt_mobile--20">
              <div className="rn-address mainContactCards">
                <div className="icon">
                  <FiMail />
                </div>
                <div className="inner">
                  <h4 className="title title1 mainContactCardText">
                    {t("email_add")}
                  </h4>
                  <p>
                    <a
                      className="mainContactCardText"
                      href="mailto:support@pcoxgroup.com"
                    >
                      support@pcoxgroup.com
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6 col-12 mt_md--50 mt_sm--20">
              <div className="rn-address mainContactCards">
                <div className="icon">
                  <FiMapPin />
                </div>
                <div className="inner">
                  <h4 className="title title1 mainContactCardText">
                    {t("location")}
                  </h4>
                  <p>
                    <a
                      className="mainContactCardText"
                      href="https://maps.app.goo.gl/oizfgAiWvUE7hAca9"
                      target="_blank"
                      rel="noopener noreferrer" // Add this to fix the security issue
                    >
                      {t("company_address")}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="rn-contact-page ptb--120 bg_color--1 seprateBgSection">
        <ContactFour />
      </div>

      <div className="backto-top">
        <ScrollToTop showUnder={160}>
          <FiChevronUp />
        </ScrollToTop>
      </div>

      <div className="toggle-button">
        <Toggle isChecked={isDark} handleChange={toggleTheme} />
      </div>

      <Footer />
    </div>
  );
};

export default MainContact;
