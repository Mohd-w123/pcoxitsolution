import React, { useState } from "react";
import PageHelmet from "../../component/common/Helmet";
import HeaderThree from "../../component/header/HeaderThree";
import Footer from "../../component/footer/Footer";
import Toggle from "../../component/Toggle/Toggle";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import Styles from "../../../public/assets/css/custom.module.css";
import SDBredCrmb from "../../../public/assets/images/service/breadcrumbSD.jpg";
import WDBredCrmb from "../../../public/assets/images/service/breadcrumbWD.jpg";
import MDBredCrmb from "../../../public/assets/images/service/breadcrumbMD.jpg";
import SISBredCrmb from "../../../public/assets/images/service/breadcrumbSIS.jpg";
import CCSBredCrmb from "../../../public/assets/images/service/breadcrumbCCS.jpg";
import SMBredCrmb from "../../../public/assets/images/service/breadcrumbSM.jpg";

import { useTranslation } from "react-i18next";

const SoftDev = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const [isDark, setIsDark] = useState(false);

  const pageTitle = "Software Maintenance";

  const backgroundImages = {
    "Software Development": SDBredCrmb,
    "Web App Development": WDBredCrmb,
    "Mobile App Development": MDBredCrmb,
    "Software Integration Solutions": SISBredCrmb,
    "Cloud-Based Solutions": CCSBredCrmb,
    "Software Maintenance": SMBredCrmb,
  };

  // Default to no background image if the pageTitle doesn't match
  const backgroundImage = backgroundImages[pageTitle] || "none";

  return (
    <div className={isDark ? "active-dark" : "active-light"}>
      {/* Start Pagehelmet  */}
      <PageHelmet pageTitle={pageTitle} />
      {/* End Pagehelmet  */}

      <HeaderThree homeLink="/" logo="symbol-dark" color="color-black" />
      <div className="bg_color--1">
        <div
          style={{
            height: "600px",
            backgroundImage: `url(${backgroundImage})`, // Use the background image
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className={`${Styles.overlay}`}>
            <div
              style={{
                height: "600px",
              }}
              className="d-flex flex-column align-items-center justify-content-center text-dark text-center"
            >
              <h1 className="display-4 text-white font-weight-bold mb-4 mx-auto">
                Software Development
              </h1>
              <p className="text-white mb-8">
                Tailored solutions to meet the unique needs of your business,
                from concept to deployment.
              </p>
              <div className="d-flex justify-content-center mb-4">
                <a
                  href="#redirect"
                  className={`${Styles.getStBtn} btn px-4 py-2 mt-3 rounded text-white`}
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="container pt--120">
          <div className="bg_color--1 py-5">
            <h2 className="display-4 text-center font-weight-normal mb-5">
              Our Development Process
            </h2>
            <div className="row mx-auto">
              <div className="col-md-6 col-lg-6 mb-4">
                <div
                  className={`${Styles.DevProg} p-4 bg_color--5 rounded shadow-sm`}
                >
                  <h3 className="h3 font-weight-bold serviceProcHead">
                    1. Requirement Analysis
                  </h3>
                  <p>
                    We start with a detailed analysis of your business needs to
                    ensure the software solution meets your specific
                    requirements.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 mb-4">
                <div
                  className={`${Styles.DevProg} p-4 bg_color--5 rounded shadow-sm`}
                >
                  <h3 className="h3 font-weight-bold serviceProcHead">
                    2. Design and Prototyping
                  </h3>
                  <p>
                    Our team creates detailed design documents and prototypes to
                    visualize the software's functionality and user interface.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 mb-4">
                <div
                  className={`${Styles.DevProg} p-4 bg_color--5 rounded shadow-sm`}
                >
                  <h3 className="h3 font-weight-bold serviceProcHead">
                    3. Development and Testing
                  </h3>
                  <p>
                    We use industry best practices to build robust, scalable
                    software and conduct thorough testing to ensure quality.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 mb-4">
                <div
                  className={`${Styles.DevProg} p-4 bg_color--5 rounded shadow-sm`}
                >
                  <h3 className="h3 font-weight-bold serviceProcHead">
                    4. Deployment and Support
                  </h3>
                  <p id="redirect">
                    We handle the deployment and provide ongoing support and
                    maintenance to ensure optimal performance.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="py-5">
            <h2 className="display-4 text-center mb-5">
              Maintenance Tools We Use
            </h2>
            <div className="row">
              <div className="col-6 col-md-4 col-lg-3 mb-4">
                <div className={`${Styles.cardBtn2} p-3 rounded text-center`}>
                  Jira
                </div>
              </div>
              <div className="col-6 col-md-4 col-lg-3 mb-4">
                <div className={`${Styles.cardBtn2} p-3 rounded text-center`}>
                  New Relic
                </div>
              </div>
              <div className="col-6 col-md-4 col-lg-3 mb-4">
                <div className={`${Styles.cardBtn2} p-3 rounded text-center`}>
                  GitHub Issues
                </div>
              </div>
              <div className="col-6 col-md-4 col-lg-3 mb-4">
                <div className={`${Styles.cardBtn2} p-3 rounded text-center`}>
                  Sentry
                </div>
              </div>
            </div>
          </div>

          <div className="py-5 text-center">
            <h2 className="display-4 mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className=" mb-5">
              Let’s discuss how our software solutions can drive your success.
            </p>
            <a
              href="/contact"
              className="btn blog-btn rn-btn px-5 h3 font-weight-bold"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
      {/* Start Back To Top */}
      <div className="backto-top">
        <ScrollToTop showUnder={160}>
          <FiChevronUp />
        </ScrollToTop>
      </div>
      {/* End Back To Top */}

      <div className="toggle-button">
        <Toggle isChecked={isDark} handleChange={() => setIsDark(!isDark)} />
      </div>

      <Footer />
    </div>
  );
};

export default SoftDev;
