import * as React from 'react';
import { useMutation } from '@apollo/client';
import { HasuraInsertInput } from 'hasura';
import { CREATE_USER } from '../../shared/graphql';
import { User } from '../../shared/types';

type Props = {
  onSuccess: () => void
};

const UserCreate: React.FC<Props> = ({ onSuccess }) => {
  const [name, setName] = React.useState("");
  const [doCreate] = useMutation(CREATE_USER);

  const handleInput = (ev: React.FormEvent<HTMLInputElement>) => {
    setName(ev.currentTarget.value);
  };

  const handleClick = (ev: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    ev.preventDefault();
    
    if (!name) {
      return;
    }

    doCreate({
      variables: {
        objects: [{ name, deleted: false }]
      } as HasuraInsertInput<User>
    }).then(() => {
      onSuccess();
    }).catch((err) => {
      console.error('create user error:', err);
    });
  };

  return (
    <form>
      <div className="columns mb-2">
        <div className="column has-text-left is-4">
          <input type="text" className="input" placeholder="User name" onInput={handleInput} />
        </div>
        <div className="column is-1">
          <button className="button" onClick={handleClick}>Add</button>
        </div>
      </div>
    </form>
  );
}

export default UserCreate;
