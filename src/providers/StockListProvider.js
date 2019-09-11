// Create Provider here for usability
import Configs from "../config/config";
import { useState, useEffect } from "react";

// not the most ideal...
const hostname = Configs.dataSources.iexcloud;
const secret = Configs.tokens.client_secret;

export const getStocks = () => {
    return ['abc', 'def'];
};

export const fetchCompanyDescriptoin = async symbol => {
    const pathname = `stable/stock/${symbol}/company`;
    const endpointUrl = new URL(pathname, hostname);
    endpointUrl.searchParams.set("token", secret);

    try {
        const response = await axios.get(endpointUrl);
        const { description } = await response.data;

        return description;
    } catch (e) {
        console.log(e);
        return;
    }
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
    }, []);

    return {price, priceLoading};
};
