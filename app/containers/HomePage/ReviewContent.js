import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const GET_REVIEWS = gql`
  query Reviews(
    $bldgId: ID!
    $after: String
    $before: String
    $first: Int
    $last: Int
    $orderBy: ReviewOrder
  ) {
    reviews(
      bldgId: $bldgId
      after: $after
      before: $before
      first: $first
      last: $last
      orderBy: $orderBy
    ) {
      nodes {
        id
        title
        content
        totalScore
        score {
          rent
          maintenanceFees
          publicTransport
          convenience
          landlord
        }
        updatedAt
      }
    }
  }
`;

const Wrapper = styled.div`
  position: absolute;
  right: 0;
  z-index: 1000;
  background: white;
  width: 350px;
  height: calc(100vh - 64px);
  overflow-y: scroll;
`;

export default function ReviewContent({ bldg }) {
  let reviews = [];

  const { loading, error, data } = useQuery(GET_REVIEWS, {
    variables: {
      bldgId: bldg.id,
      first: 10,
    },
  });

  if (data && data.reviews) {
    reviews = [...data.reviews.nodes];
  }

  return (
    <Wrapper>
      {reviews.length ? (
        reviews.map(review => (
          <div>
            <p>{review.title}</p>
            <p>{review.content}</p>
          </div>
        ))
      ) : (
        <p>empty</p>
      )}
    </Wrapper>
  );
}

ReviewContent.propTypes = {
  bldg: PropTypes.object,
};
