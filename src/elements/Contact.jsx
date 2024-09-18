import React, { useContext, useState } from "react";
import PageHelmet from "../component/common/Helmet";
import ModalVideo from 'react-modal-video';
import { FiClock, FiUser, FiMessageCircle, FiHeart } from "react-icons/fi";
import { Link } from 'react-router-dom';
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import HeaderThree from "../component/header/HeaderThree";
import Footer from "../component/footer/Footer";
import { ThemeContext } from '../ThemeContext';
import Toggle from "../component/Toggle/Toggle";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Contact = () => {
    // static defaultProps = {
    //     center: {
    //         lat: 59.95,
    //         lng: 30.33
    //     },
    //     zoom: 11
    // };
     const { isDark, toggleTheme } = useContext(ThemeContext);


    return (
        <div className={isDark ? "active-dark" : "active-light"}>

            <PageHelmet pageTitle='Contact' />

            {/* Start Breadcrump Aresa */}
            <HeaderThree homeLink="/" logo="symbol-dark" color="color-dark" />


            {/* End Breadcrump Area */}






            {/* Start Back To Top */}
            <div className="backto-top">
                <ScrollToTop showUnder={160}>
                    <FiChevronUp />
                </ScrollToTop>
            </div>
            {/* End Back To Top */}

            <div className="toggle-button">

                <Toggle isChecked={isDark} handleChange={toggleTheme} />

            </div>

            <Footer />

        </div>
    )
}

export default Contact