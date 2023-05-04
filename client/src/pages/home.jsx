import { makeStyles } from "@material-ui/core/styles";
import { Container, Typography, TextField, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useState } from "react";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
  },
  title: {
    marginBottom: 24,
  },
  searchField: {
    marginBottom: 24,
  },
});

function SearchScreen() {
  const [searchQuery, setSearchQuery] = useState(""); // [state, setState
  const classes = useStyles();

  return (
    <Container className={classes.container} maxWidth="sm">
      <Typography className={classes.title} variant="h4" align="center">
        Search Similar Drugs
      </Typography>
      <TextField
        className={classes.searchField}
        label="Enter Drug Name"
        variant="outlined"
        fullWidth
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <Link to={`/search?medicine=${searchQuery}`}>
        <Button variant="contained" color="primary">
          Search
        </Button>
      </Link>
    </Container>
  );
}

export default SearchScreen;
