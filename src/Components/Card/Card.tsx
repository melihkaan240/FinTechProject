import React from "react";
import "./Card.css";

interface Props {
    companyName: string;
    ticker: string;
    price: number;
};

const Card: React.FC<Props> = ({companyName,ticker,price}: Props) : JSX.Element=>{
    return (
        <div className="card">
            <img 
            src="https://cdn.artphotolimited.com/images/5b9fc1ecac06024957be8806/1000x1000/le-titanic-quittant-belfast.jpg"
             alt="image"
              />
            <div className="details">
                <h2>{companyName} ({ticker})</h2>
                <p>${price}</p>
            </div>
            <p className="infon">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, cum.</p>
        </div>
    )
}

export default Card;