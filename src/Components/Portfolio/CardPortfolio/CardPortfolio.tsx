import React, { SyntheticEvent } from "react";
import "./CardPortfolio.css";
interface Props {
    portfolioValue: string;
};

const CardPortfolio: React.FC<Props> = ({portfolioValue} : Props): JSX.Element => {
    return (
     <>
     <h4>{portfolioValue}</h4>
     <button>X</button>
     </>
    )
}

export default CardPortfolio;