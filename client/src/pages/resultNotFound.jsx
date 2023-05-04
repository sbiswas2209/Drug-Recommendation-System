import { makeStyles } from "@material-ui/core/styles";
import { Typography, Container, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    flexDirection: "column",
  },
  button: {
    marginTop: "16px",
  },
});

function ResultNotFound() {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Typography variant="h3">Result Not Found</Typography>
      <Button
        className={classes.button}
        variant="contained"
        color="primary"
        component={Link}
        to="/"
      >
        Go to Homepage
      </Button>
    </Container>
  );
}

export default ResultNotFound;
