import React,{ Fragment}  from "react";
import Header from "../components/Header/header";
import Footer from "../components/Footer/footer";
import Hero from "../components/Hero/hero";
import useAuthentication from "../hooks/useAuthentication";
import Homecard from "./homeCard";
// import Sponsors from "../components/Sponsors/Sponsors"
// import heroContent from "../components/Hero/heroContent";


const HomePage = () => {
    const {getUserInfosFromSessionStorage}=useAuthentication();
    const userInfos = getUserInfosFromSessionStorage();
    return (
        <Fragment>

            <Header connected={userInfos ? true : false} role={userInfos?.role}/>
            {/* <Hero name={userInfos?.firstName} heroContent={heroContent.find((item)=> item.role === userInfos?.role)} /> */}
            <Hero  className="h-[80vh]"/>
            {userInfos && <Homecard/>}
            {/* {userInfos && <Sponsors />}  This will render Sponsors if userInfos exists */}
            <Footer />
        </Fragment>
    )
}

export default HomePage;