import React from "react";

type columnType = {
  title: string;
  key: string;
  width: string;
};

type dataType = {
  _id: number;
  [key: string]: any;
};

type TableProps = {
  data: dataType[];
  columns: columnType[];
};
export default function Table({
  data,
  columns,
}: TableProps): React.ReactElement {
  return (
    <>
      <table>
        <tbody>
          <>
            {!data.length && (
              <tr>
                <td colSpan={columns.length}>No Data Available</td>
              </tr>
            )}

            {!!data.length &&
              data.map((item) => (
                <tr key={item._id}>
                  {columns.map((column) => (
                    <td key={column.key} style={{ width: column.width }}>
                      {item[column.key]}
                    </td>
                  ))}
                </tr>
              ))}
          </>
        </tbody>
      </table>
    </>
  );
}
