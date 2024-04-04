import { reactive } from 'vue';

export const store = reactive({
  mainTitle: 'Boolflix',
  apiUrl: 'https://api.themoviedb.org/3/search/',
  // apiUrlTvseries: 'https://api.themoviedb.org/3/search/tv',
  moviesList: [],
  tvseriesList: [],
  queryParams: {
    api_key: '4204f022f5bc44493e75ec0b0ddbf5cc',
    query: '',
    language: 'it-IT',
  },
})
