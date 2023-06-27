import React from "react";
import styled from "styled-components";
import { generatePrimaryKey } from "../utils";

type columnType = {
  title: string;
  key: string;
};

type dataType = {
  [key: string]: any;
};

type TableProps = {
  data: dataType[];
  columns: columnType[];
  rowKey: keyof dataType;
};

const DataTable = styled.table`
  color: #ffffff;
  width: 414px;
`;

const HeadTr = styled.tr`
  background: #212121;
  padding: 13px 20px;
  display: flex;
  justify-content: space-around;
  font-size: 10px;
  font-weight: 400;
`;

const Th = styled.th`
  flex: 1;
  text-align: left;
`;

const EmptyTd = styled.td`
  text-align: center;
  height: 45px;
  line-height: 45px;
`;

const Td = styled.td`
  text-align: left;
  height: 45px;
  line-height: 45px;
  flex: 1;
`;
//   background: #1a1a1a;

const BodyTr = styled.tr`
  background: #212121;
  display: flex;
  padding: 0 20px;
  justify-content: space-around;
  align-items: center;
  font-size: 10px;
  font-weight: 400;
`;

export default function Table({
  data,
  columns,
  rowKey,
}: TableProps): React.ReactElement {
  return (
    <>
      <DataTable>
        <thead>
          <HeadTr>
            {columns.map((item) => (
              <Th key={item.key}>{item.title}</Th>
            ))}
          </HeadTr>
        </thead>
        <tbody>
          <>
            {!data.length && (
              <BodyTr>
                <EmptyTd colSpan={columns.length}>No Data Available</EmptyTd>
              </BodyTr>
            )}

            {!!data.length &&
              data.map((item) => (
                <BodyTr key={generatePrimaryKey(item)}>
                  {columns.map((column) => (
                    <Td key={column.key}>{item[column.key]}</Td>
                  ))}
                </BodyTr>
              ))}
          </>
        </tbody>
      </DataTable>
    </>
  );
}
