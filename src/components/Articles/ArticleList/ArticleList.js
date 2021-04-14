import { Link } from "react-router-dom";

const ArticleList = () => {
  const results = [];
  for (let id = 1; id <= 5; id++) {
    results.push(
      <li>
        <Link to={"/articles/" + id}>Article number #{id}</Link>
      </li>
    );
  }
  return <ul>{results}</ul>;
};

export default ArticleList;