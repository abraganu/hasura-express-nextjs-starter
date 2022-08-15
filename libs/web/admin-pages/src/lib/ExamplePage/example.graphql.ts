import * as Types from '@clinica/generated';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type ExampleQueryVariables = Types.Exact<{ [key: string]: never }>;

export type ExampleQuery = {
  __typename?: 'query_root';
  example: Array<{ __typename?: 'example'; id: string; test_text: string }>;
};

export const ExampleDocument = /*#__PURE__*/ gql`
  query Example {
    example {
      id
      test_text
    }
  }
`;
export function useExampleQuery(
  baseOptions?: Apollo.QueryHookOptions<ExampleQuery, ExampleQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<ExampleQuery, ExampleQueryVariables>(
    ExampleDocument,
    options
  );
}
export function useExampleLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<ExampleQuery, ExampleQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<ExampleQuery, ExampleQueryVariables>(
    ExampleDocument,
    options
  );
}
export type ExampleQueryHookResult = ReturnType<typeof useExampleQuery>;
export type ExampleLazyQueryHookResult = ReturnType<typeof useExampleLazyQuery>;
export type ExampleQueryResult = Apollo.QueryResult<
  ExampleQuery,
  ExampleQueryVariables
>;
