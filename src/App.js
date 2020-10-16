import React, { useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { debounce } from 'throttle-debounce';

import AppContext, { useInitContext } from './contexts/AppContext';
import SearchBox from './components/SearchBox';
import {apiService} from './services/apiService';
import Results from './components/Results';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0 auto;
`;

const App = () => {
  const contextValue = useInitContext();
  const onChange = useCallback(
    debounce(500, false, (query) => {
      if (!query) {
        return;
      }
      apiService.search(query).then(results => contextValue.setSearchResults(results))
    }),
    [],
  );
  useEffect(() => {
    onChange(contextValue.searchText);
  }, [contextValue.searchText, onChange]);
  return (
    <AppContext.Provider value={contextValue}>
      <Container>
        <SearchBox/>
        <Results />
      </Container>
    </AppContext.Provider>
  );
};

export default App;
