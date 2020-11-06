import React from 'react'

class MovieRow extends React.Component {

    viewMovie() {
        const url = "https://www.themoviedb.org/movie/" + this.props.movie.id
        window.location.href = url

    }
    render() {
        return <div key={this.props.movie.id} class="grid2x2">
            <div class="box box1"><div><img width="150" alt="poster" src={this.props.movie.poster_src} />
            </div><div><h3>{this.props.movie.title}</h3></div>
                <input type="button" onClick={this.viewMovie.bind(this)} value="View" /></div>

        </div>
        //return <table key={this.props.movie.id}>
        //    <tbody>
        //        <tr>
        //            <td>
        //                <img width="80" alt="poster" src={this.props.movie.poster_src} />
        //            </td>
        //            <td>
        //                <h3>{this.props.movie.title}</h3>
        //                <p>{this.props.movie.overview}</p>
        //                <input type="button" onClick={this.viewMovie.bind(this)} value="View" />
        //            </td>
        //        </tr>
        //    </tbody>
        //</table>
    }
}

export default MovieRow