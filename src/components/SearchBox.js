import styled from 'styled-components';
import React, { useContext } from 'react';

import Input from './Input';
import AppContext from '../contexts/AppContext';

const Container = styled.div`
  width: 100%;
  margin: 2em 0px;
  
  input {
    margin-bottom: 5px;
  }
`;

const SearchBox = () => {
  const {
    searchText,
    setSearchText,
    highlightedText,
    setHighlightedText,
    setHighlight,
    highlight,
  } = useContext(AppContext);
  return (
    <Container>
      <Input
        placeholder="Tekst szukaj"
        value={searchText}
        onChange={setSearchText}
      />
      <Input
        placeholder="Tekst podświetlenia"
        value={highlightedText}
        onChange={setHighlightedText}
      />
      <button onClick={() => setHighlight(!highlight)}>
        {highlight ? 'Odznacz' : 'Podświetl'} wszystkie
      </button>
    </Container>
  );
};

export default SearchBox;
