import { gql, useQuery } from '@apollo/client';
import { StyledExamplePages } from './example-page.styles';

export const EXAMPLE_QUERY = gql`
  query ExampleQuery {
    example {
      id
      test_text
    }
  }
`
/* eslint-disable-next-line */
export interface ExamplePageProps {}

export function ExamplePage(props: ExamplePageProps) {
  const { data } = useQuery(EXAMPLE_QUERY)

  return (
    <StyledExamplePages>
      <h1>Welcome to ExamplePage!</h1>
      <pre>
        {JSON.stringify(data, null, 2)}
      </pre>
    </StyledExamplePages>
  );
}

export default ExamplePage;
