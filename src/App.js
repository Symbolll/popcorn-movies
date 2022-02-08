import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import './components/Card.css';
import SideBar from './components/SideBar';
import Search from './components/Search';
import ActionMovies from './categories/ActionMovies';
import ScaryMovie from './categories/ScaryMovie';
import DramaMovies from './categories/DramaMovies';
import FantasticMovies from './categories/FantasticMovies';
import FamilyMovies from './categories/FamilyMovies';
import Home from './components/Home';
import Like from './categories/Like';


class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      likeList: [],
    
    }
  }


  addMovie = (data) => {

    this.setState({
      likeList: [...this.state.likeList, data]
    })
  }

  deleteMovie = (data) => {
    let newLikeList = this.state.likeList.filter((movie) => {
      return data !== movie.imageUrl;
    });
   
    this.setState({
      likeList: newLikeList,
    })
  }


  render() {
    return (
      <div className="App">
      
        <Search />
        <SideBar />
       
        <Routes>

          <Route exact path="/" element={<Home addMovie={this.addMovie} deleteMovie={this.deleteMovie} likeList={this.state.likeList} />} />
          <Route path="/ScaryMovie" element={<ScaryMovie addMovie={this.addMovie}   deleteMovie={this.deleteMovie}/>} />
          <Route path="/DramaMovies" element={<DramaMovies addMovie={this.addMovie}   deleteMovie={this.deleteMovie}/>} />
          <Route path="/FantasticMovies" element={<FantasticMovies addMovie={this.addMovie} deleteMovie={this.deleteMovie}/>}  />
          <Route path="/ActionMovies" element={<ActionMovies addMovie={this.addMovie}  deleteMovie={this.deleteMovie}/>}  />
          <Route path="/FamilyMovies" element={<FamilyMovies addMovie={this.addMovie}  deleteMovie={this.deleteMovie}/>} />
          <Route path="/Like" element={<Like likeList={this.state.likeList}  deleteMovie={this.deleteMovie} />} />
        
        </Routes>
        
      
      </div>
    )
  }
}

export default App;