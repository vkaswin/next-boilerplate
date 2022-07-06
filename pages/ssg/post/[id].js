const Post = ({ data: { body } }) => {
  const style = {
    margin: "20px 15px",
    fontSize: "20px",
  };

  return <div style={style}>{body}</div>;
};

export default Post;

//* getStaticPaths is required for dynamic routes SSG
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
