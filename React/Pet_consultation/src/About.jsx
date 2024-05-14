import React from "react";
import HeroSection from "./Components/HeroSection";

const About = () =>{

    const data ={
        //para: "Welcome To",
        name: "Online Vet Clinic",
        image: "./images/hero3.svg",
        para: "Welcome To",
        heropara: "Lorem ipsum dolor sit amet. Sit quod deserunt ut saepe velit vel omnis enim quo consequatur aspernatur! 33 distinctio consequatur ea dolorem quisquam eos odio officiis eum dolorem rerum et quas corrupti qui beatae aliquid ut numquam quae.",
    };

    return <HeroSection {...data}  />;
};

export default About;