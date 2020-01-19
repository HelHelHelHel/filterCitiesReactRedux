
export const fetchData = () => dispatch => {
    fetch('https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json')
      .then(res => res.json())
      .then(data =>
        dispatch({
          type: 'FETCH_DATA',
          payload: data
        })
      );
  };
  

  export const filterData = (wordToMatch) => ({
    type: 'FILTER_TEXT',
    payload: wordToMatch
  })
  