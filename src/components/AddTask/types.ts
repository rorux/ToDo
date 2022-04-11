import { OperationVariables, ApolloQueryResult } from "@apollo/client";

export type TPropsAddTask = {
  refetch: (
    variables?: Partial<OperationVariables> | undefined
  ) => Promise<ApolloQueryResult<any>>;
};
