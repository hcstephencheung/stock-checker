import React from "react";
import * as styles from "./Price.css";
import Loading from "../Loading/Loading";

const Price = ({
    title,
    isLoading,
    price,
    currency
} = props) => (
    <div className={styles.price}>
        <h2>{title}</h2>
        {
            isLoading ?
                <Loading lines={1} /> :
                <p>{`${price} ${currency}`}</p>
        }
    </div>
);

export default Price;
