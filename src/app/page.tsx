"use client";

import styles from "./page.module.css";
import styled from "styled-components";
import Table from "./components/Table";
import { useMarkets } from "./hooks/useMarkets";
import { COLUMNS } from "./constants";

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

export default function Home() {
  const {data: markets, isLoading} = useMarkets();

  return (
    <main className={styles.main}>
      <Container>
        <H1>Synthetix Perps Markets</H1>
        <Table data={markets} columns={COLUMNS} isLoading={isLoading}></Table>
      </Container>
    </main>
  );
}
