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
  const [markets, setMarkets] = useState([]);

  useEffect(() => {
    const loadMarkets = async () => {
      const provider = ethers.getDefaultProvider(NETWORK); // Use your provider here
      const contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, provider);

      async function fetchData() {
        try {
          const result = await contract.allMarketSummaries(); // Replace with the actual function you want to call
          setMarkets(
            result
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
                  marketSizeNumber: formatNumber(marketSize),
                };
              })
              .sort((a, b) => b.marketSizeNumber - a.marketSizeNumber)
          );
        } catch (error) {
          console.error("Error fetching contract data:", error);
        }
      }
      fetchData();
    };

    loadMarkets();
  }, []);

  return markets;
};
