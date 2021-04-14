const ArticleFull = ({ match }) => {
    console.log(match);
  
    return (
    <h1>Article #{match.params.id}</h1>
    );
  }
  
  export default ArticleFull;