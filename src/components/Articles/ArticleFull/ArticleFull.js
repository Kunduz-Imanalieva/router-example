import classes from "./ArticleFull.module.css";

const ArticleFull = ({ match }) => {
    console.log(match);
  
    return (
    <h1 className={classes.ArticleFull}>Article #{match.params.id}</h1>
    );
  }
  
  export default ArticleFull;