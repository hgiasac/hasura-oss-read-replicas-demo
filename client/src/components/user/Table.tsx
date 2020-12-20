import * as React from 'react';
import { User } from '../../shared/types';
import Table from '../general/Table';
import TableRow from '../general/TableRow';

type Props = {
  data: User[]
};

const UserTable: React.FC<Props> = ({ data }) => {

  return (
    <Table 
      className="table"
      style={{ width: '100%' }}
      data={data}
      render={({ item, ...props }) => (
        <TableRow {...props}>
          <td style={{ width: '5rem' }}>{item.id}</td>
          <td>{item.name}</td>
        </TableRow>
      )}
    />
  );
}

export default UserTable;
