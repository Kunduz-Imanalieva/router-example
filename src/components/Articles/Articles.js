import { Route } from "react-router";
import ArticleFull from "./ArticleFull/ArticleFull";
import ArticleList from "./ArticleList/ArticleList";

const Posts = ({ match }) => {
  return (
    <div>
      <ArticleList/>
      <Route path="/articles/:id" component={ArticleFull} />
    </div>
  );
};

export default Posts;