import * as React from 'react';
import { useSubscription } from '@apollo/client';
import { WATCH_USER_COUNT } from '../../shared/graphql';
import { User } from '../../shared/types';
import { HasuraAggregateResult } from 'hasura';

const Summary: React.FC<{}> = () => {

  const { data, error, loading } = useSubscription<{ 
    users_aggregate: HasuraAggregateResult<User> 
  }>(WATCH_USER_COUNT);

  return (
    <div className="columns">
      <div className="column">
        <strong>Count</strong>
      </div>
      <div className="column">
        {error && error.message}
        {loading && '...'}
        {data && data.users_aggregate.aggregate.count}
      </div>
    </div>
  );
};

export default Summary;
