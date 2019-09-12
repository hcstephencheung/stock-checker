// Create Provider here for usability
import Configs from "../config/config";
import { useState, useEffect } from "react";

const hostname = Configs && Configs.dataSources && Configs.dataSources.iexcloud || '';
const secret = Configs && Configs.tokens && Configs.tokens.client_secret || '';

const fetchStockSymbols = async (setSymbols, setSymbolsLoading) => {
    const pathname = `/stable/stock/market/list/gainers`;
    const endpointUrl = new URL(pathname, hostname);
    endpointUrl.searchParams.set("token", secret);

    const response = await fetch(endpointUrl);
    const data = await response.json();
    setSymbols(data.map(stock => ({ symbol: stock.symbol, companyName: stock.companyName })));
    setSymbolsLoading(false);
};

export const useFetchStockSymbols = () => {
    const [symbols, setSymbols] = useState([]);
    const [symbolsLoading, setSymbolsLoading] = useState(true);

    useEffect(() => {
        fetchStockSymbols(setSymbols, setSymbolsLoading);
    }, []);

    return {symbols, symbolsLoading};
};

const fetchCompanyDescription = async (symbol, setDescription, setDescriptionLoading) => {
    const pathname = `/stable/stock/${symbol}/company`;
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
    const pathname = `/stable/stock/${symbol}/price`;
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
