import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: calc(100vh - 64px);
  overflow-y: scroll;
`;

export default function ReviewContent({ bldgID }) {
  return (
    <Wrapper>
      <p>{bldgID}</p>
    </Wrapper>
  );
}

ReviewContent.propTypes = {
  bldgID: PropTypes.number,
};
