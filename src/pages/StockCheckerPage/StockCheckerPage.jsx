import React, { useState } from "react";
import { useFetchCompanyDescription, useFetchStockSymbols, useFetchPriceFromSymbol } from "../../providers/StockListProvider";
import Price from "../../components/Price/Price";
import ContentBlock from "../../components/ContentBlock/ContentBlock";
import StockDropdown from "../../components/StockDropdown/StockDropdown";
import * as styles from "./StockCheckerPage.css";

const StockCheckerPage = () => {
    const [ symbol, setSymbol ] = useState("AAPL");
    const { price, priceLoading } = useFetchPriceFromSymbol(symbol);
    const { description, descriptionLoading } = useFetchCompanyDescription(symbol);
    const { symbols, symbolsLoading } = useFetchStockSymbols();

    const handleStockChange = e => setSymbol(e.target.value);

    return (
        <section className={styles.stockCheckerPage}>
            <StockDropdown isLoading={symbolsLoading} symbols={symbols} selectedSymbol={symbol} handleChange={handleStockChange} />
            <Price isLoading={priceLoading} title={"Current Stock Price"} price={price} currency={"USD"} />
            <ContentBlock isLoading={descriptionLoading} content={description} title={"Description"} />
        </section>
    )
}

export default StockCheckerPage;