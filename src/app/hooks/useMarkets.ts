import { useEffect, useState } from "react";
import { ABI, CONTRACT_ADDRESS, NETWORK } from "../constants";
import { ethers } from "ethers";
import {
  getCoinName,
  formatNumberToUsd,
  formatNumber,
  formatString,
} from "../utils";

export const useMarkets = () => {
  const [state, setState] = useState({
    data: [],
    isLoading: true,
  });

  useEffect(() => {
    const loadMarkets = async () => {
      const provider = ethers.getDefaultProvider(NETWORK);
      const contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, provider);

      async function fetchData() {
        try {
          const result = await contract.allMarketSummaries();
          setState({
            data: result
              .map((item) => {
                const { asset, marketSize, price, feeRates } = item;
                const { takerFee, makerFee } = feeRates;
                return {
                  marketName: getCoinName(asset),
                  marketSize: formatNumberToUsd(marketSize),
                  price: formatNumberToUsd(price),
                  markerTakerRatio: `${formatString(
                    takerFee
                  )}% / ${formatString(makerFee)}%`,
                  // It's defined for sorting.
                  marketSizeNumber: formatNumber(marketSize),
                };
              })
              .sort((a, b) => b.marketSizeNumber - a.marketSizeNumber),
            isLoading: false,
          });
        } catch (error) {
          setState({ data: [], isLoading: false });
          console.error("Error fetching contract data:", error);
        }
      }
      fetchData();
    };

    loadMarkets();
  }, []);

  return state;
};
