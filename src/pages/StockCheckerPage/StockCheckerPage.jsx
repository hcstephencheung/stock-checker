import React, { useState } from "react";
import StockChecker from "../../components/StockChecker/StockChecker";
import { useFetchCompanyDescription, useFetchPriceFromSymbol } from "../../providers/StockListProvider";

const StockCheckerPage = () => {
    const [ symbol, setSymbol ] = useState("aapl");
    const { price, priceLoading } = useFetchPriceFromSymbol(symbol);
    const { description, descriptionLoading } = useFetchCompanyDescription(symbol);
    return (
        <div className="stockCheckPage">
            <select onChange={e => setSymbol(e.target.value)}>
                <option selected value="aapl">Apple</option>
                <option value="bby">Best Buy</option>
                <option value="msft">Microsoft</option>
            </select>
            {
                priceLoading ?
                    <h1>Loading...</h1> :
                    <p>Price for {symbol} is {price}</p>
            }
            {
                descriptionLoading ?
                    <h1>Loading...what</h1> :
                    <div className="description">
                        <p>{description}</p>
                    </div>
            }
        </div>
    )
}

export default StockCheckerPage;