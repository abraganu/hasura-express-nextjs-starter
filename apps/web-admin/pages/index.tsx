import { SharedComponents } from '@clinica/shared-components';
import { ExamplePage, EXAMPLE_QUERY } from '@clinica/admin-pages';
import { addApolloState, initializeApollo } from '@clinica/web/utils';

export function Index() {
  return (
    <>
      <ExamplePage />
      <SharedComponents />
    </>
  );
}

export async function getServerSideProps() {
  const apolloClient = initializeApollo()
  await apolloClient.query({ query: EXAMPLE_QUERY })

  return addApolloState(apolloClient, {
    props: {},
  })
}


export default Index;
