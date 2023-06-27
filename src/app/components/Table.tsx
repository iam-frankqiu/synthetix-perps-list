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
  isLoading: boolean,
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
  font-size: 12px;
`;

const Td = styled.td`
  text-align: left;
  height: 45px;
  line-height: 45px;
  flex: 1;
  font-weight: ${(props) => (props.isFirst ? 700 : 400)};
  color: ${(props) => (props.isFirst ? "#FFFFFF" : "#CACACA")};
  font-size: 12px;
`;
//   background: #1a1a1a;

const BodyTr = styled.tr`
  background: ${(props) => (props.isEven ? "#212121" : "#1A1A1A")};
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
  isLoading
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
                <EmptyTd colSpan={columns.length}>{isLoading ? 'Loading...': 'No Data Available'}</EmptyTd>
              </BodyTr>
            )}

            {!!data.length &&
              data.map((item, dataIndex) => (
                <BodyTr
                  key={generatePrimaryKey(item)}
                  isEven={dataIndex % 2 === 0}
                >
                  {columns.map((column, index) => (
                    <Td key={column.key} isFirst={index === 0}>
                      {item[column.key]}
                    </Td>
                  ))}
                </BodyTr>
              ))}
          </>
        </tbody>
      </DataTable>
    </>
  );
}
