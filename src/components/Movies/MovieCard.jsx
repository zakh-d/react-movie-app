import React, {useState} from 'react';
import {
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia, Collapse, IconButton,
    makeStyles,
    Typography
} from "@material-ui/core";
import {Bookmark, BookmarkBorder, ExpandLess, ExpandMore} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
    root: {
        borderRadius: 0,
    },
    media: {
        height: 250,
    },
    content: {
        height: 150,
    },
    textMuted: {
        color: "#9e9e9e"
    },

}));

const MovieCard = (props) => {
    const classes = useStyles()

    const [expanded, setExpanded] = useState(false);
    const [inFavorite, setInFavourite] = useState(props.inFavorites)
    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={`https://image.tmdb.org/t/p/original/${props.backdrop_path}`}
                    title="Contemplative Reptile"
                />
                <CardContent className={classes.content}>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.title} ({props.release_date.slice(0, 4)})
                    </Typography>
                    <Typography className={classes.textMuted} gutterBottom variant="h6" component="h4">
                        {props.original_title}
                    </Typography>


                </CardContent>
            </CardActionArea>

            <CardActions>
                {props.inFavorites ?
                    <IconButton aria-label="remove from favourites" onClick={() => {
                        setInFavourite(false)
                        props.remove(props.id)
                    }}>
                        <Bookmark/>
                    </IconButton>
                    :
                    <IconButton aria-label="add to favorites" onClick={() => {
                        setInFavourite(true)
                        props.set(props.id)
                    }}>
                        <BookmarkBorder/>
                    </IconButton>
                }
                <IconButton onClick={() => setExpanded(!expanded)}>
                    { !expanded ?
                        <ExpandMore/>
                        :
                        <ExpandLess />
                    }
                </IconButton>

            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph>{props.overview}</Typography>
                </CardContent>
            </Collapse>

        </Card>
    )
}

export default MovieCard;