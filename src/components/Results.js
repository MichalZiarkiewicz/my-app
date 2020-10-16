import React, { useContext } from 'react';
import styled from 'styled-components';
import AppContext from '../contexts/AppContext';
import Result from './Result';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const ResultCount = styled.p`
  text-align: right;
  
  span {
    font-weight: bold;  
  }
`;

const Results = () => {
  const { searchResults, highlight, highlightedText } = useContext(AppContext);
  if (!searchResults.query) {
    return null;
  }
  const { query: { search, searchinfo } } = searchResults;
  return (
    <Container>
      <ResultCount>Łącznie wyników: <span>{searchinfo.totalhits}</span></ResultCount>
      <hr />
      {search.map((result) => (
        <Result
          key={result.pageid}
          highlight={highlight && highlightedText}
          {...result}
        />
      ))}
    </Container>
  );
};

export default Results;
