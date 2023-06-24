"use client";

import styles from "./page.module.css";
import { useEffect, useState } from "react";
import { ethers } from "ethers";
import styled from "styled-components";
import { ABT, CONTRACT_ADDRESS, NETWORK } from "./constants";
import Table from "./components/Table";

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
`;

export default function Home() {
  const [markets, setMarkets] = useState([]);

  useEffect(() => {
    const loadMarkets = async () => {
      const provider = ethers.getDefaultProvider(NETWORK); // Use your provider here
      const contract = new ethers.Contract(CONTRACT_ADDRESS, ABT, provider);

      async function fetchData() {
        try {
          const result = await contract.allMarketSummaries(); // Replace with the actual function you want to call
          console.log("Contract data:", result);
          setMarkets(result);
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
        <h1>Synthetix Perps Markets</h1>
          <Table data={markets} columns={[]}></Table>
      </Container>
    </main>
  );
}
