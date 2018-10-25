import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import withApollo from '../lib/withApollo';

const MY_QUERY = gql`
  {
    hello
  }
`;

const Index = () => (
  <Query query={MY_QUERY}>
    {({ data }) => (
      <div>{ data.hello }</div>
    )}
  </Query>
);

export default withApollo(Index);
