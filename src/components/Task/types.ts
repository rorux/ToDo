import { OperationVariables, ApolloQueryResult } from "@apollo/client";
import { TTask } from "../../screens/Tasks/types";

export type TTaskProps = {
  task: TTask;
  refetch: (
    variables?: Partial<OperationVariables> | undefined
  ) => Promise<ApolloQueryResult<any>>;
};
