import * as React from 'react';
import { generateUid } from '../../shared/utils';

type RenderProps<T = any> = {
  item: T
  key: string
};

type Props<T = any> = React.TableHTMLAttributes<HTMLTableElement> & {
  data: T[]
  render: (item: RenderProps<T>) => JSX.Element
};

const TableHeader: React.FC<{}> = () => (
  <thead>
    <tr>
      <th>ID</th>
      <th>Name</th>
    </tr>
  </thead>
);

function Table<T = any>({ data, render, ...props }: Props<T>): JSX.Element {

  return (
    <div className="table-container">
      <table className="table" {...props}>
        <TableHeader />
        <tbody>
          {data.map((item, index) => render({
            item,
            key: `${generateUid()}-${index}`
          }))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
