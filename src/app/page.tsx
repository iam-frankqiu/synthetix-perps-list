"use client";

import styles from "./page.module.css";
import { useEffect, useState } from "react";
import { ethers } from "ethers";
import styled from "styled-components";
import { ABI, CONTRACT_ADDRESS, NETWORK } from "./constants";
import Table from "./components/Table";
import {
  getCoinName,
  formatNumberToUsd,
  formatNumber,
  formatString,
} from "./utils";

const H1 = styled.h1`
  font-weight: 700;
  font-size: 15px;
  line-height: 17.25px;
  color: #ffffff;
  margin-bottom: 40px;
`;

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
`;

const columns = [
  { key: "marketName", title: "MARKET" },
  { key: "price", title: "PRICE" },
  {
    key: "marketSize",
    title: "MARKET SIZE",
  },
  {
    key: "markerTakerRatio",
    title: "MAKER/TAKER",
  },
];

export default function Home() {
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

  return (
    <main className={styles.main}>
      <Container>
        <H1>Synthetix Perps Markets</H1>
        <Table data={markets} columns={columns} rowKey={"marketName"}></Table>
      </Container>
    </main>
  );
}
