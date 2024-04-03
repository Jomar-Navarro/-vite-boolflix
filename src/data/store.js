import { reactive } from 'vue';

export const store = reactive({
  mainTitle: 'Boolflix',
  apiUrl: 'https://api.themoviedb.org/3/search/movie',
  moviesList: [],
  queryparams: {
    api_key: '4204f022f5bc44493e75ec0b0ddbf5cc',
    query: '',
    language: '',
  },
})
