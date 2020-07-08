import React from "react";
import MovieList from './MovieList.js';

class MovieBrowser extends React.Component {
    //this page shows both movie list and movie filter
    render() {
        return (
        <section className="browser">
            <MovieList movies={this.props.movies}
                       showFavs = {this.props.showFavs}
                       sortTitle={this.props.sortTitle}
                       sortYear={this.props.sortYear}
                       sortRating={this.props.sortRating}
                       showDetails={this.props.showDetails}
                       />
        </section>
        );
       }
}
export default MovieBrowser