"use client";

import styles from "./page.module.css";
import { useEffect, useState, useMemo } from "react";
import { ethers } from "ethers";
import styled from "styled-components";
import { ABI, CONTRACT_ADDRESS, EIP20ABI, NETWORK } from "./constants";
import Table from "./components/Table";
import BigNumber from "bignumber.js";

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

const tokenABI = [
  {
    constant: true,
    inputs: [],
    name: "name",
    outputs: [
      {
        name: "",
        type: "string",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
];

const getCoinName = async (provider, address) => {
  try {
    const contract = new ethers.Contract(address, tokenABI, provider);
    console.log(contract);
    const name = contract.name();
    return name;
  } catch (error) {
    console.log(error);
    return "";
  }
};

export default function Home() {
  const [markets, setMarkets] = useState([]);
  // const [provider, setProvider] = useState(() =>
  //   ethers.getDefaultProvider(NETWORK)
  // );

  useEffect(() => {
    const loadMarkets = async () => {
      const provider = ethers.getDefaultProvider(NETWORK); // Use your provider here
      const contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, provider);

      async function fetchData() {
        try {
          const result = await contract.allMarketSummaries(); // Replace with the actual function you want to call
          // const data = await Promise.all(
          //   result.slice(0, 1).map(async (item) => {
          //     let { market, asset } = item;
          //     const name = await getCoinName(provider, market);
          //     console.log(name, market);
          //     return { marketName: `${name}-perp`, asset };
          //   })
          // );
          console.log("Contract data:", result);
          // result.sort((a, b) => {
          //   return a.marketSize - b.marketSize;
          // });
          // const sortedResult = result.toSorted(
          //   (a, b) => a.marketSize - b.marketSize
          // );
          setMarkets(
            result.map((item) => {
              const { market, marketSize, price, feeRates } = item;
              const { takerFee, makerFee } = feeRates;
              return {
                market,
                marketSize: `$${new BigNumber(marketSize).toFormat(2)}`,
                price: `$${new BigNumber(price).toFormat(2)}`,
                markerTakerRatio: `${takerFee} / ${makerFee}`,
              };
            })
          );
        } catch (error) {
          console.error("Error fetching contract data:", error);
        }
      }
      fetchData();
    };

    loadMarkets();
  }, []);

  // const tableData = useMemo(() => {
  //   return markets.map(async (item) => {
  //     const { market, asset } = item;
  //     try {
  //       const name = await provider.resolveName(market);
  //       return { name, asset };
  //     } catch (error) {
  //       console.error("Error retrieving name:", error);
  //       return { name: "", asset };
  //     }
  //   });
  // }, [markets, provider]);

  return (
    <main className={styles.main}>
      <Container>
        <H1>Synthetix Perps Markets</H1>
        <Table data={markets} columns={columns} rowKey={"marketName"}></Table>
      </Container>
    </main>
  );
}
