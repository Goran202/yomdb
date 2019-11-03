import React, { Component } from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import MyList from './MyList';
import openMovieDatabase from '../apis/openMovieDatabase';

class App extends Component {
  state = {
    value: 'man',
    movieList: [
      {
        name: 'topgun1',
        actor: 'cruise1',
        id: '1',
      },
      {
        name: 'topgun2',
        actor: 'cruise2',
        id: '2',
      },
      {
        name: 'topgun3',
        actor: 'cruise3',
        id: '3',
      },
      {
        name: 'topgun4',
        actor: 'cruise4',
        id: '4',
      },
    ],
    myList: [
      {
        name: 'initial movie',
        actor: 'a martinez',
        imdbID: '444',
      },
    ],
  };

  // componentDidMount() {
  //   const phrase = '?apikey=320de091' + '&s=' + 'superman';
  //   const response = openMovieDatabase
  //     .get(phrase)
  //     .then((response) => {
  //       console.log(response);
  //       this.setState({ movieList: response.data.Search });
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }

  addMovieHandler = (movie) => {
    const myList = this.state.myList;
    myList.push(movie);
    this.setState({ myList: myList });
    localStorage.setItem('myListLocal', this.state.value);
  };

  removeMovieHandler = (movie) => {
    let myList = this.state.myList;
    myList = myList.filter((movie_arg) => movie_arg.imdbID !== movie.imdbID);
    this.setState({ myList: myList });
    localStorage.setItem('myListLocal', this.state.value);
  };

  onClickMovieHandler = (movie, type) => {
    if (type === 'movieList') {
      this.addMovieHandler(movie);
    } else if (type === 'myList') {
      this.removeMovieHandler(movie);
    }
  };

  checkIfMovieIsInMyList = (imdbID) => {
    let added = false;
    this.state.myList.forEach((movie_myList) => {
      if (imdbID === movie_myList.imdbID) {
        added = true;
      }
    });
    return added;
  };

  onClickSearchBarHandler = (e) => {
    e.preventDefault();
    console.log(this.state.value);

    //const phrase = '?=' + '&s=' + 'batman';
    const phrase = '?=' + '&s=' + this.state.value;
    const response = openMovieDatabase
      .get(phrase)
      .then((response) => {
        console.log(response);
        this.setState({ movieList: response.data.Search });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  handleSearchBarChange = (e) => {
    e.preventDefault();
    this.setState({ value: e.target.value });
  };

  render() {
    return (
      <>
        <SearchBar
          onClickSearchBarHandler={this.onClickSearchBarHandler}
          handleSearchBarChange={this.handleSearchBarChange}
          stateValue={this.state.value}
        />
        <MovieList
          movieList={this.state.movieList}
          onClickMovieHandler={this.onClickMovieHandler}
          checkIfMovieIsInMyList={this.checkIfMovieIsInMyList}
        />
        <MyList
          myList={this.state.myList}
          onClickMovieHandler={this.onClickMovieHandler}
        />
      </>
    );
  }
}

export default App;
