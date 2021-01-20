import React, { useState, useEffect, useLayoutEffect } from "react";

import * as Movie from '../services/fakeMovieService';

const Movies = () => {

    const [movies, setMovies] = useState([]);

    const getMovies = async () => {
        const response = await Movie.getMovies();
        setMovies(response);
    };

    useEffect(() => {
        getMovies();
    }, []);

    const handleDelete = (movie) => {
        const newMovies = movies.filter(m => m._id !== movie._id);
        setMovies(newMovies);
        console.log(movie);
    }

    return (
        <>

<div>There are {movies.length} movies in database</div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Genre</th>
                        <th>Stock</th>
                        <th>Rate</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>

                    {movies.map(movie => {
                        const { _id, title, genre, numberInStock, dailyRentalRate } = movie;
                        return (
                            <tr key={_id}>
                                <td>{title}</td>
                                <td>{genre.name}</td>
                                <td>{numberInStock}</td>
                                <td>{dailyRentalRate}</td>
                                <td><button className="btn btn-danger btn-sm" onClick={() => handleDelete(movie)}>Delete</button></td>
                            </tr>
                        )

                    })}
                </tbody>
            </table>
            <div>

            </div>
        </>
    );
}


export default Movies