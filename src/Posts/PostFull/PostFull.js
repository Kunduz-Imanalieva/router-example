const PostFull = ({ match }) => {
  console.log(match);

  return (
  <h1>Post #{match.params.id}</h1>
  );
}

export default PostFull;
