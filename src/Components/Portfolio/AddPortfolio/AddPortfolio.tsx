import React, { SyntheticEvent } from "react";
import "./AddPortfolio.css";
interface Props {
    onPortfolioCreate:(e: SyntheticEvent)=>void;
    symbol: string;
};

const AddPortfolio: React.FC<Props> = ({onPortfolioCreate,symbol} : Props): JSX.Element => {
    return (
        <form onSubmit={onPortfolioCreate} action="">
            <input readOnly={true} hidden={true} value={symbol} type="text" />
            <button type="submit">Add</button>
        </form>
    )
}

export default AddPortfolio;