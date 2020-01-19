import { take } from 'ramda';

const initialState = {
  data: [],
  loading: false,
  places: [],
  filterText: ''

};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_DATA_START': {
      return {
        ...state,
        loading: true
      };
    }

    case 'FETCH_DATA_SUCCESS': {
      return {
        ...state,
        data: take(8, action.payload),
        loading: false,
        places: take(8, action.payload)
      };
    }

    case 'FILTER_TEXT': {
      const wordToMatch = action.payload
      return {
        ...state,
        places: state.data.filter(place => {
          return place.city.toLowerCase().includes(wordToMatch.toLowerCase()) || place.state.toLowerCase().includes(wordToMatch.toLowerCase())
        }),
        filterText: wordToMatch
      };
    }

    default: {
      return state;
    }
  }
};

export default reducer;
