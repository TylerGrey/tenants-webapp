import React from 'react';
import PropTypes from 'prop-types';

import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  uri: 'http://localhost:8080/query',
});

const GraphqlProvider = props => (
  <ApolloProvider client={client}>
    {React.Children.only(props.children)}
  </ApolloProvider>
);

GraphqlProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default GraphqlProvider;
