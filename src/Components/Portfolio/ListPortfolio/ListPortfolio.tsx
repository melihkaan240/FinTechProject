import React, { SyntheticEvent } from "react";
import "./ListPortfolio.css";
import CardPortfolio from "../CardPortfolio/CardPortfolio";
interface Props {
    portfolioValues: string[];
    onPortfolioDelete: (e: SyntheticEvent) => void;
};

const ListPortfolio: React.FC<Props> = ({portfolioValues, onPortfolioDelete} : Props): JSX.Element => {
    return (
     <>
     <h3>My Portfolio</h3>
     <ul>
        {portfolioValues &&
        portfolioValues.map((portfolioValue)=>{
            return <CardPortfolio portfolioValue={portfolioValue} onPortfolioDelete={onPortfolioDelete}/>;
        })}
     </ul>
     </>
    )
}

export default ListPortfolio;