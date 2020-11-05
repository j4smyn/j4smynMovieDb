import React, { Component } from 'react';
import './App.css';
import MovieRow from './MovieRow.js'
import $ from 'jquery'

class App extends Component {

    constructor(props) {
        super(props)
        this.state = {}

        //const movies = [
        //    {
        //        id: 0, poster_src: "https://image.tmdb.org/t/p/w94_and_h141_bestv2/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
        //        title: "Avengers: Infinity war", overview: "This is my first overview"
        //    },
        //    {
        //        id: 1, poster_src: "https://image.tmdb.org/t/p/w94_and_h141_bestv2/qvktm0BHcnmDpul4Hz01GIazWPr.jpg",
        //        title: "Terminator: Judgement Day", overview: "This is my second overview"
        //    }
        //]

        //this.state = {
        //    rows: [
        //        <p key='1'>This is my row 1</p>,
        //        <p key='2'>This is my row 2</p>,
        //        <p key='3'>This is my row 3</p>
        //    ]
        //}
        //var movieRows=[]
        //movies.forEach((movie) => {

        //    const movieRow = <MovieRow movie={movie} />

        //    movieRows.push(movieRow)
        //}

        //)
        //    this.state={rows: movieRows}

        this.performSearch("2020")
    }

    performSearch(searchTerm) {
        const urlString = "https://api.themoviedb.org/3/search/movie?api_key=4888c9c0bdad651833fac25977549c2c&language=en-US&page=1&include_adult=false&query=" + searchTerm
        $.ajax({
            url: urlString,
            success: (searchResults) => {
                console.log("Fetched data successufuly")
                //console.log(searchResults)
                const results = searchResults.results
                //console.log(results[0])
                var movieRows=[]
                results.forEach((movie) => {
                    movie.poster_src = "https://image.tmdb.org/t/p/w185" + movie.poster_path
                    //console.log(movie.poster_path)
                    const movieRow = <MovieRow key={movie.id} movie={movie} />
                    movieRows.push(movieRow)
                })

                this.setState({ rows: movieRows })
            },
            error: (xhr, status, err) => {
                console.error("Failed to fetch data")
            }
        })
    }
    searchChangeHandler(event) {
        console.log(event.target.value)
        const boundObject=this
        const searchTerm = event.target.value
        boundObject.performSearch(searchTerm)
    }
render () {
    return (
        <div>
            <table className="titleBar">
                <tbody>
                    <tr>
                        <td>
                            <img alt='app icon' width="50" src="MovieDB.svg" />
                        </td>
                        <td width="8" />
                        <td>
                            <h1>MoviesDB</h1>
                        </td>
                    </tr>
                </tbody>
            </table>
            <table className="moviestvshows">
                <tbody>
                    <tr>
                        <td>
                            MOVIES
                        </td>
                        <td width="8" />
                        <td>
                            TVSHOWS
                        </td>
                    </tr>
                </tbody>
            </table>
            <input style={{
                fontSize: 24,
                display: 'block',
                width: '99%',
                paddingTop: 8,
                paddingBottom: 8,
                paddingLeft: 16
            }} onChange={this.searchChangeHandler.bind(this)} placeholder="Enter search term" />

            {this.state.rows}
        </div>
    );
}
}

export default App;
