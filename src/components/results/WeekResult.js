import React from 'react';

const WeekResult = () => {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th className="border-top-0" scope="col">
            Court
          </th>
          <th className="border-top-0" scope="col">
            Players
          </th>
          <th className="border-top-0" scope="col">
            Set 1
          </th>
          <th className="border-top-0" scope="col">
            Set 2
          </th>
          <th className="border-top-0" scope="col">
            Set 3
          </th>
          <th className="border-top-0" scope="col">
            Total
          </th>
        </tr>
      </thead>
      <tbody>
        {Array.from({ length: 6 }).map((v, i) => (
          <>
            <tr>
              <th rowSpan={5} scope="row" className="border-right">
                {i + 1}
              </th>
            </tr>
            <tr>
              <td>Ugur Akin</td>
              <td>3</td>
              <td>4</td>
              <td>5</td>
              <td>12</td>
            </tr>
            <tr>
              <td>Ugur Akin</td>
              <td>3</td>
              <td>4</td>
              <td>5</td>
              <td>12</td>
            </tr>
            <tr>
              <td>Ugur Akin</td>
              <td>3</td>
              <td>4</td>
              <td>5</td>
              <td>12</td>
            </tr>
            <tr>
              <td>Ugur Akin</td>
              <td>3</td>
              <td>4</td>
              <td>5</td>
              <td>12</td>
            </tr>
          </>
        ))}
      </tbody>
    </table>
  );
};

export default WeekResult;
