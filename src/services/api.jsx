export default function fetchPopularMovies() {
  return fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=2c2119be3c72764fac5749d606e2540e`).then(response => {
    if (response.ok) {
      return response.json();
    }

    return Promise.reject();
  });
};

export function fetchSearchMovies(searchQuery) {
     return fetch(`https://api.themoviedb.org/3/search/movie?api_key=2c2119be3c72764fac5749d606e2540e&query=${searchQuery}`).then(response => {
    if (response.ok) {
      return response.json();
    }

    return Promise.reject();
  });
};

export function fetchMovieDetails(movieId) {
     return fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=2c2119be3c72764fac5749d606e2540e&language=en-US`).then(response => {
    if (response.ok) {
      return response.json();
    }

    return Promise.reject();
  });
};

export function fetchMovieCast(movieId) {
     return fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=2c2119be3c72764fac5749d606e2540e&language=en-US`).then(response => {
    if (response.ok) {
      return response.json();
    }

    return Promise.reject();
  });
};

export function fetchMovieReviews(movieId) {
     return fetch(`https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=2c2119be3c72764fac5749d606e2540e&language=en-US`).then(response => {
    if (response.ok) {
      return response.json();
    }

    return Promise.reject();
  });
};