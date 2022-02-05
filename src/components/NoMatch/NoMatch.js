import { Link } from "react-router-dom";
import "./NoMatch.css";

const NoMatch = () => {
  return (
    <div className="no-match">
      <div className="info">
        <span>404</span> : No Match Found
      </div>
      <Link to="/" className="back-home">
        Back To Home
      </Link>
    </div>
  );
};

export default NoMatch;
