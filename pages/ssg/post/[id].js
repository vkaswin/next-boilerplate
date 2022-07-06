const Post = ({ data: { body } }) => {
  const style = {
    margin: "20px 15px",
    fontSize: "20px",
  };

  return <div style={style}>{body}</div>;
};

export default Post;

//* getStaticPaths is required for dynamic routes SSG
//* Provide the possible params
export const getStaticPaths = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    const paths = data.map(({ id }) => {
      return { params: { id: String(id) } };
    });
    return {
      paths: paths,
      fallback: false,
    };
  } catch (err) {
    console.log(err);
    return {
      paths: [],
      fallback: false,
    };

    // fallback --> false (if the params not present in the paths will result in 404 page)

    /* fallback --> true (if the params not present in the paths next js will fetch the data 
    form the api and render in the UI and we can show fallback UI using router.isFallback and
    next js will keep track of the newly generated html page and cache it) 
    (this will happen if the page is not generated on the build time)*/

    // fallback --> blocking (similar to true but no fallback UI)
  }
};

//* Staic Site Generation for dynamic routes
export const getStaticProps = async ({ params: { id } }) => {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await res.json();
    return {
      props: {
        data,
      },
    };
  } catch (err) {
    console.log(err);
  }
};
