import React, { Fragment } from "react";
import DiffText from "../../components/DiffText/diffText"; 
import HeaderFake from "../../components/Header/headerFake";
import Footer from "../../components/Footer/footer";

const Error404 = () => {
    return (
        <Fragment>
            <HeaderFake/>
            <DiffText/>
            <Footer/>
        </Fragment>
)
}

export default Error404;