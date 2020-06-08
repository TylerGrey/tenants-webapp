import gql from 'graphql-tag';

export const SEARCH = gql`
  query Search($query: String!) {
    search(query: $query) {
      name
      address
      roadAddress
      zoneNo
      lat
      lng
    }
  }
`;
