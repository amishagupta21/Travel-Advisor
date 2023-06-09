import React, { useState } from 'react'
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';
import useStyles from "./styles"
import PlaceDetails from "../PlaceDetails/PlaceDeatils"
const List = ({places,childClicked}) => {
    const classes = useStyles();
    const [type, setType] = useState('resturants')
    const [rating, setRating] = useState('')
    console.log({childClicked})
    return (
        <div className={classes.container}>
            <Typography variant="h4">
                Resturants, Hotels & Attractions around you.
            </Typography>
            <FormControl className={classes.formControl}>
                <InputLabel>Type
                </InputLabel>
                <Select value={type} onChange={(e) => setType(e.target.value)}>
                    <MenuItem value="resturants">Resturants
                    </MenuItem>
                    <MenuItem value="hotels">Hotels
                    </MenuItem>
                    <MenuItem value="attractions">Attractions
                    </MenuItem>
                </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
                <InputLabel>Rating
                </InputLabel>
                <Select value={rating} onChange={(e) => setRating(e.target.value)}>
                    <MenuItem value={0}>All
                    </MenuItem>
                    <MenuItem value={3}>Above 3.0
                    </MenuItem>
                    <MenuItem value={4}>Above 4.0
                    </MenuItem>
                    <MenuItem value={4.5}>Above 4.5
                    </MenuItem>
                </Select>
            </FormControl>
             <Grid container spacing={3} className={classes.list}>
            {places?.map((place, i) => (
              <Grid key={i} item xs={12}>
                <PlaceDetails  place={place} />
              </Grid>
            ))}
          </Grid>
        </div>
    )
}
export default List;