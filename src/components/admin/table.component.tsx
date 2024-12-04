import React from "react";

interface TableProps {
  headers: string[];
  data: Array<{ [key: string]: string | number }>;
}

const Table: React.FC<TableProps> = ({ headers, data }) => {
  return (
    <div className="table-responsive">
      <table className="table table-striped">
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              {headers.map((header, idx) => (
                <td key={idx}>{row[header]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
