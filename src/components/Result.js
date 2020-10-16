import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Mark from 'mark.js';

const Container = styled.article`
  margin: 1em 0px;
`;

const Result = ({
  title,
  snippet,
  highlight,
}) => {
  const ref = useRef(null);
  useEffect(() => {
    if (!highlight) {
      return;
    }
    const mark = new Mark(ref.current);
    mark.mark(highlight);
    return () => {
      mark.unmark();
    }
  }, [highlight]);
  return (
    <Container ref={ref}>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: snippet }} />
    </Container>
  );
};

Result.propTypes = {
  title: PropTypes.string,
  snippet: PropTypes.string,
  highlight: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
};

Result.defaultProps = {
  highlight: false,
};

export default Result;
