import React, { Component } from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import MyList from './MyList';

class App extends Component {
  state = {
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
        id: '444',
      },
    ],
  };

  onClickMovieHandler = () => {
    //add movie to myList
    const myList = this.setState.myList;
    myList.push({
      name: 'topgunnew',
      actor: 'cruisenew',
      id: 'new',
    });
    this.setState({ myList: myList });
  };

  render() {
    return (
      <>
        <SearchBar />
        <MovieList
          movieList={this.state.movieList}
          onClickMovieHandler={this.onClickMovieHandler}
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
