import { createContext, useState } from 'react';

const AppContext = createContext({
  searchText: null,
  setSearchText: null,
  searchResults: null,
  setSearchResults: null,
  highlight: null,
  setHighlight: null,
  highlightedText: null,
  setHighlightedText: null,
});

const useInitContext = () => {
  const [searchText, setSearchText] = useState('');
  const [highlightedText, setHighlightedText] = useState('');
  const [highlight, setHighlight] = useState(false);
  const [searchResults, setSearchResults] = useState({
    query: {
      search: [],
      searchinfo: {
        totalhits: 0,
      },
    },
  });
  return {
    searchText,
    setSearchText,
    searchResults,
    setSearchResults,
    highlight,
    setHighlight,
    highlightedText,
    setHighlightedText,
  };
};

export default AppContext;
export {
  useInitContext,
};
