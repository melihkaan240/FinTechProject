import React, { SyntheticEvent } from "react";
import "./DeletePortfolio.css";
interface Props {
    onPortfolioDelete: (e: SyntheticEvent) => void;
    portfolioValue: string;
};

const DeletePortfolio: React.FC<Props> = ({onPortfolioDelete,portfolioValue} : Props): JSX.Element => {
    return (
    <div>
        <form onSubmit={onPortfolioDelete}>
        <input hidden={true} value={portfolioValue}></input>
        <button>X</button>
        </form>
    </div>
    )
}

export default DeletePortfolio;