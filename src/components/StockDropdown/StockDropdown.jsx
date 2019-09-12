import React from "react";
import * as styles from "./StockDropdown.css";
import Loading from "../Loading/Loading";

const StockDropdown = ({
    symbols = [],
    isLoading,
    handleChange,
    selectedSymbol
} = props) => (
    (isLoading || !symbols.length) ?
        <>
            <Loading lines={1} />
            <br />
            <Loading lines={2} />
        </> :
        <div className={styles.stockDropdown}>
            <select className={styles.stockSelector} onChange={handleChange} value={selectedSymbol}>
                { symbols.map(({ symbol }) => <option key={symbol} value={symbol}>{symbol}</option>) }
            </select>

            <h2>Symbol</h2>
            <p>{selectedSymbol}</p>
        </div>
);

export default StockDropdown;
