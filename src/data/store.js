import { reactive } from "vue";

export const store = reactive({
  apiMoviesUrl: "https://api.themoviedb.org/3/search/movie",
  apiSeriesUrl: "https://api.themoviedb.org/3/search/tv",
  apiKey: "35c5825ba46ff651108055571b5face6",
  movieSearch: "",
});
