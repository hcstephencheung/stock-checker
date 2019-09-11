import React from "react";
import StockChecker from "../../components/StockChecker/StockChecker";
import { getStocks, useFetchPriceFromSymbol } from "../../providers/StockListProvider";

const StockCheckerPage = props => {
    const { price, priceLoading } = useFetchPriceFromSymbol("aapl");
    return (
        <div className="stockCheckPage">
            {
                priceLoading ?
                    <h1>Loading...</h1> :
                    <p>Price for AAPL is {price}</p>
            }
        </div>
    )
}

export default StockCheckerPage;