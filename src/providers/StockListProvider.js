// Create Provider here for usability
import Configs from "../config/config";
import { useState, useEffect } from "react";

// not the most ideal...
const hostname = Configs.dataSources.iexcloud;
const secret = Configs.tokens.client_secret;

export const getStocks = () => {
    return ['abc', 'def'];
};

const fetchCompanyDescription = async (symbol, setDescription, setDescriptionLoading) => {
    const pathname = `stable/stock/${symbol}/company`;
    const endpointUrl = new URL(pathname, hostname);
    endpointUrl.searchParams.set("token", secret);

    const response = await fetch(endpointUrl);
    const data = await response.json();
    const { description } = data;
    setDescription(description);
    setDescriptionLoading(false);
};

export const useFetchCompanyDescription = symbol => {
    const [description, setDescription] = useState(null);
    const [descriptionLoading, setDescriptionLoading] = useState(true);

    useEffect(() => {
        fetchCompanyDescription(symbol, setDescription, setDescriptionLoading);
    }, [symbol]);

    return {description, descriptionLoading};
};

const fetchPriceFromSymbol = async (symbol, setPrice, setPriceLoading) => {
    const pathname = `stable/stock/${symbol}/price`;
    const endpointUrl = new URL(pathname, hostname);
    endpointUrl.searchParams.set("token", secret);

    const response = await fetch(endpointUrl);
    const price = await response.json();

    setPrice(price);
    setPriceLoading(false);
}

export const useFetchPriceFromSymbol = symbol => {
    const [price, setPrice] = useState(null);
    const [priceLoading, setPriceLoading] = useState(true);

    useEffect(() => {
        fetchPriceFromSymbol(symbol, setPrice, setPriceLoading);
    }, [symbol]);

    return {price, priceLoading};
};
