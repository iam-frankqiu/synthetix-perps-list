import React from "react";
import styled from "styled-components";

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

const Tr = styled.tr`
  background: #212121;
  padding: 13px 0;
  display: flex;
  justify-content: space-around;
  font-size: 10px;
  font-weight: 400;
`;

const Td = styled.td`
  text-align: center;
  height: 45px;
  background: #1a1a1a;
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
          <Tr>
            {columns.map((item) => (
              <th key={item.key}>{item.title}</th>
            ))}
          </Tr>
        </thead>
        <tbody>
          <>
            {!data.length && (
              <tr>
                <Td colSpan={columns.length}>No Data Available</Td>
              </tr>
            )}

            {!!data.length &&
              data.map((item) => (
                <Tr key={item[rowKey]}>
                  {columns.map((column) => (
                    <Td key={column.key}>{item[column.key]}</Td>
                  ))}
                </Tr>
              ))}
          </>
        </tbody>
      </DataTable>
    </>
  );
}
