import React, { Component } from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import MyList from './MyList';
import openMovieDatabase from '../apis/openMovieDatabase';
import apikey from '../apis/apikey';

class App extends Component {
  state = {
    value: 'tree',
    movieList: [],
    myList: [],
  };

  componentDidMount() {
    const local = localStorage.getItem('myListLocal');
    if (local) {
      const localJSON = JSON.parse(local);
      this.setState({
        myList: localJSON,
      });
    }
  }

  addMovieHandler = (movie) => {
    movie.timeAdded = new Date();
    movie.watched = false;
    const myList = this.state.myList;
    myList.push(movie);
    this.setState({ myList: myList }, () => {
      localStorage.setItem('myListLocal', JSON.stringify(myList));
    });
  };

  updateMovieHandler = () => {
    const myList = this.state.myList;
    this.setState({ myList: myList }, () => {
      localStorage.setItem('myListLocal', JSON.stringify(myList));
    });
  };

  removeMovieHandler = (movie) => {
    let myList = this.state.myList;
    myList = myList.filter((movie_arg) => movie_arg.imdbID !== movie.imdbID);
    this.setState({ myList: myList }, () => {
      localStorage.setItem('myListLocal', JSON.stringify(myList));
    });
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
    const phrase = '?apikey=' + apikey + '&s=' + this.state.value;
    console.log(apikey);
    openMovieDatabase
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

  onCheckBoxChangeHandler = (imdbID_arg) => {
    let helperState = { ...this.state };
    helperState.myList.find(
      (movie) => movie.imdbID === imdbID_arg
    ).watched = !helperState.myList.find((movie) => movie.imdbID === imdbID_arg).watched;
    this.setState(helperState);
    this.updateMovieHandler();
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
          onCheckBoxChangeHandler={this.onCheckBoxChangeHandler}
        />
      </>
    );
  }
}

export default App;
