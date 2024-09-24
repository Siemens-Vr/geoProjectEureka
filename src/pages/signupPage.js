import React,{ Fragment }  from "react";
import SignupForm from "../components/SignupForm/signupForm";
import TitleFade from "../components/TitleFade/titleFade";
import Header from "../components/Header/headerFake";
import Footer from "../components/Footer/footer";

const SignupPage = () => {
    return (
        <Fragment>
            <Header/>
            <div className="sm:w-page m-auto pb-10 pt-4">
                <TitleFade title="Create your account"/>
                <SignupForm/>
            </div>
            <Footer/>
        </Fragment>
    )
}

export default SignupPage;