import React from "react";
import * as styles from "./ContentBlock.css";
import Loading from "../Loading/Loading";

const ContentBlock = ({
    title,
    isLoading,
    content
} = props) => (
    <div className={styles.contentBlock}>
        <h2>{title}</h2>
        {
            isLoading ?
                <Loading lines={3} /> :
                <p>{content}</p>
        }
    </div>
);

export default ContentBlock;