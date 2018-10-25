import gql from 'graphql-tag';
import { Mutation, Query } from 'react-apollo';
import withApollo from '../lib/withApollo';

const MY_QUERY = gql`
  {
    goodbye
  }
`;

const Index = () => (
  <div>
    <Query query={MY_QUERY}>
      {({ data }) => (
        <div>{ data.goodbye }</div>
      )}
    </Query>
    <AddPhraseButton />
    <PhraseList />
  </div>
);

const ADD_PHRASE = gql`
  mutation {
    addPhrase(phrase: "from client") {
      text
    }
  }
`;

const AddPhraseButton = () => (
  <Mutation mutation={ADD_PHRASE}>
    {addPhrase => (
      <div>
        <button type="button" onClick={addPhrase}>Add Phrase</button>
      </div>
    )}
  </Mutation>
);

const PHRASES_QUERY = gql`
  {
    phrases {
      text
    }
  }
`;

const PhraseList = () => (
  <Query query={PHRASES_QUERY}>
    {({ data }) => {
      if (!data.phrases) return null;
      return (
        // eslint-disable-next-line react/no-array-index-key
        <div>{ data.phrases.map((phrase, i) => <div key={i}>{phrase.text}</div>)}</div>
      );
    }}
  </Query>
);

export default withApollo(Index);
