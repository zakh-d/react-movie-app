import React, {useEffect} from 'react';
import MovieCard from "./MovieCard";
import {Button, Container, CssBaseline, Grid, makeStyles} from "@material-ui/core";

const useStyles = makeStyles(() => ({
    paddings: {
        padding: 15,
    },
    button: {
        marginTop: 25,
    }
}))


const MovieList = ({list, favorite, getMovieList, getFavoriteList, setItemToFavoriteList, removeItemFromFavoritesList, ...props}) => {
    const classes = useStyles();
    useEffect(() => {
        getMovieList()
        getFavoriteList()

    }, [])
    const modifiedList = list.map(m => {
        if (favorite.includes(m.id)){
            m.inFavorites = true
            return m
        }
        m.inFavorites = false
        return m

    })
    const movieList = modifiedList.map(movie => <Grid key={movie.id} item xs={12} sm={6} md={4} lg={3}><MovieCard {...movie} remove={removeItemFromFavoritesList} set={setItemToFavoriteList}/></Grid>)

    return (
        <>
            <CssBaseline/>
            <Container>
                <Grid className={classes.paddings} container spacing={1} justify={"center"}>
                    {movieList}
                    <Button className={classes.button} variant={'contained'} color={'primary'}>Load More</Button>

                </Grid>
            </Container>

        </>
    )

}

export default MovieList;