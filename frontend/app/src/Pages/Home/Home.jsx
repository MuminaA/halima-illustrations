import React from "react";
import Hero from "../../Components/Hero/Hero";
import Featured from "../../Components/Featured/Featured";
import Aboutme from "../../Components/Aboutme/Aboutme";

const Home = () => {
  return (
    <div>
        <Hero className="mb-[6rem]" />
        <Featured className="mb-[6rem]" type="featured" />
        <Aboutme className="mb-[6rem]" />
    </div>
  );
};
export default Home;
