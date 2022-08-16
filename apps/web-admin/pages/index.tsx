import { ExampleDocument, ExamplePage } from '@clinica/admin-pages'
import { addApolloState, initializeApollo } from '@clinica/web/utils'

export function Index() {
  return <ExamplePage />
}

export async function getServerSideProps() {
  const apolloClient = initializeApollo()
  await apolloClient.query({ query: ExampleDocument })

  return addApolloState(apolloClient, {
    props: {},
  })
}


export default Index
