import * as React from 'react';
import { useQuery } from '@apollo/client';
import { GET_ALL_USERS } from '../../shared/graphql';
import { User } from '../../shared/types';
import UserCreate from './Create';
import UserTable from './Table';
import Summary from './Summary';

type Props = {}
const UserSection: React.FC<Props> = () => {

  const { data, error, loading, refetch } = useQuery<{ users: User[] }>(GET_ALL_USERS);

  const handleCreateSuccess = () => {
    refetch();
  };

  const renderTable = () => {
    if (loading) {
      return (
        <div>loading...</div>
      )
    }

    if (error) {
      return (
        <div className="notification is-error">
          {error.message}
        </div>
      );
    }

    return (
      <UserTable data={data.users || []} />
    );
  }


  return (
    <div>
      <section className="section">
        <UserCreate onSuccess={handleCreateSuccess} />
        {renderTable()}
        <div className="columns">
          <div className="column is-half is-offset-half">
            <Summary />
          </div>
        </div>
      </section>
    </div>
  )
};

export default UserSection;
