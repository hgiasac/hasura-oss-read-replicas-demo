import { gql } from "@apollo/client";

export const GET_ALL_USERS = gql`
query GetAllUsers {
  users(order_by: {id: desc}) {
    id
    name
    deleted
  }
}
`;

export const CREATE_USER = gql`
mutation CreateUser($objects: [users_insert_input!]!) {
  insert_users(objects: $objects) {
    affected_rows
  }
}
`;

export const WATCH_USER_COUNT = gql`
subscription WatchUserCount {
	users_aggregate {
    aggregate {
      count
    }
  }
}
`;
