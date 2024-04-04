import { reactive } from 'vue';

export const store = reactive({
  mainTitle: 'Boolflix',
  apiUrl: 'https://api.themoviedb.org/3/search/',
  apiPopular: 'https://api.themoviedb.org/3/movie/popular',
  moviesList: [],
  tvseriesList: [],
  popularList: [],
  queryParams: {
    api_key: '4204f022f5bc44493e75ec0b0ddbf5cc',
    query: '',
    language: 'it-IT',
  },
})
