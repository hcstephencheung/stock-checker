import React from "react";
import Skeleton from "react-loading-skeleton";

const Loading = ({
    lines
} = props) => (
    // Add custom styles if necessary
    <Skeleton count={lines} duration={1.5} />
);

export default Loading;
