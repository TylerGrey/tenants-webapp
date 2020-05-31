import React from 'react';
// import { FormattedMessage } from 'react-intl';

import AppBar from 'components/AppBar';

// import { useQuery } from '@apollo/react-hooks';
// import { gql } from 'apollo-boost';

// import messages from './messages';
import Map from '../../components/Map';

// const EXCHANGE_RATES = gql`
//   {
//     ping
//   }
// `;

export default function HomePage() {
  // const { loading, error, data } = useQuery(EXCHANGE_RATES);

  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error :(</p>;

  return (
    <>
      <AppBar />
      <Map />
    </>
    // <>
    //   <AppBar />
    //   <h1>
    //     <FormattedMessage {...messages.header} />
    //   </h1>
    //   {data.ping}
    // </>
  );
}
