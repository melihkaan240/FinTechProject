import React from "react";
import "./Card.css";
import { CompanySearch } from "../../company";

interface Props {
    id: string;
    searchResult: CompanySearch
};

const Card: React.FC<Props> = ({id,searchResult}: Props) : JSX.Element=>{
    return (
        <div className="card" key={id}>
            <img 
            src="https://cdn.artphotolimited.com/images/5b9fc1ecac06024957be8806/1000x1000/le-titanic-quittant-belfast.jpg"
             alt="company logo"
              />
            <div className="details">
                <h2>{searchResult.name} ({searchResult.symbol})</h2>
                <p>{searchResult.currency}</p>
            </div>
            <p className="info">{searchResult.exchangeShortName} - {searchResult.stockExchange} </p>
        </div>
    )
}

export default Card;