import { SharedComponents } from '@clinica/shared-components'
import { Button } from '@mantine/core'
import { StyledExamplePages } from './example-page.styles'
import { useExampleQuery } from './example.graphql'
/* eslint-disable-next-line */
export interface ExamplePageProps {}

export function ExamplePage(props: ExamplePageProps) {
  const { data } = useExampleQuery()
  return (
    <StyledExamplePages>
      <h1>Welcome to ExamplePage!</h1>
      <SharedComponents />
      <pre>
        {JSON.stringify(data, null, 2)}
      </pre>
      <Button>
        Settings
      </Button>
    </StyledExamplePages>
  );
}

export default ExamplePage;
