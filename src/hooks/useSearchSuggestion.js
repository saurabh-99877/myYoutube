import { SearchSuggestion_API_URL } from "../utils/constants";
import { useEffect, useState } from "react";
import {useDispatch} from 'react-redux';
import { cachedResults } from "../utils/searchSlice";
import { useSelector } from "react-redux";

const useSearchSuggestion = (query) => {
  const [suggestions, setSuggestions] = useState([]);
  const dispatch = useDispatch();
  const cache = useSelector(store=> store.search);
 
  useEffect(() => {
  const timer = setTimeout(() => {
    if(cache[query]){
      setSuggestions(cachedResults[query]);
    } else {
      getSuggestion();
    }
  },200)
  return () => clearTimeout(timer);
  }, [query]);

  const getSuggestion = async () => {
    try{
    const data = await fetch(SearchSuggestion_API_URL + query);
    const json = await data.json();
    console.log(json[1]);
    setSuggestions(json[1]);
    dispatch(cachedResults({[query] : json[1]}))
    } catch (error) {
     console.log("error fetching", error);
    }
  }
  return suggestions;
};

export default useSearchSuggestion;