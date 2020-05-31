/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';

import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

import messages from './messages';

const EXCHANGE_RATES = gql`
  {
    ping
  }
`;

export default function HomePage() {
  const { loading, error, data } = useQuery(EXCHANGE_RATES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <>
      <h1>
        <FormattedMessage {...messages.header} />
      </h1>
      {data.ping}
    </>
  );
}
