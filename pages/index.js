import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import withApollo from '../lib/withApollo';

const MY_QUERY = gql`
  {
    goodbye
  }
`;

const Index = () => (
  <Query query={MY_QUERY}>
    {({ data }) => (
      <div>{ data.goodbye }</div>
    )}
  </Query>
);

export default withApollo(Index);
