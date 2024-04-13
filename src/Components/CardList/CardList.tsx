import React, { SyntheticEvent } from "react";
import "./CardList.css";
import Card from "../Card/Card";
import { CompanySearch } from "../../company";
import { v4 as uuidv4 } from "uuid";
interface Props {
    searchResults: CompanySearch[];
    onPortfolioCreate: (e: SyntheticEvent)=> void;
};

const CardList: React.FC<Props> = ({ onPortfolioCreate,searchResults }: Props): JSX.Element => {
    return (
        <>
            {searchResults.length > 0
                ?
                (searchResults.map((results) => {
                    return <Card id={results.symbol} key={uuidv4()} searchResult={results} onPortfolioCreate={onPortfolioCreate}/>
                }))
                :
                <h1>No Results</h1>
            }</>
    )
}

export default CardList;