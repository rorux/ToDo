import { gql } from "@apollo/client";

export const CREATE_TASK = gql`
  mutation createTask($input: CreateTaskInput!) {
    createTask(input: $input) {
      name
    }
  }
`;

export const UPDATE_TASK = gql`
  mutation updateTask($input: UpdateTaskInput!) {
    updateTask(input: $input) {
      name
    }
  }
`;
