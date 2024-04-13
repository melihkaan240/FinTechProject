import React, { SyntheticEvent } from "react";
import "./HomePage.css";
import { CompanySearch } from "../../company";
import Hero from "../../Components/Hero/Hero";

interface Props {

};

const HomePage: React.FC<Props> = (props: Props) : JSX.Element=>{
    return (
      <div>
        <Hero />
      </div>
    )
}

export default HomePage;