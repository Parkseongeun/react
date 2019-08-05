import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

// const movieTitle = [
//   'Oldboy',
//   'Starwars',
//   'Avengers'
// ]
// const movieImage = [
//   'https://m.media-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_UX182_CR0,0,182,268_AL_.jpg',
//   'http://moonhak.co.kr/home/wp-content/uploads/bookcover/%EC%8A%A4%ED%83%80%EC%9B%8C%EC%A6%88-%EC%94%A8%EB%84%A4%EC%95%84%ED%8A%B84_%ED%91%9C1_web.jpg',
//   'https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwjny6SMzfTfAhUDi7wKHSgjB2QQjRx6BAgBEAU&url=https%3A%2F%2Fko.wikipedia.org%2Fwiki%2F%25EC%2596%25B4%25EB%25B2%25A4%25EC%25A0%25B8%25EC%258A%25A4%3A_%25EC%259D%25B8%25ED%2594%25BC%25EB%258B%2588%25ED%258B%25B0_%25EC%259B%258C&psig=AOvVaw0c81PU9Tj6f2PrtmBCVqWC&ust=1547805226648490'
// ]

class App extends Component {

  state = {
    //update: 'Update!!'
  }

  componentDidMount(){
    this._getMovies();
  }

  _renderMovies = () => {
    const movies = this.state.movies.map((movie) =>{
        console.log(movie)
        return <Movie 
          title={movie.title} 
          poster={movie.large_cover_image} 
          key={movie.id} 
          genres={movie.genres} 
          synopsis={movie.synopsis}
        />
      })
      return movies
  }

  _getMovies = async () => {
    const movies = await this._callApi()
    this.setState({
      movies
    })
  }

  _callApi = () => {
    return fetch('http://yts.lt/api/v2/list_movies.json?sort_by=rating')
      .then(potato => potato.json())
      .then(json => json.data.movies)
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App">
          {this.state.movies ? this._renderMovies() : 'Loading'}
      </div>
    );
  }
}

export default App;
