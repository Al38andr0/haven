// noinspection JSCheckFunctionSignatures

import { useState, useEffect } from 'react'
import './style.scss';
import Search from './components/Search/Search'
import Loader from './components/Loader/Loader'
import GiphyContainer from './components/GiphyContainer/GiphyContainer'
import Header from "./components/Header/Header";

function App() {
  const [pageData, setPageData] = useState(
    {
      collection: [],
      query: '',
      isLoading: false,
      error: false
    })

  const handleErrors = response => {
    if (!response.ok) {
      throw Error(response.status);
    }
    return response.json();
  }

  useEffect( () => {
    const {
      REACT_APP_API_KEY: apiKey,
      REACT_APP_LIMIT: limit,
      REACT_APP_RATING: rating,
      REACT_APP_LANGUAGE: language,
      REACT_APP_OFFSET: offset,
      REACT_APP_SEARCH_URL: baseUrl,
      REACT_APP_TRENDIG_URL: trendingUrl,
      REACT_APP_IS_SHUFFLED : isShuffled
    } = process.env
    const url = `${pageData.query ? baseUrl : trendingUrl}?api_key=${apiKey}&q=${pageData.query}&limit=${limit}&offset=${offset}&rating=${rating}&lang=${language}`

    setPageData(prevData => ({
      ...prevData,
      isLoading: true,
      error: false
    }))
    fetch(url)
      .then(handleErrors)
      .then(response => {
        setPageData(prevData => ({
          ...prevData,
          isLoading: false,
          collection: JSON.parse(isShuffled) ? response.data.sort(() => Math.random() - 0.5) : response.data
        }))
      })
      .catch((error) => {
        console.log(error)
        setPageData(prevData => ({
          ...prevData,
          isLoading: false,
          error: true,
          collection: []
        }))
      })
  }, [pageData.query])

  const handleChange = event => setPageData(prevData => ({
    ...prevData,
    query: event.target.value
  }))

  return (
    <>
      <Header/>
      <div id="main-container">
        <Search
          changeEvent={handleChange}
          query={pageData.query}
        />
        {
          pageData.isLoading ?
            <Loader/> :
            <GiphyContainer
              collection={pageData.collection}
              error={pageData.error}
            />
        }
      </div>
    </>
  )
}

export default App;
