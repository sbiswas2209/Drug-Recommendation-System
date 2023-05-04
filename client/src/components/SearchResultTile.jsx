/* eslint-disable react/prop-types */
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Badge,
} from "@material-ui/core";

const useStyles = makeStyles({
  card: {
    marginBottom: 24,
  },
  cardHeader: {
    backgroundColor: "#f0f0f0",
  },
  badge: {
    marginRight: 8,
    marginLeft: 30,
  },
});

function SearchResultTile(props) {
  const classes = useStyles();
  console.log(props);

  return (
    <Card className={classes.card}>
      <CardHeader
        className={classes.cardHeader}
        title={
          <React.Fragment>
            {props.name}
            <Badge
              className={classes.badge}
              badgeContent={props.matchPercentage + "%"}
              color="primary"
            />
          </React.Fragment>
        }
        subheader={`Drug Classes : ${props.commonClasses.join(", ")}`}
      />
      <CardContent>
        <Typography variant="body1">{props.description}</Typography>
      </CardContent>
    </Card>
  );
}

export default SearchResultTile;
