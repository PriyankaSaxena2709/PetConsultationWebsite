import React from "react";
import HeroSection from "./Components/HeroSection";
//import About from "./About";
//import Consult from "./Consult";


const Home = () =>{

    const data = {
        //para: "Need advice on your pets's health",
        name: "Online Vet Consultation aytime, anywhere.",
        image: "./images/about2.svg",
        para: "Need advice on your pet's health",
        heropara: "Get Best Veterinary Advice online from the comfort of your home",
    };
    return(
    <HeroSection {...data} /> 
);
};

export default Home;