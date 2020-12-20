import * as React from 'react';

type Props = React.HTMLAttributes<HTMLTableRowElement> & {
  key?: string
};

const TableRow: React.FC<Props> = ({ children, ...props }) =>  (
  <tr {...props}>
    {children}
  </tr>
);

export default TableRow;
