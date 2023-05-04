import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: theme.palette.background.default,
  },
  heading: {
    marginBottom: theme.spacing(2),
  },
  button: {
    marginTop: theme.spacing(2),
  },
}));

const PageNotFound = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className={classes.root}>
      <Typography variant="h3" className={classes.heading}>
        404 - Page not found
      </Typography>

      <Typography variant="body2" color="textSecondary">
        <Link href="/" color="inherit">
          <Button
            variant="contained"
            color="primary"
            onClick={handleBack}
            className={classes.button}
          >
            Go to homepage
          </Button>
        </Link>
      </Typography>
    </div>
  );
};

export default PageNotFound;
