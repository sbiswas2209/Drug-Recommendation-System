import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import SearchScreen from "./pages/home";
import SearchResultPage from "./pages/search";
import PageNotFound from "./pages/404";
import ResultNotFound from "./pages/resultNotFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SearchScreen />} />
        <Route path="/search" element={<SearchResultPage />} />
        <Route path="/not-found" element={<ResultNotFound />} />
        <Route path="/404" element={<PageNotFound />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </Router>
  );
}

export default App;
