import React, { useState, useContext } from "react";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import Helmet from "../component/common/Helmet";
import TextLoop from "react-text-loop";
import HeaderThree from "../component/header/HeaderThree";
import Footer from "../component/footer/Footer";
import TabTwo from "../elements/tab/TabTwo";
import ContactThree from "../elements/contact/ContactThree";
import PortfolioList from "../elements/portfolio/PortfolioList";
import ServiceList from "../elements/service/ServiceList";

// import BlogContent from "../elements/blog/BlogContent";
// import MultiLang from '../component/MultiLang/MultiLang';

import Toggle from "../component/Toggle/Toggle";
import { useTranslation } from "react-i18next";
import { ThemeContext } from "../ThemeContext";
import MainContact from "../elements/MainContact";
import ContactFour from "../elements/contact/ContactFour";

// import { UsageState } from 'webpack'

const SlideList = [
  {
    textPosition: "text-left",
    category: "Trusted by over 400+ companies.",
    description: "",
    buttonText: "",
    buttonLink: "",
  },
];

const PortfolioLanding = () => {
  const { isDark, toggleTheme } = useContext(ThemeContext);

  const { t } = useTranslation();
  const BlogContent = [
    {
      images: "01",
      title: `${t("securty")}`,
      category: `${t("securty_message")}`,
      bloglink: "/navigating-global-trade",
    },
    {
      images: "02",
      title: `${t("management")}`,
      category: `${t("management_message")}`,
      bloglink: "/why-your-business-needs-custom-software",
    },

    {
      images: "03",
      title: `${t("design")}`,
      category: `${t("desing_message")}`,
      bloglink: "/boost-your-brand",
    },
  ];
  let title = "About Us";
  // description = `Welcome to our overseas recruitment company! We are a leading global HR recruitment company that specializes in connecting talented individuals with exciting job opportunities overseas. At our company, we understand the challenges and complexities of finding the right talent for international positions. That's why we are here to simplify the process and help both employers and job seekers navigate the global job market with ease.`;
  const PostList = BlogContent.slice(0, 3);

  // const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;

  return (
    <div className={isDark ? "active-dark" : "active-light"}>
      <Helmet pageTitle="PCOX Internet Pvt. Ltd." />

      <HeaderThree homeLink="/" logo="symbol-dark" color="color-black" />
      {/* Start Slider Area   */}

      <div id="home" className="fix">
        <div className="slider-wrapper">
          {/* Start Single Slide */}
          {SlideList.map((value, index) => (
            <div
              className="slide personal-portfolio-slider slider-paralax slider-style-3 d-flex align-items-center justify-content-center bg_image bg_image--25"
              key={index}
            >
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className={`inner ${value.textPosition}`}>
                      {value.category ? (
                        <span className="homePageHeroTitlesSpan title text-white">
                          {t("home_hero_sec_desc")}
                        </span>
                      ) : (
                        ""
                      )}
                      <h1 className="homePageHeroTitles title">
                        {t("home_hero_sec_title")} <br />
                        <TextLoop>
                          <span className="homePageLoopText">
                            {t("Software-Development")}
                          </span>
                          <span className="homePageLoopText">
                            {t("home_hero_sec_loop2")}
                          </span>
                          <span className="homePageLoopText">
                            {t("home_hero_sec_loop3_1")} <br />
                            {t("home_hero_sec_loop3_2")}
                          </span>
                        </TextLoop>
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* End Single Slide */}
        </div>
      </div>
      {/* End Slider Area   */}

      {/* <MultiLang /> */}

      {/* Start About Area */}
      <div id="about" className="fix">
        <div className="about-area ptb--120  bg_color--1">
          <div className="about-wrapper">
            <div className="container">
              <div className="row row--35 align-items-start">
                <div className="col-lg-6">
                  <div className="thumbnail">
                    <img
                      className="w-100"
                      src="/assets/images/about/about-8.jpg"
                      alt="About Images"
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="about-inner inner">
                    <div className="section-title">
                      <h2 className="title">{t("about_us")}</h2>
                      <p className="description">{t("about_desc_1")}</p>
                      <p className="description">{t("about_desc_2")}</p>
                    </div>
                    <div className="row mt--30">
                      <TabTwo tabStyle="tab-style--1" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* End About Area */}

      {/* Start Service Area  */}
      <div id="service" className="fix">
        <div className="service-area creative-service-wrapper ptb--120 bg_color--5">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title text-center service-style--3 mb--30 mb_sm--0">
                  <h2 className="title">{t("our_services")}</h2>
                  <p>{t("our_services_message")}</p>
                </div>
              </div>
            </div>
            <div className="row creative-service">
              <div className="col-lg-12">
                <ServiceList
                  item="6"
                  column="col-lg-4 col-md-6 col-sm-6 col-12 text-left"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Service Area  */}

      {/* Start Portfolio Area */}
      <div id="portfolio" className="fix">
        <div className="portfolio-area ptb--120 bg_color--1">
          <div className="portfolio-sacousel-inner">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="section-title text-center service-style--3 mb--30 mb_sm--0">
                    <h2 className="title">{t("industries_we_serve")}</h2>
                    <p>{t("industries_we_serve_message")}</p>
                  </div>
                </div>
              </div>
              <div className="row">
                <PortfolioList
                  styevariation="text-center mt--40"
                  column="col-lg-4 col-md-6 col-sm-6 col-12"
                  item="6"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Portfolio Area */}

      {/* Start Blog Area */}
      <div id="blog" className="fix">
        <div className="rn-blog-area ptb--120 bg_color--5 mb-dec--30">
          <div className="container">
            <div className="row align-items-end">
              <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="section-title text-center">
                  <h2>{t("latest_blog")}</h2>
                  <p>
                    {t("latest_blog_message_1")} <br />
                    {t("latest_blog_message_2")}
                  </p>
                </div>
              </div>
            </div>
            <div className="row mt--60 mt_sm--40 h-full">
              {PostList.map((value, i) => (
                <div className="col-lg-4 col-md-6 col-12" key={i}>
                  <div className="blog blog-style--1">
                    <div className="thumbnail">
                      <a href={`${value.bloglink}`}>
                        <img
                          className="w-100"
                          src={`/assets/images/blog/blog-${value.images}.jpg`}
                          alt="Blog Images"
                        />
                      </a>
                    </div>
                    <div className="content">
                      <p className="blogtype">{value.category}</p>
                      <h4 className="title">
                        <a href={`${value.bloglink}`}>{value.title}</a>
                      </h4>
                      <div className="blog-btn">
                        <a
                          className="rn-btn text-white"
                          href={`${value.bloglink}`}
                        >
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* End Blog Area */}

      {/* Start COntact Area */}
      <div id="contact" className="fix">
        <div className="rn-contact-area ptb--120 bg_color--1">
          <ContactFour />
        </div>
      </div>
      {/* End COntact Area */}

      <Footer />
      {/* Start Back To Top */}
      <div className="backto-top">
        <ScrollToTop showUnder={160}>
          <FiChevronUp />
        </ScrollToTop>
      </div>

      {/* End Back To Top */}

      {/* theme toggle start */}

      <div className="toggle-button">
        <Toggle isChecked={isDark} handleChange={toggleTheme} />
      </div>
    </div>
  );
};

export default PortfolioLanding;
