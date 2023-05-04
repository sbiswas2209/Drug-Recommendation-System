import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Typography, LinearProgress } from "@material-ui/core";
import SearchResultTile from "../components/SearchResultTile";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
  container: {
    marginTop: 24,
  },
  title: {
    marginBottom: 16,
  },
});

function SearchResultPage() {
  const classes = useStyles();
  const [searchResults, setSearchResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState();
  const [isLoading, setLoading] = useState(true);
  const [medicalCondition, setMedicalCondition] = useState();
  const [searchParams] = useSearchParams();
  const baseUrl = "http://localhost:8000";
  const nav = useNavigate();

  useEffect(() => {
    axios
      .get(
        baseUrl + "/api/recommend/similar?name=" + searchParams.get("medicine")
      )
      .then((res) => {
        setSearchResults(res.data.similarDrugs);
        setSearchQuery(res.data.searchedDrug);
        setMedicalCondition(res.data.medicalCondition);
        setLoading(false);
      })
      .catch(() => {
        nav("/not-found");
      });
  }, [nav, searchParams]);

  return (
    <Container className={classes.container}>
      {isLoading ? (
        <div className={classes.root}>
          <LinearProgress />
        </div>
      ) : (
        <div>
          <Typography className={classes.title} variant="h5">
            Search Results for : {searchQuery.name}
          </Typography>
          <Typography className={classes.title} variant="h6">
            Medical Condition : {medicalCondition}
          </Typography>
          {searchResults.map((result) => (
            <SearchResultTile
              key={result.id}
              name={result.name}
              description={result.description}
              matchPercentage={
                (result.drugClasses.filter((drugClass) =>
                  searchQuery.drugClasses.includes(drugClass)
                ).length /
                  searchQuery.drugClasses.length) *
                100
              }
              commonClasses={result.drugClasses}
            />
          ))}
        </div>
      )}
    </Container>
  );
}

export default SearchResultPage;
