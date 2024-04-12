import React from "react";
import "./CardList.css";
import Card from "../Card/Card";
import { CompanySearch } from "../../company";
import { v4 as uuidv4 } from "uuid";
interface Props {
    searchResults: CompanySearch[];
};

const CardList: React.FC<Props> = ({ searchResults }: Props): JSX.Element => {
    return (
        <>
            {searchResults.length > 0
                ?
                (searchResults.map((results) => {
                    return <Card id={results.symbol} key={uuidv4()} searchResult={results} />
                }))
                :
                <h1>No Results</h1>
            }</>
    )
}

export default CardList;